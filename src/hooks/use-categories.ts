import { usePosts } from './use-posts';

// This hook is used to get the categories from the posts data.
const useCategories = () => {
  const { data } = usePosts();
  return data?.categories || [];
};

export default useCategories;
