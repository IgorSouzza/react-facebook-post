import React, { Component } from 'react';

import { Container, Avatar, Name } from './styles';

class PostHeader extends Component {
  timeConversion = (date) => {
    const postDate = new Date(date);
    const dateNow = new Date();
    const millisec = Math.abs(postDate - dateNow);

    const seconds = Math.round((millisec / 1000));
    const minutes = Math.round((millisec / (1000 * 60)));
    const hours = Math.round((millisec / (1000 * 60 * 60)));
    const days = Math.round((millisec / (1000 * 60 * 60 * 24)));

    if (seconds < 60) {
      return seconds + " segundos";
    } else if (minutes < 60) {
      return minutes + " minutos";
    } else if (hours < 24) {
      return hours + " horas";
    } else {
      return days + " dias"
    }
  }

  render() {
    return (
      <Container>
        <Avatar background={this.props.picture} />
        <Name>
          <h1>{this.props.name}</h1>
          <span>há {this.timeConversion(this.props.time)}</span>
        </Name>
      </Container>
    );
  }
}

export default PostHeader;
