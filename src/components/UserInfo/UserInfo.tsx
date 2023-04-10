import React from 'react';
import { IPost } from '../../interfaces';

interface IProps {
  user: IPost["user"];
}

export const UserInfo = ({ user }: IProps) => {
  const { name, email } = user || {name: 'guest'};

  return (
    <div className="text-right">
      <div className="inline-flex text-left flex-col mt-4">
        <span className="font-bold">Author: <span className="text-brand-600">{ name }</span></span>
        {email && <span className="text-brand-400 text-sm"> { email }</span>}
      </div>
    </div>
  )
}