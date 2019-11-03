var AmazonCognitoIdentity = require('amazon-cognito-identity-js');
var env = require('../../env.json');

const poolData = {
	UserPoolId: env.USER_POOL_ID,
	ClientId: env.CLIENT_ID,
};
const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

function Signup(username: string, password: string, email: string) {
	var attributeList = [];

	const dataEmail = {
		Name: 'email',
		Value: email,
	};

	const attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);

	attributeList.push(attributeEmail);

	userPool.signUp(username, password, attributeList, [], function(err: any, result: any) {
		if (err) return '실패했습니다. 다시 시도해주세요.';
		return '성공했습니다. 유저이름은 "' + result.user.getUsername() + '" 입니다';
	});
}

export default Signup;
