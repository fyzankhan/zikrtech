import React from "react";
import { router as Inertia, useForm } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import AsyncSelect from "react-select/async";
import axios from "axios";

function EditProduct({ product }) {
  const { data, setData, put, errors } = useForm({
    name: product.name || "",
    part_no: product.part_no || "",
    thumb_image: null,
    category_id: product.category_id || null,
    sub_category_id: product.sub_category_id || null,
    brand_id: product.brand_id || null,
    qty: product.qty || 0,
    short_description: product.short_description || "",
    long_description: product.long_description || "",
    sku: product.sku || "",
    price: product.price || 0.0,
    offer_price: product.offer_price || null,
    offer_start_date: product.offer_start_date || null,
    offer_end_date: product.offer_end_date || null,
    status: product.status || true,
    is_approved: product.is_approved || 1,
    seo_title: product.seo_title || "",
    seo_description: product.seo_description || "",
  });

  const loadOptions = (inputValue, endpoint) => {
    return axios.get(endpoint, { params: { query: inputValue } }).then((res) =>
      res.data.data.map((option) => ({
        label: option.name,
        value: option.id,
      }))
    );
  };

  function handleSubmit(e) {
    e.preventDefault();
    put(`/admin/products/${product.id}`, {
      data,
      onSuccess: () => {
        Inertia.get("/admin/products");
      },
    });
  }

  function handleFileChange(e) {
    setData("thumb_image", e.target.files[0]);
  }

  return (
    <AdminLayout>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">
          Edit Product
        </h1>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              value={data.name}
              onChange={(e) => setData("name", e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
            {errors.name && (
              <div className="text-red-500 text-sm mt-2">{errors.name}</div>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Mfr. Part#
            </label>
            <input
              type="text"
              value={data.part_no}
              onChange={(e) => setData("part_no", e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
            {errors.part_no && (
              <div className="text-red-500 text-sm mt-2">{errors.part_no}</div>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Product Image
            </label>
            <input type="file" onChange={handleFileChange} className="mt-1" />
            {errors.thumb_image && (
              <div className="text-red-500 text-sm mt-2">
                {errors.thumb_image}
              </div>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Quantity
            </label>
            <input
              type="number"
              value={data.qty}
              onChange={(e) => setData("qty", e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
            {errors.qty && (
              <div className="text-red-500 text-sm mt-2">{errors.qty}</div>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="number"
              step="0.01"
              value={data.price}
              onChange={(e) => setData("price", e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
            {errors.price && (
              <div className="text-red-500 text-sm mt-2">{errors.price}</div>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Short Description
            </label>
            <textarea
              value={data.short_description}
              onChange={(e) => setData("short_description", e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
            {errors.short_description && (
              <div className="text-red-500 text-sm mt-2">
                {errors.short_description}
              </div>
            )}
          </div>

          {/* Category Select */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <AsyncSelect
              cacheOptions
              loadOptions={(inputValue) =>
                loadOptions(inputValue, "/admin/categories/search")
              }
              onChange={(selectedOption) =>
                setData("category_id", selectedOption.value)
              }
            />
            {errors.category_id && (
              <div className="text-red-500 text-sm mt-2">
                {errors.category_id}
              </div>
            )}
          </div>

          {/* SubCategory Select */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Sub Category
            </label>
            <AsyncSelect
              cacheOptions
              loadOptions={(inputValue) =>
                loadOptions(inputValue, "/admin/subcategory/search")
              }
              onChange={(selectedOption) =>
                setData("sub_category_id", selectedOption.value)
              }
            />
            {errors.sub_category_id && (
              <div className="text-red-500 text-sm mt-2">
                {errors.sub_category_id}
              </div>
            )}
          </div>

          {/* Brand Select */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Brand
            </label>
            <AsyncSelect
              cacheOptions
              loadOptions={(inputValue) =>
                loadOptions(inputValue, "/admin/brands/search")
              }
              onChange={(selectedOption) =>
                setData("brand_id", selectedOption.value)
              }
            />
            {errors.brand_id && (
              <div className="text-red-500 text-sm mt-2">{errors.brand_id}</div>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              SEO Title
            </label>
            <input
              type="text"
              value={data.seo_title}
              onChange={(e) => setData("seo_title", e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
            {errors.seo_title && (
              <div className="text-red-500 text-sm mt-2">
                {errors.seo_title}
              </div>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              SEO Description
            </label>
            <textarea
              value={data.seo_description}
              onChange={(e) => setData("seo_description", e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
            {errors.seo_description && (
              <div className="text-red-500 text-sm mt-2">
                {errors.seo_description}
              </div>
            )}
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Update Product
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}

export default EditProduct;
