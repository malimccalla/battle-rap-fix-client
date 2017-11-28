import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import Input from '../../components/common/Form/Input';
import { Container } from '../../components/common/Layout';
import { InputButton } from '../../components/common/Button';

import mutation from '../../mutations/login';

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
      window.location.href = '/dashboard';
    } else {
      const err = {};
      errors.forEach(({ path, message }) => {
        err[`${path}Error`] = message;
      });

      this.setState({ errors: err });
    }
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
        <h1>Login</h1>
        <form onSubmit={this.onSubmit}>
          <Input
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={this.onChange}
            error={`${!!emailError}`}
          />
          <Input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={this.onChange}
            error={`${!!passwordError}`}
          />
          <InputButton primary type="submit" value="Submit" />
        </form>
        <ul>{errorList.map(error => <li key={error}>{error}</li>)}</ul>
      </Container>
    );
  }
}

Login.propTypes = {
  mutate: PropTypes.func.isRequired,
};

export default graphql(mutation)(Login);
