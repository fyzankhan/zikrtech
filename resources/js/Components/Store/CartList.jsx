const CartList = ({ cartItems }) => {
  return (
    <div className="w-full mb-[30px]">
      <div className="relative w-full overflow-x-auto border border-[#EDEDED]">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead>
            <tr className="text-[13px] font-medium text-black bg-[#F6F6F6] whitespace-nowrap px-2 border-b default-border-bottom uppercase">
              <th className="py-4 pl-10 block whitespace-nowrap min-w-[300px]">
                Product
              </th>
              <th className="py-4 whitespace-nowrap text-center">Price</th>
              <th className="py-4 whitespace-nowrap text-center">Quantity</th>
              <th className="py-4 whitespace-nowrap text-center">Total</th>
              <th className="py-4 whitespace-nowrap text-right w-[114px]" />
            </tr>
          </thead>
          <tbody>
            {Object.keys(cartItems).map((rowId) => {
              const item = cartItems[rowId];
              return (
                <tr key={rowId} className="bg-white border-b hover:bg-gray-50">
                  <td className="pl-10 py-4 w-[380px]">
                    <div className="flex space-x-6 items-center">
                      <div className="w-[80px] h-[80px] overflow-hidden flex justify-center items-center border border-[#EDEDED]">
                        <img
                          src={item.image} // Assuming `image` is a property in each item
                          alt={item.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <p className="font-medium text-[15px] text-qblack">
                          {item.name}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="text-center py-4 px-2">
                    <div className="flex space-x-1 items-center justify-center">
                      <span className="text-[15px] font-normal">
                        ${item.price}
                      </span>
                    </div>
                  </td>
                  <td className="py-4">
                    <div className="flex justify-center items-center">
                      <div className="w-[120px] h-[40px] px-[26px] flex items-center border border-qgray-border">
                        <div className="flex justify-between items-center w-full">
                          <button
                            type="button"
                            className="text-base text-qgray"
                          >
                            -
                          </button>
                          <span className="text-qblack">{item.qty}</span>
                          <button
                            type="button"
                            className="text-base text-qgray"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-right py-4">
                    <div className="flex space-x-1 items-center justify-center">
                      <span className="text-[15px] font-normal">
                        ${item.price * item.qty}
                      </span>
                    </div>
                  </td>
                  <td className="text-right py-4">
                    <div className="flex space-x-1 items-center justify-center">
                      <button type="button">
                        <svg
                          width={10}
                          height={10}
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.7 0.3C9.3 -0.1 8.7 -0.1 8.3 0.3L5 3.6L1.7 0.3C1.3 -0.1 0.7 -0.1 0.3 0.3C-0.1 0.7 -0.1 1.3 0.3 1.7L3.6 5L0.3 8.3C-0.1 8.7 -0.1 9.3 0.3 9.7C0.7 10.1 1.3 10.1 1.7 9.7L5 6.4L8.3 9.7C8.7 10.1 9.3 10.1 9.7 9.7C10.1 9.3 10.1 8.7 9.7 8.3L6.4 5L9.7 1.7C10.1 1.3 10.1 0.7 9.7 0.3Z"
                            fill="#AAAAAA"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartList;
