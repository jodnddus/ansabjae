var AmazonCognitoIdentity = require('amazon-cognito-identity-js');
var env = require('../../env.json');

const poolData = {
	UserPoolId: env.USER_POOL_ID,
	ClientId: env.CLIENT_ID,
};

function Signin(username: string, password: string) {
	var authenticationData = {
		Username: username,
		Password: password,
	};
	const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
	const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
	const userData = {
		Username: username,
		Pool: userPool,
	};
	const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
	cognitoUser.authenticateUser(authenticationDetails, {
		onSuccess: (result: any) => {
			console.log(result.getAccessToken().getJwtToken());
		},
		onFailure: (err: any) => console.log(err),
	});
}

export default Signin;
