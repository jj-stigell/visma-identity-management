/** Type for the IdentityManager configuration object. */
export type Config = {
  scheme: string;
  paths: Array<string>;
};

/* Type for the params in the uri. */
export type Params = {
  [ key: string ]: string | number
};

const defaultConfig: Config = {
  scheme: 'visma-identity',
  paths: ['login', 'confirm', 'sign']
};

/**
 * IdentityManager parses Uri, and returns through its methods:
 * - the current scheme in use
 * - path of the uri
 * - parameters of the uri
 */
export class IdentityManager {
  private scheme: string;
  private path: string;
  private params: Params = { };
  private config: Config = defaultConfig;

  /**
   * Constructor for the class. Class has configuration, which can be set (optional).
   * @param {string} uri - Uri string.
   * @param {Config} configuration - Optional configuration, defaults to default configuration.
   */
  constructor(uri: string, configuration: Config = defaultConfig) {
    this.config = configuration;
    const inputParts: Array<string> = uri.split('://');
    const pathAndParams: Array<string> = inputParts[1].split('?');

    // Check that scheme is correct
    if (inputParts[0] !== this.config.scheme) {
      throw new Error(`scheme not valid, must be ${this.config.scheme}`);
    };
    this.scheme = inputParts[0];

    // Check that path is on of the paths in configuration
    if (!this.config.paths.includes(pathAndParams[0])) {
      throw new Error(`Invalid path, not one of ${this.config.paths}`);
    };
    this.path = pathAndParams[0];

    // Parse and set params only if exists
    if (pathAndParams[1]) {
      pathAndParams[1].split('&').forEach((param: string) => {
        const keyValue: Array<string> = param.split('=');
        if (keyValue[0] === 'paymentnumber') {
          this.params[keyValue[0]] = Number(keyValue[1]);
        } else {
          this.params[keyValue[0]] = keyValue[1];
        }
      })
    }
  }

  /**
   * Get the uri path.
   * @returns {string} - Uri path in string format. 
   */
  public getPath(): string {
    return this.path;
  }

  /**
   * Get all uri params.
   * @returns {Params} - Params in a key-value object.
   */
  public getParams(): Params {
    return this.params;
  }

  /**
   * Get the uri scheme.
   * @returns {string} - Uri scheme in string format. 
   */
  public getScheme(): string {
    return this.scheme;
  }
}
