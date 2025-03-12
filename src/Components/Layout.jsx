import React from "react";
import { NavLink, Outlet } from "react-router";

function Layout() {
  return (
    <div className="flex flex-col md:flex-row">
      <nav className="flex w-full flex-col gap-8 p-8 md:w-64">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-4xl font-light text-[var(--color-orange-active-text)]"
              : "text-4xl font-light text-[var(--color-orange-active-text)] hover:text-[var(--color-orange-inactive-text)]"
          }
        >
          Briz Doors
        </NavLink>
        <div className="mt-4 flex flex-col gap-4">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-4xl font-light text-[var(--color-active-text)]"
                : "text-4xl font-light text-[var(--color-inactive-text)] hover:text-black"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-4xl font-light text-[var(--color-active-text)]"
                : "text-4xl font-light text-[var(--color-inactive-text)] hover:text-black"
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/order"
            className={({ isActive }) =>
              isActive
                ? "text-4xl font-light text-[var(--color-active-text)]"
                : "text-4xl font-light text-[var(--color-inactive-text)] hover:text-black"
            }
          >
            Order
          </NavLink>
        </div>
      </nav>
      <main className="flex-1">
        <Outlet /> {/* The preloaded URL can be accessed directly here */}
      </main>
    </div>
  );
}

export default Layout;
