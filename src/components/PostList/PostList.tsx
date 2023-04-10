import React from 'react';
import { IPost } from '../../interfaces';
import { PostInfo } from '../PostInfo';
import { Fade } from 'react-awesome-reveal';

interface IProps {
  posts: IPost[];
}

export const PostList = ({ posts }: IProps) => {
  const postInfoEls = posts.map(post => (
    <PostInfo post={post} key={post.id}/>
  ));

  return (
    <div className="px-10 py-8 flex flex-col gap-8">
      <Fade direction="left" triggerOnce fraction={.7} duration={500}>{ postInfoEls }</Fade>    
    </div>
  )
}