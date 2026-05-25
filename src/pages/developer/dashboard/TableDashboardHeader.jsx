import React from "react";
import { FaArrowRight, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

const TableDashboardHeader = () => {
  return (
    <>
      <div className="p-4 md:px-6 md:py-5 border-b border-gray-100 flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            <FaUsers className="text-blue-500 mr-2 inline-block" />
            Recent Students
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Latest 5 students added to the system
          </p>
        </div>
        <Link
          className="text-blue-600 hover:text-blue-700 text-sm font-medium transition flex items-center gap-2"
          to="/developer/students"
        >
          View All <FaArrowRight />
        </Link>
      </div>
    </>
  );
};

export default TableDashboardHeader;
