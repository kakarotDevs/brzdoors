import React from "react";
import { NavLink, Outlet } from "react-router";

function Layout() {
  return (
    <div className="flex min-h-screen">
      {/* Left Navigation */}
      <nav className="w-64 p-8 min-h-screen sticky top-0 flex flex-col gap-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-4xl font-light text-[var(--color-orange-text)]" // Active state for web
              : "text-4xl font-light text-[var(--color-orange-inactive-text)] hover:text-[var(--color-orange-text)]" // Inactive state for web
          }
        >
          Briz Doors
        </NavLink>
        <div className="flex flex-col gap-4 mt-4">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-4xl font-light text-[var(--color-active-text)]" // Active state for web
                : "text-4xl font-light text-[var(--color-inactive-text)] hover:text-black" // Inactive state for web
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-4xl font-light text-[var(--color-active-text)]" // Active state for web
                : "text-4xl font-light text-[var(--color-inactive-text)] hover:text-black" // Inactive state for web
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/order"
            className={({ isActive }) =>
              isActive
                ? "text-4xl font-light text-[var(--color-active-text)]" // Active state for web
                : "text-4xl font-light text-[var(--color-inactive-text)] hover:text-black" // Inactive state for web
            }
          >
            Order
          </NavLink>
        </div>
      </nav>

      {/* Right Content Area */}
      <main className="flex-1 p-10">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;