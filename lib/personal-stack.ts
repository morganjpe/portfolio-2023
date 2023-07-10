import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { SPADeploy } from "cdk-spa-deploy";

export class PersonalStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new SPADeploy(this, "client").createSiteWithCloudfront({
      indexDoc: "index.html",
      websiteFolder: `${process.env.WORKING_DIR}/client/dist`,
    });
  }
}
