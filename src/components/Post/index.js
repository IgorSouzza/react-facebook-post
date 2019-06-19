import React, { Component } from 'react';

import PostHeader from '../PostHeader';

import { PostBody, PostContent } from './styles';

class Post extends Component {
  render() {
    const posts = this.props.postData;

    return (
      <>
        {
          posts.map(post =>
            <PostBody key={post.name}>
              <PostHeader name={post.name} time={post.date} picture={post.picture} />
              <hr />
              <PostContent>
                {post.content}
              </PostContent>
            </PostBody>
          )
        }
      </>
    )
  }
}

export default Post;
