import React from 'react';
import { getBlogs } from '../../services/blog.js';

export default function Main() {
  const blogs = getBlogs();

  return (
    <main>
      {blogs.map((blog) => (
        <Blog key={blog.id} {...blog} />
      ))}
    </main>
  );
}
