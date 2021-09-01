# AWS-SDKJSV3-Examples
A simple repo to show, how to use the new V3 Javascript SDK

## Prerequisites

First you need to [install Node.js](https://nodejs.org/en/download/) 10.3.0 or later. The AWS CDK Toolkit (cdk command-line tool) and the AWS Construct Library are developed in TypeScript and run on Node.js. The bindings for other supported languages use this back end and tool set. We suggest the latest LTS version.

You must provide your credentials and an AWS Region to use AWS CDK, if you have not already done so.

If you have the [AWS CLI](https://aws.amazon.com/de/cli/) installed, the easiest way to satisfy this requirement is to install the AWS CLI and issue the following command:

```json
aws configure
````

Provide your AWS access key ID, secret access key, and default region when prompted.

You may also manually create or edit the  `~/.aws/config` and  `~/.aws/credentials` (Linux or Mac) or `%USERPROFILE%\.aws\config` and `%USERPROFILE%\.aws\credentials` (Windows) files to contain credentials and a default region, in the following format.

In ~/.aws/config or %USERPROFILE%\.aws\config

    [default]
    region=eu-west-1

In ~/.aws/credentials or %USERPROFILE%\.aws\credentials

    [default]
    aws_access_key_id=AKIAI44QH8DHBEXAMPLE
    aws_secret_access_key=je7MtGbClwBF/2Zp9Utk/h3yCo8nvbEXAMPLEKEY

Finally, you can set the environment variables AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, and AWS_DEFAULT_REGION to appropriate values.

### Disclaimer ###
This code is intended as an example of how to accomplish the described use case to be used as a reference and is not intended for production
If you produce any system based on this code we recommend you to run a [Well-Architected Review](https://aws.amazon.com/de/architecture/well-architected/) over it before deploying into a production environment. 

This example is published under the MIT License
