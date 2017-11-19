import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import { Container, Form, Input, Button, Message } from 'semantic-ui-react';

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

  onSubmit = async () => {
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
    if (passwordError) {
      errorList.push(passwordError);
    }

    return (
      <Container>
        <h1>Register</h1>
        <Form>
          <Form.Field error={!!usernameError}>
            <Input
              type="text"
              name="username"
              value={username}
              placeholder="Username"
              onChange={this.onChange}
            />
          </Form.Field>
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

Register.propTypes = {
  mutate: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default graphql(registerMutation)(Register);
