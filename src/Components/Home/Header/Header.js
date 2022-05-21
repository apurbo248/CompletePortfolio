import React from "react";
import { Link } from "react-router-dom";

import { Popover, Transition } from "@headlessui/react";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment } from "react";
const Header = () => {
  return (
    <section style={{}}>
    
      <Popover className="relative z-50 ">
        <div className="w-full   mx-auto px-8 sm:px-6  fixed bg-gray-100  top-0 left-0 right-0">
          <div className="container-fluid flex justify-between  items-center border-b-2 border-gray-100 py- md:justify-start md:space-x-10 ">
            <div className="flex justify-center lg:w-0 lg:flex-1"></div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-">
              <Link
                to="/Portfolio/Projects"
                className="nav-link text-dark text-sm  hover:underline pt-4"
                href="#project"
              >
                Project
              </Link>

              <Link
                to="/Portfolio/Blogs"
                className="nav-link text-dark text-sm hover:underline pt-4"
                href="#blog"
              >
                Blog
              </Link>

              <Link
                to="/Portfolio/Home"
                className="nav-link text-dark text-sm pt-3"
              >
                <p className=" w-auto  text-2xl font-mono ">
                  {" "}
                  MyPortfolio
                </p>
              </Link>
              <Link
                to="/Portfolio/About"
                className="nav-link text-dark text-sm hover:underline pt-4"
              >
                About
              </Link>
              <Link
                to="/Portfolio/Contact"
                className="nav-link text-dark text-sm hover:underline pt-4"
              >
                Contact
              </Link>
            </Popover.Group>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0"></div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div className="flex justify-center lg:w-0 lg:flex-1">
                    <p className="h-8 w-auto sm:h-10 text-4xl font-mono bold">
                      {" "}
                      MyPortfolio
                    </p>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div className="grid grid-cols-1 gap-y-4 gap-x-8">
                  <Link
                    to="/Portfolio/Projects"
                    className="nav-link text-dark fs-5"
                    href="#project"
                  >
                    Project
                  </Link>

                  <Link
                    to="/Portfolio/Blogs"
                    className="nav-link text-dark fs-5"
                    href="#blog"
                  >
                    Blog
                  </Link>

                  <Link
                    to="/Portfolio/About"
                    className="nav-link text-dark fs-5 "
                  >
                    About
                  </Link>
                  <Link to="/Portfolio/Contact" className="nav-link  fs-5 ">
                    Contact
                  </Link>
                  <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0"></div>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </section>
  );
};

export default Header;
