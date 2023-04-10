import React from 'react';
import { IPost } from '../../interfaces';
import { CommentInfo } from '../CommentInfo';

interface IProps {
  comments: IPost["comments"];
}

export const CommentList = ({ comments }: IProps) => {
  const commentInfoElts = comments.map(comment => (
    <CommentInfo key={comment.id} comment={comment}/>
  ));

  return (
    <div className="border-t-2 border-brand-400 mt-8">
      { commentInfoElts }
    </div>
  )
}