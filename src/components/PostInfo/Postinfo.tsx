import React, { useState } from 'react';
import { IPost } from '../../interfaces';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import { capitalizeFirstLetter } from '../../utils';
import './styles.css';

interface IProps {
  post: IPost;
}

export const PostInfo = ({ post }: IProps) => {
  const { user, comments, body, title } = post;
  const [isCommentsShown, setIsCommentsShown] = useState<boolean>(false);

  return (
    <div className="card bg-slate-100 border-8 border-brand-600 shadow-md shadow-brand-300 px-8 py-6">
      <h2 className="text-2xl font-bold">{capitalizeFirstLetter(title)}</h2>
      <p className="post-card-body mt-4">{capitalizeFirstLetter(body)}</p>
      <UserInfo user={user}/>
      {!!comments.length &&
        <>
          <button
            className="btn"
            onClick={() => setIsCommentsShown(prev => !prev)}
          >
            {isCommentsShown ? 'Hide comments' : 'Show Comments'}
          </button>
          {isCommentsShown && 
            <>
              <CommentList comments={comments} />
              <button
                className="btn"
                onClick={() => setIsCommentsShown(prev => !prev)}
              >
                Hide comments
              </button>
            </>
          }
        </>
      }
    </div>
  )
}