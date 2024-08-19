import React, { useState } from "react";
import { useForm, usePage } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";

export default function EditBrand({ brand }) {
  // const { brand } = usePage().props;
  // const { data, setData, post, processing, errors } = useForm({
  //   name: brand.name || "",
  //   is_featured: brand.is_featured || "",
  //   status: brand.status || "",
  //   logo: null,
  // });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   post(route("admin.brands.update", brand.id), {
  //     preserveScroll: true,
  //     method: "put",
  //     data: {
  //       ...data,
  //     },
  //   });
  // };

  const { data, setData, post, processing, errors } = useForm({
    name: brand.name || "",
    logo: null,
    is_featured: brand.is_featured || "",
    status: brand.status || "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("logo", data.logo);
    formData.append("name", data.name);
    formData.append("is_featured", data.is_featured);
    formData.append("status", data.status);

    try {
      const response = await fetch(route("admin.brands.update", brand.id), {
        method: "POST",
        headers: {
          "X-HTTP-Method-Override": "PUT",
          "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]')
            .content,
        },
        body: formData,
      });

      if (response.ok) {
        //console.log("Form submitted successfully");
        alert("Form submitted successfully");
      } else {
        console.error("Error submitting form");
      }
    } catch (error) {
      console.error("Network error", error);
    }
  };
  return (
    <>
      <AdminLayout>
        <div className="py-6">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white shadow-md rounded-lg mt-6">
              <div className="p-6 border-b border-gray-200">
                <h4 className="text-lg font-semibold">Update Brand</h4>
              </div>
              <div className="p-6">
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Preview
                    </label>
                    <div className="mt-2">
                      <img className="w-48" src={"/" + brand.logo} alt="" />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Logo
                    </label>
                    <input
                      type="file"
                      className="mt-1 block w-full text-sm text-gray-900 border-gray-300 rounded-md"
                      name="logo"
                      onChange={(e) => setData("logo", e.target.files[0])}
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full text-sm text-gray-900 border-gray-300 rounded-md"
                      name="name"
                      value={data.name}
                      onChange={(e) => setData("name", e.target.value)}
                    />
                    {errors.name && (
                      <div className="text-red-600 text-sm mt-1">
                        {errors.name}
                      </div>
                    )}
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="inputState"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Is Featured
                    </label>
                    <select
                      id="inputState"
                      className="mt-1 block w-full text-sm text-gray-900 border-gray-300 rounded-md"
                      name="is_featured"
                      value={data.is_featured}
                      onChange={(e) => setData("is_featured", e.target.value)}
                    >
                      <option value="">Select</option>
                      <option value="1">Yes</option>
                      <option value="0">No</option>
                    </select>
                    {errors.is_featured && (
                      <div className="text-red-600 text-sm mt-1">
                        {errors.is_featured}
                      </div>
                    )}
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="inputState"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Status
                    </label>
                    <select
                      id="inputState"
                      className="mt-1 block w-full text-sm text-gray-900 border-gray-300 rounded-md"
                      name="status"
                      value={data.status}
                      onChange={(e) => setData("status", e.target.value)}
                    >
                      <option value="1">Active</option>
                      <option value="0">Inactive</option>
                    </select>
                    {errors.status && (
                      <div className="text-red-600 text-sm mt-1">
                        {errors.status}
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 disabled:opacity-50"
                    disabled={processing}
                  >
                    Update
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
}
