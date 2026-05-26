import React from "react";
import useDocumentTitle from "../../../functions/custom-hooks/useDocumentTitle";
import Layout from "../Layout";
import Header from "../../../partials/Header";
import CardClasses from "./CardClasses";

const Classes = () => {
  useDocumentTitle("Classes | School Management System");

  return (
    <>
      <Layout menu="classes">
        {({ ontoggle }) => (
          <>
            <Header
              title="Classes Organization"
              description="Manage school classes and sections"
              onToggle={ontoggle}
            />
            <div className="px-8 py-6">
              <div className="bg-white p-2 text-center shadow-sm">
                <small>
                  Note: The list for all classes will be available soon.{" "}
                </small>
              </div>
              {/* Class Cards */}
              <div className="px-8 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <CardClasses
                  gradeSection={"Grade 7 - Section A"}
                  teacher={"Prof. Sarah Johnson"}
                  totalStudents={32}
                />
                <CardClasses
                  gradeSection={"Grade 7 - Section A"}
                  teacher={"Prof. Sarah Johnson"}
                  totalStudents={32}
                />
                <CardClasses
                  gradeSection={"Grade 7 - Section A"}
                  teacher={"Prof. Sarah Johnson"}
                  totalStudents={32}
                />
              </div>
            </div>
          </>
        )}
      </Layout>
    </>
  );
};

export default Classes;
