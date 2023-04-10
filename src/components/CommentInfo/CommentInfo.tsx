import React from 'react';
import { IComment } from '../../interfaces';
import { capitalizeFirstLetter } from '../../utils';

interface IProps {
  comment: IComment;
}

export const CommentInfo = ({ comment }: IProps) => {
  const { name, body, email } = comment;

  return (
    <div className="mt-7">
      <h3 className="font-bold text-lg">{ capitalizeFirstLetter(name) }</h3>
      <span className="text-sm text-brand-400">{ email }</span>
      <p className="mt-2">{ capitalizeFirstLetter(body) }</p>
    </div>
  )
}