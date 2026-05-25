import { FaPlus } from "react-icons/fa";
import Header from "../../../partials/Header";
import Layout from "../Layout";
import { students } from "../students/studentsData";
import TeachersTable from "./TeachersTable";
import { teachers } from "./teachersData";
import useDocumentTitle from "../../../functions/custom-hooks/useDocumentTitle";

const Teachers = () => {
  useDocumentTitle("Teachers | School Management System");

  return (
    <>
      <Layout menu="dashboard">
        {({ onToggle }) => (
          <>
            <Header
              title="Teachers Management"
              description="Manage all teacher records"
              onToggle={onToggle}
            />
            <div className="px-8 py-6">
              {/* Add Button */}
              <div className="flex justify-end items-center mb-6">
                <button className="cursor-pointer bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-5 py-2.5 rounded-xl shadow-md transition-all flex items-center gap-2">
                  <FaPlus /> Add Student
                </button>
              </div>
              {/* Table */}
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <TeachersTable teachers={teachers} />
              </div>
            </div>
          </>
        )}
      </Layout>
    </>
  );
};

export default Teachers;
