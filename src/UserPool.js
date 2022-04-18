import { CognitoUserPool } from "amazon-cognito-identity-js";

// UserPoolId and ClientId varible names must be EXACT
const poolData = {
  UserPoolId: "us-east-1_cwksBWvSy",
  ClientId: "5oas5m81cqek6d0eg2nnos08r8",
};

export default new CognitoUserPool(poolData);
