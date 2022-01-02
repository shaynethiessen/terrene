import React, {useEffect, useState} from 'react';
import {Button, Form, Icon} from 'semantic-ui-react';
import debug from 'debug';
import type {MemberLoginParams} from 'terrene-types';
import {useNavigate} from 'react-router-dom';
import {ContentWrapper} from '../../Layout';
import {server} from '../../core/server';

const d = debug('web.src.server');

export function Content() {
	const navigate = useNavigate();
	const [login, setLogin] = useState(false);
	const [loginData, setLoginData] = useState<MemberLoginParams>({email: '', password: ''});

	useEffect(() => {
		if (login && loginData.email !== '' && loginData.password !== '') {
			server
				.fetch('member/login', loginData)
				.then(response => {
					setLogin(false);
					navigate(`admin/${response.data.id}`);
				})
				.catch(() => setLogin(false));
		}
	}, [login, loginData, navigate]);

	return (
		<ContentWrapper
			title="Login"
			content={
				<Form>
					<Form.Group widths="equal">
						<Form.Input
							iconPosition="left"
							placeholder="Email"
							onChange={e => setLoginData({...loginData, email: e.target.value})}
							autoComplete="email"
						>
							<Icon name="mail" />
							<input />
						</Form.Input>
					</Form.Group>
					<Form.Group widths="equal">
						<Form.Input
							iconPosition="left"
							placeholder="Password"
							onChange={e => setLoginData({...loginData, password: e.target.value})}
							type="password"
							autoComplete="current-password"
						>
							<Icon name="eye" />
							<input />
						</Form.Input>
					</Form.Group>
					<Form.Group widths="equal">
						<Button onClick={() => setLogin(true)}>Login</Button>
					</Form.Group>
				</Form>
			}
		/>
	);
}
