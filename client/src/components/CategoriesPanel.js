import React from "react";
import { Link } from "react-router-dom";

const CategoriesPanel = () => {
  return (
    <div className="h-14 bg-green-100 w-full border-t border-green-500 grid md:grid-cols-1 text-gray-700 items-center justify-center px-4  sm:grid-cols-1">
      <ul className="flex justify-self-center">
        <li className="flex items-center space-x-3 hover:text-gray-500">
          <Link to="">Body Soap</Link>
          <div>/</div>
        </li>
        <li className="flex items-center space-x-3 pl-3 hover:text-gray-500">
          <Link to="">Face Soap</Link>
          <div>/</div>
        </li>
        <li className="flex items-center space-x-3 pl-3 hover:text-gray-500">
          <Link to="">Body Butter</Link>
          <div>/</div>
        </li>
        <li className="flex items-center space-x-3 pl-3 hover:text-gray-500">
          <Link to="">Lip Balm</Link>
          <div>/</div>
        </li>
        <li className="flex items-center space-x-3 pl-3 hover:text-gray-500">
          <Link to="">Baby Soap</Link>
        </li>
      </ul>
    </div>
  );
};

export default CategoriesPanel;
