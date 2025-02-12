import { Table } from '@tanstack/react-table';
import { X } from 'lucide-react';

import { Button } from './shadcn/button';
import { Input } from './shadcn/input';
import { DataTableViewOptions } from './data-table-view-options';

import React from 'react';
import { DataTableFacetedFilter } from './data-table-faceted-filter';
import useCategories from '../hooks/use-categories';

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

// This component is the toolbar for the data table that contains the search input that can filter the table data and the category filter.
export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;
  const categories = useCategories();

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        {/* The search input */}
        <Input
          placeholder="Search..."
          value={(table.getState().globalFilter as string) ?? ''}
          onChange={(event) => table.setGlobalFilter(event.target.value)}
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {/* The category filter */}
        {table.getColumn('categories') && (
          <DataTableFacetedFilter
            column={table.getColumn('categories')}
            title="Categories"
            options={categories}
          />
        )}
        {/* The reset category filter button when almost one category is selected */}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
