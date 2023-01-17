import { checkError, client } from './client.js';

export async function getBlogs() {
  const resp = await client.from('blog').select('*');
  return checkError(resp);
}
