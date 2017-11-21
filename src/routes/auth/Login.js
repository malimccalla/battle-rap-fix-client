import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import { Container } from '../../components/Layout';

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

  onSubmit = async e => {
    e.preventDefault();

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
    }
  };

  alerts = errorList => {
    console.log('errors', errorList);
    errorList.map(error => <li key={error}>{error}</li>);
  };

  render() {
    const errorList = [];
    const {
      email,
      password,
      errors: { emailError, passwordError },
    } = this.state;

    if (emailError) errorList.push(emailError);
    if (passwordError) errorList.push(passwordError);

    return (
      <Container>
        <form onSubmit={this.onSubmit}>
          <h1>Login</h1>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.onChange}
            error={`${!!emailError}`}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={this.onChange}
            error={`${!!passwordError}`}
          />
          <input type="submit" value="Submit" />
        </form>
        <ul>{errorList.map(error => <li key={error}>{error}</li>)}</ul>
      </Container>
    );
  }
}

Login.propTypes = {
  mutate: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default graphql(loginMutation)(Login);
