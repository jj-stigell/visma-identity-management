import { IdentityManager } from "./identityManager";

// Test client class for demonstration purposes
class TestClient {
  public handleIdentityRequest(uri: string) {
    const request: IdentityManager = new IdentityManager(uri);
    console.log('Uri information')
    console.log('Scheme is:', request.getScheme());
    console.log('Path is:', request.getPath());
    console.log('Parameters are:', request.getParams());
  }
}

const client = new TestClient();
client.handleIdentityRequest('visma-identity://login?source=severa');
client.handleIdentityRequest('visma-identity://sign?source=vismasign&documentid=105ab44');
client.handleIdentityRequest('visma-identity://confirm?source=netvisor&paymentnumber=102226');
