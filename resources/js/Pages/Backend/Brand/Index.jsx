import React from "react";
import { router as Inertia } from "@inertiajs/react";
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
} from "react-table";
import AdminLayout from "@/Layouts/AdminLayout";
import { usePage } from "@inertiajs/react";
import FlashMessage from "@/components/FlashMessage";
import EditIcon from "@/Components/Icon/EditIcon";

function Brands({ brands }) {
  const {
    data: categoryData,
    current_page,
    last_page,
    next_page_url,
    prev_page_url,
  } = brands;
  const data = React.useMemo(() => categoryData, [categoryData]);
  const { flash } = usePage().props;

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Slug",
        accessor: "slug",
      },
      {
        Header: " ",
        accessor: "status",
        Cell: ({ value }) => (
          <span
            className={`text-xs font-semibold inline-block py-1 px-2 rounded-full ${
              value ? "text-green-600 bg-green-200" : "text-red-600 bg-red-200"
            }`}
          >
            {value ? "Active" : "Inactive"}
          </span>
        ),
      },
      {
        Header: " ",
        Cell: ({ row }) => (
          <div>
            <button
              onClick={() =>
                Inertia.get(`/admin/brands/${row.original.id}/edit`)
              }
              className="btn btn-sm btn-primary"
            >
              <EditIcon></EditIcon>
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    state,
    setGlobalFilter,
  } = useTable(
    { columns, data, manualPagination: true, pageCount: last_page },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { pageIndex } = state;

  function handleDelete(id) {
    if (confirm("Are you sure you want to delete this brand?")) {
      Inertia.delete(`/admin/brands/${id}`);
    }
  }

  function handlePageChange(url) {
    if (url) {
      Inertia.get(url, {}, { preserveState: true });
    }
  }

  return (
    <AdminLayout>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">Brands</h1>
        <FlashMessage message={flash.success} type="success" />
        <FlashMessage message={flash.error} type="error" />

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
            onChange={(e) => setGlobalFilter(e.target.value || undefined)}
          />
        </div>

        <div className="overflow-x-auto">
          <table {...getTableProps()} className="min-w-full bg-white">
            <thead className="bg-gray-100">
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()} className="border-b">
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider"
                    >
                      {column.render("Header")}
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? " 🔽"
                            : " 🔼"
                          : ""}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody
              {...getTableBodyProps()}
              className="bg-white divide-y divide-gray-200"
            >
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} className="hover:bg-gray-50">
                    {row.cells.map((cell) => (
                      <td
                        {...cell.getCellProps()}
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"
                      >
                        {cell.render("Cell")}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <button
            onClick={() => handlePageChange(prev_page_url)}
            disabled={!prev_page_url}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <span className="text-sm text-gray-600">
            Page {current_page} of {last_page}
          </span>
          <button
            onClick={() => handlePageChange(next_page_url)}
            disabled={!next_page_url}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Brands;
