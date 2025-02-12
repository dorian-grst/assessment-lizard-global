import { ColumnDef } from '@tanstack/react-table';
import { DataTableColumnHeader } from '../data-table-column-header';
import React from 'react';
import { Author, Category, Post } from '@/lib/schema';

export const columns: ColumnDef<Post>[] = [
  {
    accessorFn: (row) => row.author.name,
    id: 'author',
    header: 'Author',
    cell: ({ row }) => {
      const author = row.original.author as Author;
      return <span className="flex max-w-[150px]">{author.name}</span>;
    },
    enableSorting: false,
  },
  {
    accessorKey: 'title',
    header: 'Title',
    cell: ({ row }) => {
      return (
        <span className="flex max-w-[300px]">{row.getValue('title')}</span>
      );
    },
    enableSorting: false,
  },
  {
    accessorKey: 'summary',
    header: 'Summary',
    cell: ({ row }) => {
      return (
        <div className="flex max-w-[500px] items-center">
          <span>{row.getValue('summary')}</span>
        </div>
      );
    },
    enableSorting: false,
  },
  {
    accessorKey: 'publication',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        className="md:block hidden"
        title="Publication"
      />
    ),
    cell: ({ row }) => {
      return (
        <span className="md:flex items-center hidden">
          {row.getValue('publication')}
        </span>
      );
    },
    filterFn: (row, id, value) => {
      const cellValue = row.getValue(id);
      return (cellValue as string).includes(value);
    },
    sortingFn: (rowA, rowB, columnId) => {
      const parseDate = (dateStr: string) => {
        const [day, month, year] = dateStr.split('/').map(Number);
        return new Date(year, month - 1, day);
      };
      const dateA = parseDate(rowA.getValue(columnId) as string);
      const dateB = parseDate(rowB.getValue(columnId) as string);
      return dateA > dateB ? 1 : -1;
    },
    enableSorting: true,
  },
  {
    accessorKey: 'categories',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        className="lg:block hidden"
        title="Categories"
      />
    ),
    cell: ({ row }) => {
      const categories = row.getValue('categories') as Category[];
      return (
        <span className="lg:flex max-w-[250px] items-center hidden">
          {categories.map((cat) => cat.name).join(', ')}
        </span>
      );
    },
    filterFn: (row, id, filterValues) => {
      if (!filterValues.length) return true;
      const rowCategories = row.getValue(id) as Category[];

      const rowCategoryNames = rowCategories.map((category) =>
        category.name.toLowerCase().replace(/\s+/g, '-'),
      );

      return filterValues.every((filterValue: string) =>
        rowCategoryNames.includes(filterValue),
      );
    },
    enableSorting: false,
  },
];
