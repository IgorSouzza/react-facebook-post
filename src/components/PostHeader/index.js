import React, { Component } from 'react';

import { Container, Avatar, Name } from './styles';

class PostHeader extends Component {
  render() {
    return (
      <Container>
        <Avatar background={this.props.picture} />
        <Name>
          <h1>{this.props.name}</h1>
          <span>há {this.props.time}</span>
        </Name>
      </Container>
    );
  }
}

export default PostHeader;
