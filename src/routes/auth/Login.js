import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import { Container, Form, Input, Button, Message } from 'semantic-ui-react';

import loginMutation from '../../mutations/login';

class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: {},
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSubmit = async () => {
    const { email, password } = this.state;
    const response = await this.props.mutate({
      variables: { email, password },
    });

    const { ok, token, refreshToken, errors } = response.data.login;

    if (ok) {
      localStorage.setItem('token', token);
      localStorage.setItem('refreshToken', refreshToken);
      this.props.history.push('/dashboard');
    } else {
      const err = {};
      errors.forEach(({ path, message }) => {
        err[`${path}Error`] = message;
      });

      this.setState({ errors: err });
      console.log(this.state.errors);
    }
  };

  render() {
    const errorList = [];
    const {
      email,
      password,
      errors: { emailError, passwordError },
    } = this.state;

    if (emailError) {
      errorList.push(emailError);
    }
    if (passwordError) {
      errorList.push(passwordError);
    }

    return (
      <Container>
        <h1>Login</h1>
        <Form>
          <Form.Field error={!!emailError}>
            <Input
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={this.onChange}
            />
          </Form.Field>
          <Form.Field error={!!passwordError}>
            <Input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={this.onChange}
            />
          </Form.Field>
          <Button primary onClick={this.onSubmit}>
            Submit
          </Button>
        </Form>
        {errorList.length ? (
          <Message
            error
            header="There was some errors with your submission"
            list={errorList}
          />
        ) : null}
      </Container>
    );
  }
}

Login.propTypes = {
  mutate: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default graphql(loginMutation)(Login);
