import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchBrands = async () => {
  const response = await axios.get("/api/brands");
  return response.data.brands;
};

const Brands = () => {
  const {
    data: brands,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["brands"],
    queryFn: fetchBrands,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading brands</div>;
  }

  return (
    <>
      <div className="w-full brand-section-wrapper mb-[60px] aos-init">
        <div className="container-x mx-auto">
          <div className="grid lg:grid-cols-4 sm:grid-cols-4 grid-cols-2 gap-4 p-5">
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="item hover:shadow-lg hover:shadow-gray-300 transition-shadow duration-300 cursor-pointer"
              >
                <div className="w-full h-[70px]    flex justify-center items-center">
                  <img src={brand.logo} alt={brand.name} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Brands;
