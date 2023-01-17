import React from 'react';
import { getBlogs } from '../../services/blog.js';
import BlogCard from '../BlogCard/BlogCard.js';

export default function Main() {
  const blogs = getBlogs();

  return (
    <main>
      {blogs.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
    </main>
  );
}
