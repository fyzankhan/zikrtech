import React, { useState } from "react";
import { router as Inertia, useForm } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import AsyncSelect from "react-select/async";
import axios from "axios";

function CreateProduct() {
  const { data, setData, post, errors } = useForm({
    name: "",
    slug: "",
    thumb_image: null,
    category_id: null,
    sub_category_id: null,
    brand_id: null,
    qty: 0,
    short_description: "",
    long_description: "",
    sku: "",
    price: 0.0,
    offer_price: null,
    offer_start_date: null,
    offer_end_date: null,
    status: true,
    is_approved: 1,
    seo_title: "",
    seo_description: "",
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
    post("/admin/products", {
      data,
      onSuccess: () => {
        Inertia.get("/admin/products");
      },
    });
  }

  return (
    <AdminLayout>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">
          Create Product
        </h1>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          {/* Other input fields */}
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

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Sub Category
            </label>
            <AsyncSelect
              cacheOptions
              loadOptions={(inputValue) =>
                loadOptions(inputValue, "/api/subcategories/search")
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

          {/* Other input fields */}
          <div className="mt-6">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Create Product
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}

export default CreateProduct;
