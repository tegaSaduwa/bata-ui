import React, { ReactNode } from "react";

type ISidebarLinkProps = {
  name: ReactNode;
  children?: ReactNode;
  url: ReactNode;
};

const SidebarLink = (props: ISidebarLinkProps) => {
  return (
    <div>
      {" "}
      <li>
        <a
          className="flex items-center pl-2 pr-1 py-2 text-gray-900 bg-gray-100 rounded-md font-normal text-sm hover:bg-gray-200 active:indigo-500"
          href={`${props.url}`}
        >
          {props.children}

          <span className="mx-1 font-normal">{props.name}</span>
        </a>
      </li>
    </div>
  );
};

export default SidebarLink;
