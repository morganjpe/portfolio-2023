import * as cdk from "aws-cdk-lib";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as apigw from "aws-cdk-lib/aws-apigateway";
import { Construct } from "constructs";
import { SPADeploy } from "cdk-spa-deploy";

export class PersonalStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const stravaLambda = new lambda.Function(this, "StavaLambda", {
      runtime: lambda.Runtime.NODEJS_16_X,
      code: lambda.Code.fromAsset("lambda"),
      handler: "strava.handler",
    });

    new SPADeploy(this, "client").createSiteWithCloudfront({
      indexDoc: "index.html",
      websiteFolder: `client/out`,
    });

    new apigw.LambdaRestApi(this, "StravaLambdaEndpoint", {
      handler: stravaLambda,
    });
  }
}
