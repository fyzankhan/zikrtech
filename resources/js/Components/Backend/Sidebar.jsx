import { Link } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import NavLink from "@/Components/NavLink";

export default function Sidebar({ showSidebar, setShowSidebar }) {
  return (
    <div
      className={`${
        showSidebar ? "block" : "hidden"
      } lg:block lg:w-64 bg-white shadow-lg lg:relative absolute z-20`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <Link href="/">
            <ApplicationLogo className="block h-9 w-auto text-gray-800 dark:text-gray-200" />
          </Link>
          <button
            className="lg:hidden text-gray-600 dark:text-gray-400 focus:outline-none"
            onClick={() => setShowSidebar(false)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="px-4 py-6 flex flex-col space-y-4">
          <NavLink
            href={route("dashboard")}
            active={route().current("dashboard")}
            className="flex items-center px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
          >
            Dashboard
          </NavLink>
          <NavLink
            href={route("user.index")}
            active={route().current("admin.user.index")}
            className="flex items-center px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
          >
            Users
          </NavLink>
          <NavLink
            href={route("admin.blog-categories.index")}
            active={route().current("admin.blog-categories.index")}
            className="flex items-center px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
          >
            Blog categories
          </NavLink>
          <NavLink
            href={route("admin.categories.index")}
            active={route().current("admin.categories.index")}
            className="flex items-center px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
          >
            Categories
          </NavLink>
          <NavLink
            href={route("admin.brands.index")}
            active={route().current("admin.brands.index")}
            className="flex items-center px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
          >
            Brands
          </NavLink>
          <NavLink
            href={route("admin.sliders.index")}
            active={route().current("admin.sliders.index")}
            className="flex items-center px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
          >
            Banners
          </NavLink>
          {/* Add more navigation links as needed */}
        </nav>
      </div>
    </div>
  );
}
