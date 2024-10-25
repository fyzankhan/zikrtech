import React, { useState, forwardRef, useImperativeHandle } from "react";

const CheckoutAddress = forwardRef(({ onSubmit }, ref) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    address: "",
    city: "",
    zip: "",
    shipToDifferentAddress: false,
    shippingFirstName: "",
    shippingLastName: "",
    shippingCountry: "",
    shippingAddress: "",
    shippingCity: "",
    shippingZip: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  useImperativeHandle(ref, () => ({
    submitForm: handleSubmit,
  }));

  return (
    <div className="lg:w-1/2 w-full">
      <h1 className="sm:text-2xl text-xl text-qblack font-medium mb-5">
        Billing Details
      </h1>
      <div className="form-area">
        <form>
          {/* Billing Address Form */}
          <div className="sm:flex sm:space-x-5 items-center mb-6">
            <div className="sm:w-1/2 mb-5 sm:mb-0">
              <div className="input-com w-full h-full">
                <label className="input-label capitalize block mb-2 text-qgray text-[13px] font-normal">
                  First Name*
                </label>
                <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative">
                  <input
                    name="firstName"
                    placeholder=""
                    className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="input-com w-full h-full">
                <label className="input-label capitalize block mb-2 text-qgray text-[13px] font-normal">
                  Last Name*
                </label>
                <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative">
                  <input
                    name="lastName"
                    placeholder=""
                    className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex space-x-5 items-center mb-6">
            <div className="w-1/2">
              <div className="input-com w-full h-full">
                <label className="input-label capitalize block mb-2 text-qgray text-[13px] font-normal">
                  Email Address*
                </label>
                <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative">
                  <input
                    name="email"
                    placeholder=""
                    className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="input-com w-full h-full">
                <label className="input-label capitalize block mb-2 text-qgray text-[13px] font-normal">
                  Phone Number*
                </label>
                <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative">
                  <input
                    name="phone"
                    placeholder=""
                    className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className="input-label capitalize block mb-2 text-qgray text-[13px] font-normal">
              Country*
            </label>
            <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative">
              <input
                name="country"
                placeholder=""
                className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]"
                value={formData.country}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mb-6">
            <div className="w-full">
              <div className="input-com w-full h-full">
                <label className="input-label capitalize block mb-2 text-qgray text-[13px] font-normal">
                  Address*
                </label>
                <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative">
                  <input
                    name="address"
                    placeholder=""
                    className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex space-x-5 items-center mb-6">
            <div className="w-1/2">
              <label className="input-label capitalize block mb-2 text-qgray text-[13px] font-normal">
                Town / City*
              </label>
              <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative">
                <input
                  name="city"
                  placeholder=""
                  className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex-1">
              <label className="input-label capitalize block mb-2 text-qgray text-[13px] font-normal">
                Postcode / ZIP*
              </label>
              <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative">
                <input
                  name="zip"
                  placeholder=""
                  className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]"
                  value={formData.zip}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Ship to Different Address Checkbox */}
          <div className="mb-10">
            <h1 className="text-2xl text-qblack font-medium mb-3">
              Shipping Details
            </h1>
            <div className="flex space-x-2 items-center">
              <input
                type="checkbox"
                name="shipToDifferentAddress"
                id="address"
                checked={formData.shipToDifferentAddress}
                onChange={handleChange}
              />
              <label
                htmlFor="address"
                className="text-qblack text-[15px] select-none"
              >
                Ship to a different address
              </label>
            </div>
          </div>

          {/* Shipping Address Form (Visible if checkbox is checked) */}
          {formData.shipToDifferentAddress && (
            <div>
              <h2 className="text-lg font-medium mb-5">Shipping Address</h2>
              <div className="sm:flex sm:space-x-5 items-center mb-6">
                <div className="sm:w-1/2 mb-5 sm:mb-0">
                  <label className="input-label capitalize block mb-2 text-qgray text-[13px] font-normal">
                    First Name*
                  </label>
                  <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative">
                    <input
                      name="shippingFirstName"
                      placeholder=""
                      className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]"
                      value={formData.shippingFirstName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <label className="input-label capitalize block mb-2 text-qgray text-[13px] font-normal">
                    Last Name*
                  </label>
                  <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative">
                    <input
                      name="shippingLastName"
                      placeholder=""
                      className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]"
                      value={formData.shippingLastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="input-label capitalize block mb-2 text-qgray text-[13px] font-normal">
                  Country*
                </label>
                <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative">
                  <input
                    name="shippingCountry"
                    placeholder=""
                    className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]"
                    value={formData.shippingCountry}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="input-label capitalize block mb-2 text-qgray text-[13px] font-normal">
                  Address*
                </label>
                <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative">
                  <input
                    name="shippingAddress"
                    placeholder=""
                    className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]"
                    value={formData.shippingAddress}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex space-x-5 items-center mb-6">
                <div className="w-1/2">
                  <label className="input-label capitalize block mb-2 text-qgray text-[13px] font-normal">
                    Town / City*
                  </label>
                  <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative">
                    <input
                      name="shippingCity"
                      placeholder=""
                      className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]"
                      value={formData.shippingCity}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <label className="input-label capitalize block mb-2 text-qgray text-[13px] font-normal">
                    Postcode / ZIP*
                  </label>
                  <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative">
                    <input
                      name="shippingZip"
                      placeholder=""
                      className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]"
                      value={formData.shippingZip}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
});

export default CheckoutAddress;
