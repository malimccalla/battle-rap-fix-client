import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import Layout from '../../components/Layout';
import Card from '../../components/Card';
import Alert from '../../components/Alert';
import { Container } from '../../components/common/Grid';
import Input from '../../components/common/Form/Input';
import { InputButton } from '../../components/common/Button';

import query from '../../queries/allArtists';
import mutation from '../../mutations/createArtist';

class CreateArtist extends Component {
  state = {
    stageName: '',
    firstName: '',
    lastName: '',
    errors: {},
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSubmit = async e => {
    e.preventDefault();

    const { stageName, firstName, lastName } = this.state;
    const response = await this.props.mutate({
      variables: { stageName, firstName, lastName },
      refetchQueries: [{ query }],
    });

    const { ok, errors } = response.data.createArtist;

    if (ok) {
      this.props.history.push('/artists');
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
      stageName,
      firstName,
      lastName,
      errors: { stageNameError, firstNameError, lastNameError },
    } = this.state;

    if (stageNameError) errorList.push(stageNameError);
    if (firstNameError) errorList.push(firstNameError);
    if (lastNameError) errorList.push(lastNameError);

    return (
      <Layout>
        <Container>
          <Card width="500px">
            <h2>Add Artist</h2>
            <form onSubmit={this.onSubmit}>
              <Input
                type="text"
                name="stageName"
                value={stageName}
                placeholder="Stage Name"
                onChange={this.onChange}
                error={`${!!stageNameError}`}
              />
              <Input
                type="text"
                name="firstName"
                value={firstName}
                placeholder="First Name"
                onChange={this.onChange}
                error={`${!!firstNameError}`}
              />
              <Input
                type="text"
                name="lastName"
                value={lastName}
                placeholder="Last Name"
                onChange={this.onChange}
                error={`${!!lastNameError}`}
              />
              <InputButton primary type="submit" value="Create Artist" />
            </form>
            {errorList.length ? (
              <Alert
                errors={errorList}
                message="There was some errors with your submission"
              />
            ) : null}
          </Card>
        </Container>
      </Layout>
    );
  }
}

CreateArtist.propTypes = {
  mutate: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default graphql(mutation)(CreateArtist);
