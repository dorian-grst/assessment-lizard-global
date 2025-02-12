import { useQuery } from '@tanstack/react-query';
import { Post } from '@/lib/schema';

const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch('/api/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data.posts;
};

const extractCategories = (posts: Post[]) => {
  const categorySet = new Set<string>();
  posts.forEach((post) => {
    post.categories.forEach((category) => {
      categorySet.add(category.name);
    });
  });
  return Array.from(categorySet).map((category) => ({
    value: category.toLowerCase().replace(/ /g, '-'),
    label: category,
  }));
};

export function usePosts() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    select: (posts) => ({
      posts: posts.map((post) => ({
        ...post,
        publication: formatDate(post.publishDate),
      })),
      categories: extractCategories(posts),
    }),
  });
}

// Format date to dd/mm/yy
export function formatDate(publishDate: string): string {
  const date = new Date(publishDate);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear()).slice(2);
  return `${day}/${month}/${year}`;
}
