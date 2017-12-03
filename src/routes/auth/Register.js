import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import Card from '../../components/Card';
import Alert from '../../components/Alert';
import Input from '../../components/common/Form/Input';
import { Container } from '../../components/common/Layout';
import { InputButton } from '../../components/common/Button';

import registerMutation from '../../mutations/register';

class Register extends Component {
  state = {
    username: '',
    usernameError: '',
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSubmit = async e => {
    e.preventDefault();

    this.setState({
      usernameError: '',
      emailError: '',
      passwordError: '',
    });

    const { username, email, password } = this.state;
    const response = await this.props.mutate({
      variables: { username, email, password },
    });

    const { ok, errors } = response.data.register;

    if (ok) {
      this.props.history.push('/login');
    } else {
      const err = {};
      errors.forEach(({ path, message }) => {
        err[`${path}Error`] = message;
      });

      this.setState(err);
    }
  };

  render() {
    const errorList = [];
    const {
      username,
      email,
      password,
      usernameError,
      emailError,
      passwordError,
    } = this.state;

    if (emailError) {
      errorList.push(emailError);
    }
    if (usernameError) {
      errorList.push(usernameError);
    }
    if (passwordError) {
      errorList.push(passwordError);
    }

    return (
      <Container>
        <Card width="500px">
          <h1>Register</h1>
          <form onSubmit={this.onSubmit}>
            <Input
              type="text"
              name="username"
              value={username}
              placeholder="Username"
              onChange={this.onChange}
              error={`${!!usernameError}`}
            />
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
            <InputButton primary type="submit" value="Register" />
          </form>
          {errorList.length ? (
            <Alert
              errors={errorList}
              message="There was some errors with your submission"
            />
          ) : null}
        </Card>
      </Container>
    );
  }
}

Register.propTypes = {
  mutate: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default graphql(registerMutation)(Register);
