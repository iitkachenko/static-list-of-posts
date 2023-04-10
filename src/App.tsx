import React from 'react';
import './App.css';

import { posts } from './api/posts';
import { comments } from './api/comments';
import { users } from './api/users';
import { PostList } from './components/PostList';
import { ToTopBtn } from './components/ToTopBtn';

export const App = () => {
  const preparedPosts = posts.map(post => (
    {
      ...post,
      user: users.find(user => user.id === post.userId) || null,
      comments: comments.filter(comment => comment.postId === post.id)
    }
  ));

  return (
      <div className="App bg-brand-950 text-brand-950">
          <h1 className="shadow-sm shadow-brand-300 sticky top-0 bg-brand-600 text-white py-3 px-4 text-3xl text-center z-10">Static list of posts</h1>
          <div className="xl:max-w-4xl md:max-w-3xl sm:max-w-xl max-w-md mx-auto">
            <PostList posts={preparedPosts} />
          </div>
          <ToTopBtn/>
      </div>
  );
}
