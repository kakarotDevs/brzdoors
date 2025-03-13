import React from "react";
import { NavLink, Outlet } from "react-router";

function Layout() {
  return (
    <div className="flex flex-col md:flex-row">
      <nav className="flex w-full flex-col justify-start gap-8 p-8 md:w-72 md:justify-start">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-4xl font-light whitespace-nowrap text-[var(--color-orange-active-text)] sm:text-5xl"
              : "text-4xl font-light whitespace-nowrap text-[var(--color-orange-active-text)] hover:text-[var(--color-orange-inactive-text)] sm:text-5xl"
          }
        >
          Briz Doors
        </NavLink>
        <div className="flex flex-row gap-4 sm:gap-8 md:mt-8 md:flex-col">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-2xl font-light text-[var(--color-active-text)] sm:text-3xl"
                : "text-2xl font-light text-[var(--color-inactive-text)] hover:text-black sm:text-3xl"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-2xl font-light text-[var(--color-active-text)] sm:text-3xl"
                : "text-2xl font-light text-[var(--color-inactive-text)] hover:text-black sm:text-3xl"
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/order"
            className={({ isActive }) =>
              isActive
                ? "text-2xl font-light text-[var(--color-active-text)] sm:text-3xl"
                : "text-2xl font-light text-[var(--color-inactive-text)] hover:text-black sm:text-3xl"
            }
          >
            Order
          </NavLink>
        </div>
      </nav>
      <main className="flex-1 bg-transparent">
        <Outlet /> {/* The preloaded URL can be accessed directly here */}
      </main>
    </div>
  );
}

export default Layout;
