import React from "react";
const links = ["Dashboard", "Ecommerce", "Super market", "Long vision"];
const Sidebar = () => {
  return (
    <div className="w-[300px] bg-white rounded shadow-2xl fixed top-5 left-5 bottom-5 transition-all >
      {links.map((item) => (
        <div className="p-4 cursor-pointer hover:bg-gray-50" key={item}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
