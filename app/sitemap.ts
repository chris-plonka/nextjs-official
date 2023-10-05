

export default async function sitemap() {
  const blogs = allBlogs.map((post) => ({
    url: `http://localhost:3001/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  const routes = ['', '/blog', '/guestbook', '/uses'].map(
    (route) => ({
      url: `http://localhost:3001/${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  );

  return [...routes, ...blogs];
}
