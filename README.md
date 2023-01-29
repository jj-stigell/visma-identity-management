# Visma Identity Management

## Table of Contents:

- [Problem](#problem)
- [Task](#task)
- [Description](#description)
- [Run program](#run-program)

## Problem

Visma Solutions Oy is developing an application for identity management. With the application, users can login to integrated 
applications, confirm payments and sign documents. Identity management is a mobile application, and other apps can call its 
services through deep linking. When this is used, the identity management application would open automatically from the 
right in-app location. In this assignment, you will be implementing a part of this logic.

## Task

Your task is to design and implement a class which is responsible for identifying what kind of requests it receives. 
Other apps can call the identity app using the scheme visma-identity.

A uri consists of three parts:
Example: visma-identity://login?source=severa
Scheme: visma-identity
Path: login
Parameters: source=severa

The class needs to satisfy the following requirements:
1. It takes the following information as input
    URI (type: string)
    Example: visma-identity://login?source=severa
2. It has to parse and validate that:
    Used URI scheme is right: visma-identity
    Path is one of the allowed: login, confirm or sign
3. All parameters for a path are valid
4. Requirements for the parameters:
      - Path login:
      source(type:string)
      Example: visma-identity://login?source=severa
      - Path confirm:
      source(type:string)
      payment number(type:integer)
      Example: visma-identity://confirm?source=netvisor&paymentnumber=102226
      - Path sign:
     source(type: string)
     documentid(type:string)
     Example: visma-identity://sign?source=vismasign&documentid=105ab44
5. Class returns:
     Path
     Parameters as key value pairs
6. Is designed using the practises of object-oriented programming
7. Implementation needs to have a client, which uses the new class. You can for example implement the client 
as another class that uses the relevant methods.

Write a short description of how you understood the problem, what challenges you had with the implementation and
what you could further improve in your implementation. If you had to make compromises, we would like to hear about them.

## Description

I understod the problem as implementing a class that can be initialized with an uri string, including the necessary data.
After creating a new class instance, user can call the methods `getPath()` and `getParams()` to fetch the relevant data
extracted from the uri string.

During the implementation process, I encountered some challenges related to processing the parameters and creating 
the key-value object. Despite my efforts, there are still areas that could be further improved in my implementation, 
for an example adding testing for the class. Changes and refactoring would become easier as automated testing could 
take care of finding possible breaking changes after updating the code base. Also error handling caused by malformed 
uri could be improved, especially when params are invalid or missing.

I did have to make some compromises during the implementation process, such as the validation of `paymentnumber` parameter,
as it was the only parameter explicitly number type. Since we know that only `paymentnumber` has type number, we can just 
check if the current param being prosessed has key `paymentnumber` and then do type conversions. This of course relies 
on the fact that client/user etc. actually inputs string type number that has no non-numeric characters in it.

## Run (demo) program

Install dependencies at the project root:
```
$ npm install
```

Compile and run with command:
```
$ npm run start
```
