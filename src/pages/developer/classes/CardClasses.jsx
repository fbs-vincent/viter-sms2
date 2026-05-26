import React from "react";

const CardClasses = ({ gradeSection, teacher, totalStudents }) => {
  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="border-b px-5 py-4">
          <p className="text-black/80 font-bold">{gradeSection}</p>
        </div>
        <div className="p-5">
          <div>
            <ul className="flex justify-between mb-3">
              <li className="text-gray-600">
                <span className="mr-2">
                  <i className="fas fa-user-tie"></i>
                </span>
                Adviser:
              </li>
              <li className="font-medium">{teacher}</li>
            </ul>
            <ul className="flex justify-between mb-3">
              <li className="text-gray-600">
                <span className="mr-2">
                  <i className="fas fa-user"></i>
                </span>
                Students:
              </li>
              <li className="font-medium">{totalStudents}</li>
            </ul>
            <div className="flex gap-3">
              <button className="flex-1 border border-blue-500 text-black/80 py-2 rounded-xl text-sm cursor-pointer">
                View Class
              </button>

              <button className="flex-1 border border-gray-500 text-black/80 py-2 rounded-xl text-sm cursor-pointer">
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardClasses;
