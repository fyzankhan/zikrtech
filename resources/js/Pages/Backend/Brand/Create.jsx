import React, { useState } from "react";
import { router as Inertia, useForm } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";

function CreateBrand() {
  const { data, setData, post, errors } = useForm({
    name: "",
    slug: "",
    logo: null,
    is_featured: false,
    status: false,
  });

  function handleSubmit(e) {
    e.preventDefault();
    post("/admin/brands", {
      data,
      onSuccess: () => {
        Inertia.get("/admin/brands");
      },
    });
  }

  return (
    <AdminLayout>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">
          Create Brand
        </h1>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={data.name}
              onChange={(e) => setData("name", e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
            />
            {errors.name && (
              <div className="text-red-500 text-sm mt-2">{errors.name}</div>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="slug"
              className="block text-sm font-medium text-gray-700"
            >
              Slug
            </label>
            <input
              type="text"
              name="slug"
              id="slug"
              value={data.slug}
              onChange={(e) => setData("slug", e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
            />
            {errors.slug && (
              <div className="text-red-500 text-sm mt-2">{errors.slug}</div>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="logo"
              className="block text-sm font-medium text-gray-700"
            >
              Logo
            </label>
            <input
              type="file"
              name="logo"
              id="logo"
              onChange={(e) => setData("logo", e.target.files[0])}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
            />
            {errors.logo && (
              <div className="text-red-500 text-sm mt-2">{errors.logo}</div>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="is_featured"
              className="block text-sm font-medium text-gray-700"
            >
              Is Featured?
            </label>
            <select
              name="is_featured"
              id="is_featured"
              value={data.is_featured}
              onChange={(e) =>
                setData("is_featured", e.target.value === "true")
              }
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
            >
              <option value="true">Active</option>
              <option value="false">Inactive</option>
            </select>
            {errors.is_featured && (
              <div className="text-red-500 text-sm mt-2">
                {errors.is_featured}
              </div>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-700"
            >
              Status
            </label>
            <select
              name="status"
              id="status"
              value={data.status}
              onChange={(e) => setData("status", e.target.value === "true")}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
            >
              <option value="true">Active</option>
              <option value="false">Inactive</option>
            </select>
            {errors.status && (
              <div className="text-red-500 text-sm mt-2">{errors.status}</div>
            )}
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Create Brand
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}

export default CreateBrand;
