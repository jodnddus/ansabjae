import React from 'react';
import styled from 'styled-components';

import { shadow } from '../../utils/styleUtil';

const Container = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const ShadowedBox = styled.div`
	width: 500px;
	${shadow(2)};
`;

function AuthPage() {
	return (
		<Container>
			<ShadowedBox>
				<h1>asdf</h1>
			</ShadowedBox>
		</Container>
	);
}

export default AuthPage;
