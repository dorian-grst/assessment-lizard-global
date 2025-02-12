import React from 'react';
import { DataTable } from '../components/data-table';
import { columns } from '@/components/shadcn/columns';
import { usePosts } from '../hooks/use-posts';

function Home() {
  const { data, isLoading } = usePosts();

  return (
    <DataTable
      columns={columns}
      data={data?.posts || []}
      isLoading={isLoading}
    />
  );
}

export default Home;
