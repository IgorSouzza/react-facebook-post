import React, { Component } from 'react';

import Header from './components/Header';
import Post from './components/Post';

class App extends Component {
  state = {
    post: []
  }

  componentDidMount() {
    console.log(Math.abs(new Date() - '2019-06-07 15:13:06'));
    this.setState({
      post: [
        {
          'name': 'Diego Schell Fernandes',
          'date': '18-06-2019',
          'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis animi dolorem, repudiandae obcaecati repellendus fuga laboriosam corrupti voluptatibus quibusdam accusamus eligendi at voluptatum consequuntur ad dolore hic et quidem accusantium?',
          'picture': 'https://picsum.photos/id/781/200/200'
        },
        {
          'name': 'Rubia Savolksi',
          'date': '18-06-2019',
          'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. obcaecati repellendus fuga laboriosam corrupti voluptatibus quibusdam accusamus eligendi at voluptatum consequuntur ad dolore hic et quidem accusantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. obcaecati repellendus fuga laboriosam corrupti voluptatibus quibusdam accusamus eligendi at voluptatum consequuntur ad dolore hic et quidem accusantium?',
          'picture': 'https://picsum.photos/id/447/200/200'
        },
        {
          'name': 'Mr. Mustache',
          'date': '18-06-2019',
          'content': 'Lorem ipsum dolor. Blanditiis animi dolorem, repudiandae obcaecati repellendus fuga laboriosam corrupti voluptatibus quibusdam accusamus ad dolore hic et quidem accusantium?',
          'picture': 'https://picsum.photos/id/815/200/200'
        }
      ]
    });
  }

  render() {
    return (
      <>
        <Header />
        <Post postData={this.state.post} />
      </>

    );
  }
}

export default App;
