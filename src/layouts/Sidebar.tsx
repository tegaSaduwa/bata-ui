import React from "react";
import {
  DownloadIcon,
  DocumentTextIcon,
  ColorSwatchIcon,
  CogIcon,
} from "@heroicons/react/outline";
import SidebarLink from "@/ui-elements/SidebarLink";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-96 h-screen px-5 py-5 overflow-y-auto border-r bg-gray-50 overflow-scroll">
      <h2>
        <a
          href="/"
          className="text-xl whitespace-nowrap dark:text-white font-extrabold text-indigo-900 pl-3"
        >
          <span>bata-</span>
          <span className="text-pink-700">ui</span>
        </a>
      </h2>

      <div className="flex flex-col justify-between mt-5">
        <aside>
          <ul>
            <SidebarLink url="#" name="Install">
              <DownloadIcon className="h-6 w-6 ml-1 mr-1" aria-hidden="true" />
            </SidebarLink>

            <SidebarLink url="#" name="Typography">
              <DocumentTextIcon
                className="h-6 w-6 ml-1 mr-1"
                aria-hidden="true"
              />
            </SidebarLink>

            <SidebarLink url="#" name="Color">
              <ColorSwatchIcon
                className="h-6 w-6 ml-1 mr-1"
                aria-hidden="true"
              />
            </SidebarLink>

            <SidebarLink url="#" name="Config">
              <CogIcon className="h-6 w-6 ml-1 mr-1" aria-hidden="true" />
            </SidebarLink>
            <hr className="bg-gray-400 my-3 mx-2" />
            <small className="text-xl whitespace-nowrap dark:text-white text-sm font-medium text-indigo-900 pl-3 mb-5">
              Actions
            </small>
            <SidebarLink url="#" name="Button" />
            <SidebarLink url="#" name="Dropdown" />
            <SidebarLink url="#" name="Modal" />
            <hr className="bg-gray-400 my-3 mx-2" />
            <small className="text-xl whitespace-nowrap dark:text-white text-sm font-medium text-indigo-900 pl-3 mb-5">
              Data Display
            </small>
            <SidebarLink url="#" name="Alert" />
            <SidebarLink url="#" name="Avater" />
            <SidebarLink url="#" name="Card" />
            <SidebarLink url="#" name="Carousel" />
            <SidebarLink url="#" name="Collapse" />
            <SidebarLink url="#" name="Progress" />
            <SidebarLink url="#" name="Radial" />
            <SidebarLink url="#" name="Stat" />
            <SidebarLink url="#" name="Table" />
            <SidebarLink url="#" name="Tooltip" />

            <hr className="bg-gray-400 my-3 mx-2" />
            <small className="text-xl whitespace-nowrap dark:text-white text-sm font-medium text-indigo-900 pl-3 mb-5">
              Data Input
            </small>
            <SidebarLink url="#" name="Checkbox" />
            <SidebarLink url="#" name="Text Input" />
            <SidebarLink url="#" name="Radio" />
            <SidebarLink url="#" name="Range" />
            <SidebarLink url="#" name="Rating" />
            <SidebarLink url="#" name="Select" />
            <SidebarLink url="#" name="Textarea" />
            <SidebarLink url="#" name="Toggle" />

            <hr className="bg-gray-400 my-3 mx-2" />
            <small className="text-xl whitespace-nowrap dark:text-white text-sm font-medium text-indigo-900 pl-3 mb-5">
              Layout
            </small>
            <SidebarLink url="#" name="Art board" />
            <SidebarLink url="#" name="Button Group" />
            <SidebarLink url="#" name="Divider" />
            <SidebarLink url="#" name="Drawer" />
            <SidebarLink url="#" name="Footer" />
            <SidebarLink url="#" name="Hero" />
            <SidebarLink url="#" name="Indicator" />
            <SidebarLink url="#" name="Input Group" />

            <hr className="bg-gray-400 my-3 mx-2" />
            <small className="text-xl whitespace-nowrap dark:text-white text-sm font-medium text-indigo-900 pl-3 mb-5">
              Navigation
            </small>
            <SidebarLink url="#" name="Bread Crumbs" />
            <SidebarLink url="#" name="Link" />
            <SidebarLink url="#" name="Menu" />
            <SidebarLink url="#" name="Navbar" />
            <SidebarLink url="#" name="Pagination" />
            <SidebarLink url="#" name="Steps" />
            <SidebarLink url="#" name="Tab" />

            <hr className="bg-gray-400 my-3 mx-2" />
            <small className="text-xl whitespace-nowrap dark:text-white text-sm font-medium text-indigo-900 pl-3 mb-5">
              Mockup
            </small>
            <SidebarLink url="#" name="Code" />
            <SidebarLink url="#" name="Window" />
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default Sidebar;
