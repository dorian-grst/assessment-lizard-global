import * as React from 'react';
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './shadcn/table';

import { DataTablePagination } from './data-table-pagination';
import { DataTableToolbar } from './data-table-toolbar';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Skeleton } from './shadcn/skeleton';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface DataTableProps<TData extends { id: string | number }, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  isLoading: boolean;
}

export function DataTable<TData extends { id: string | number }, TValue>({
  columns,
  data,
  isLoading,
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = React.useState({});
  const navigate = useNavigate();
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});

  const [searchParams, setSearchParams] = useSearchParams();

  // Get initial state from URL params (if any)
  const initialCategories: string[] = searchParams.get('categories')
    ? searchParams.get('categories')!.split(',')
    : [];

  // Initialize column filters state
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
    initialCategories.length > 0
      ? [{ id: 'categories', value: initialCategories }]
      : [],
  );
  // Update URL params
  useEffect(() => {
    const params = new URLSearchParams();

    if (columnFilters.length > 0) {
      const categoryFilter = columnFilters.find((f) => f.id === 'categories');
      if (categoryFilter) {
        params.set('categories', (categoryFilter.value as string[]).join(','));
      }
    }

    setSearchParams(params);
  }, [columnFilters, setSearchParams]);

  // Initialize table
  const table = useReactTable({
    data,
    columns,
    state: {
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  // Animation
  const tableRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(true);

  // Fade in animation
  useEffect(() => {
    setIsAnimating(true);
    gsap.fromTo(
      tableRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        onComplete: () => setIsAnimating(false),
      },
    );
  }, []);

  // Skeleton loader
  const LoadingSkeleton = () => (
    <TableBody>
      {Array.from({ length: 10 }).map((_, index) => (
        <TableRow key={index} className="h-[100px]">
          {columns.map((_, cellIndex) => (
            <TableCell key={cellIndex}>
              <div className="flex flex-col gap-2">
                <Skeleton className="h-6 w-[95%]" />
                <Skeleton className="h-6 w-[85%]" />
              </div>
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );

  return (
    <div className="flex overflow-hidden flex-col gap-8 w-full p-1">
      <DataTableToolbar table={table} />
      <div
        ref={tableRef}
        className="border-border border-1 rounded-md overflow-auto custom-scrollbar"
      >
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          {isAnimating || isLoading ? (
            <LoadingSkeleton />
          ) : (
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    onClick={() =>
                      navigate(`/detail/${row.original.id}`, {
                        state: { user: row.original },
                      })
                    }
                    className="cursor-pointer h-[100px]"
                    data-state={row.getIsSelected() && 'selected'}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          )}
        </Table>
      </div>
      <DataTablePagination table={table} />
    </div>
  );
}
