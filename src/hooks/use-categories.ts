import { usePosts } from './use-posts';

const useCategories = () => {
  const { data } = usePosts();
  return data?.categories || [];
};

export default useCategories;
