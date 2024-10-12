import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";

const EditSlider = ({ slider }) => {
  const { data, setData, post, processing, errors } = useForm({
    banner: null,
    type: slider.type || "",
    title: slider.title || "",
    starting_price: slider.starting_price || "",
    btn_url: slider.btn_url || "",
    serial: slider.serial || "",
    status: slider.status || 1,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("banner", data.banner);
    formData.append("type", data.type);
    formData.append("title", data.title);
    formData.append("starting_price", data.starting_price);
    formData.append("btn_url", data.btn_url);
    formData.append("serial", data.serial);
    formData.append("status", data.status);

    try {
      const response = await fetch(route("admin.sliders.update", slider.id), {
        method: "POST",
        headers: {
          "X-HTTP-Method-Override": "PUT",
          "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]')
            .content,
        },
        body: formData,
      });

      if (response.ok) {
        console.log("Form submitted successfully");
      } else {
        console.error("Error submitting form");
      }
    } catch (error) {
      console.error("Network error", error);
    }
  };

  return (
    <AdminLayout>
      <div className="p-6 bg-gray-100">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Slider</h1>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold mb-4">Edit Slider</h4>

          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="mb-4">
              <label className="block text-gray-700">Preview</label>
              <img
                className="mt-2 w-48"
                src={"/" + slider.banner}
                alt="Slider Banner"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Banner</label>
              <input
                type="file"
                className="mt-2 p-2 border border-gray-300 rounded w-full"
                name="banner"
                onChange={(e) => setData("banner", e.target.files[0])}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Type</label>
              <input
                type="text"
                className="mt-2 p-2 border border-gray-300 rounded w-full"
                name="type"
                value={data.type}
                onChange={(e) => setData("type", e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Title</label>
              <input
                type="text"
                className="mt-2 p-2 border border-gray-300 rounded w-full"
                name="title"
                value={data.title}
                onChange={(e) => setData("title", e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Starting Price</label>
              <input
                type="text"
                className="mt-2 p-2 border border-gray-300 rounded w-full"
                name="starting_price"
                value={data.starting_price}
                onChange={(e) => setData("starting_price", e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Button URL</label>
              <input
                type="text"
                className="mt-2 p-2 border border-gray-300 rounded w-full"
                name="btn_url"
                value={data.btn_url}
                onChange={(e) => setData("btn_url", e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Serial</label>
              <input
                type="text"
                className="mt-2 p-2 border border-gray-300 rounded w-full"
                name="serial"
                value={data.serial}
                onChange={(e) => setData("serial", e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Status</label>
              <select
                id="inputState"
                className="mt-2 p-2 border border-gray-300 rounded w-full"
                name="status"
                value={data.status}
                onChange={(e) => setData("status", e.target.value)}
              >
                <option value="1">Active</option>
                <option value="0">Inactive</option>
              </select>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              disabled={processing}
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
};

export default EditSlider;
