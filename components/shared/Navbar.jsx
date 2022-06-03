import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();
  return (
    <>
      <div className="navbar bg-slate-300 h-20">
        <div className="navbar-start">
          <div className="dropdown md:hidden">
            <label tabIndex="0" className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link href="/">
                <li>
                  <a>Home</a>
                </li>
              </Link>
              <Link href="/blogs">
                <li>
                  <a>Blogs</a>
                </li>
              </Link>
              <Link href="/about">
                <li>
                  <a>About</a>
                </li>
              </Link>
              <Link href="/">
                <li>
                  <a>Contact</a>
                </li>
              </Link>
            </ul>
          </div>
          <div className="text-3xl text-green-600 font-semibold">Tech Blogs</div>
        </div>
        <div className="navbar-start hidden lg:block md:block">
          <Link href="/">
            <a
              className={
                router.pathname == "/"
                  ? `text-green-600 btn btn-ghost btn-outline normal-case text-lg`
                  : "btn btn-ghost normal-case text-lg"
              }
            >
              Home
            </a>
          </Link>
          <Link href="/blogs">
            <a
              className={
                router.pathname == "/blogs"
                  ? `text-green-600 btn btn-ghost btn-outline normal-case text-lg`
                  : "btn btn-ghost normal-case text-lg"
              }
            >
              Blogs
            </a>
          </Link>
          <Link href="/about">
            <a
              className={
                router.pathname == "/about"
                  ? `text-green-600 btn btn-outline btn-ghost normal-case text-lg`
                  : "btn btn-ghost normal-case text-lg"
              }
            >
              About
            </a>
          </Link>
          <Link href="/contact">
            <a
              className={
                router.pathname == "/contact"
                  ? `text-green-600 btn btn-outline btn-ghost normal-case text-lg`
                  : "btn btn-ghost normal-case text-lg"
              }
            >
              Contact
            </a>
          </Link>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>
          <div className="dropdown dropdown-end" title="Click">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Image
                  src="https://api.lorem.space/image/face?hash=33791"
                  alt=""
                  height={48}
                  width={48}
                />
              </div>
            </label>
            <ul
              tabIndex="0"
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
