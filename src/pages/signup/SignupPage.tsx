import React, { useState } from 'react';
import styled from 'styled-components';

import { shadow } from '../../utils/styleUtil';

const Container = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const MainForm = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	text-align: center;
	height: 60%;
	width: 500px;
	${shadow(1)}
`;

const Header = styled.h1`
	border: 1px solid black;
	margin-top: 0;
	height: 15%;
`;

const Input = styled.input`
	font-size: 1.2em;
	width: 85%;
	height: 40px;
	border-width: 2px;
	border-color: transparent transparent #e8e8e8 transparent;
	margin: 10px;
	outline: none;
`;

const Btn = styled.button`
	width: 85%;
	border-radius: 1px;
	height: 35px;
	font-size: 1.2em;
	font-weight: bold;
	margin: 3px 0;
`;

function AuthPage() {
	const [username, setUsername] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	return (
		<Container>
			<MainForm>
				<Header>안삽재농원</Header>
				<div>
					<Input type="text" placeholder="닉네임을 입력하세요." onChange={(e: React.FormEvent<HTMLInputElement>) => setUsername(e.currentTarget.value)} />
					<Input type="text" placeholder="이메일을 입력하세요." onChange={(e: React.FormEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)} />
					<Input type="text" placeholder="비밀번호를 입력하세요." onChange={(e: React.FormEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)} />
				</div>
				<div style={{ marginBottom: 30 }}>
					<Btn onClick={() => console.log({ username, email, password })}>회원가입</Btn>
				</div>
			</MainForm>
		</Container>
	);
}

export default AuthPage;
