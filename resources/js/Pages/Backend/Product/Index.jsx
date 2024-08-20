import React, { useMemo } from "react";
import { router as Inertia, usePage } from "@inertiajs/react";
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
} from "react-table";
import AdminLayout from "@/Layouts/AdminLayout";
import FlashMessage from "@/components/FlashMessage";
import EditIcon from "@/Components/Icon/EditIcon";

const Products = ({ products }) => {
  const {
    data: productData,
    current_page,
    last_page,
    next_page_url,
    prev_page_url,
  } = products;
  const { flash } = usePage().props;

  const data = useMemo(() => productData, [productData]);

  const toggleStatus = async (id, newStatus) => {
    try {
      const formData = new FormData();
      formData.append("id", id);
      formData.append("status", newStatus);

      // Send the PUT request using Axios
      const response = await axios.post(
        `/admin/product/change-status`,
        formData,
        {
          headers: {
            "X-HTTP-Method-Override": "PUT",
            "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]')
              .content,
          },
        }
      );

      console.log("Status updated:", response.data);
    } catch (error) {
      console.error("Failed to toggle status", error);
    }
  };

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
        Cell: ({ value }) => {
          const maxLength = 30;
          const displayValue =
            value.length > maxLength
              ? `${value.substring(0, maxLength)}...`
              : value;

          return <span title={value}>{displayValue}</span>;
        },
      },
      {
        Header: "Slug",
        accessor: "slug",
        Cell: ({ value }) => {
          const maxLength = 20;
          return value.length > maxLength
            ? `${value.substring(0, maxLength)}...`
            : value;
        },
      },
      {
        Header: " ",
        accessor: "status",
        Cell: ({ value, row }) => {
          const handleToggle = () => {
            const newStatus = !value;
            toggleStatus(row.original.id, newStatus);
          };

          return (
            <label className="switch-btn">
              <input type="checkbox" checked={value} onChange={handleToggle} />
              <span className="slider-btn round-slider-btn"></span>
            </label>
          );
        },
      },
      {
        Header: " ",
        Cell: ({ row }) => (
          <button
            onClick={() =>
              Inertia.get(`/admin/products/${row.original.id}/edit`)
            }
            className="btn btn-sm btn-primary"
          >
            <EditIcon />
          </button>
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
  } = useTable(
    { columns, data, manualPagination: true, pageCount: last_page },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const handleSearch = (e) => {
    const searchQuery = e.target.value || "";
    Inertia.get(
      "/admin/products",
      { search: searchQuery },
      { preserveState: true }
    );
  };

  const handlePageChange = (url) => {
    if (url) {
      Inertia.get(url, {}, { preserveState: true });
    }
  };

  return (
    <AdminLayout>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">Products</h1>
        <FlashMessage message={flash.success} type="success" />
        <FlashMessage message={flash.error} type="error" />

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
            onChange={handleSearch}
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
};

export default Products;
