import React from "react";
import Layout from "../Layout";
import Navigation from "../../../partials/Navigation";
import Header from "../../../partials/Header";
import StatCard from "./StatCard";
import { FaSchool, FaUserGraduate } from "react-icons/fa";
import { FaChalkboardUser } from "react-icons/fa6";
import useDocumentTitle from "../../../functions/custom-hooks/useDocumentTitle";
import { stats } from "./statsData";
import TableDashboardHeader from "./TableDashboardHeader";
import StudentsTable from "../students/StudentsTable";
import { students } from "../students/studentsData";

const Dashboard = () => {
  useDocumentTitle("Dashboard | School Management System");

  return (
    <>
      <Layout menu="dashboard">
        {({ onToggle }) => (
          <>
            <Header
              title="Dashboard"
              description="Welcome back! Here's your school overview"
              onToggle={onToggle}
            />
            {/* Cards */}
            <div className="px-8 py-6 grid grid-cols-1 xl:grid-cols-3 gap-6">
              {stats.map((stat) => (
                <StatCard key={stat.title} {...stat} />
              ))}
            </div>

            <div className="px-8 py-6">
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <TableDashboardHeader />
                <StudentsTable students={students} />
              </div>
            </div>
          </>
        )}
      </Layout>
    </>
  );
};

export default Dashboard;
