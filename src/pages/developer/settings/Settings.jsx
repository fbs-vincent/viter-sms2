import React from "react";
import useDocumentTitle from "../../../functions/custom-hooks/useDocumentTitle";
import Header from "../../../partials/Header";
import Layout from "../Layout";

const Settings = () => {
  useDocumentTitle("Settings | School Management System");

  return (
    <>
      <Layout menu="settings">
        {({ onToggle }) => (
          <>
            <Header
              title="Settings"
              description="System preferences and account settings"
              onToggle={onToggle}
            />
            <div className="px-8 py-6">
              <div className="bg-white rounded-2xl shadow-sm max-w-2xl p-6">
                <h6 className="mb-2">Profile Information</h6>
                <form>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Admin Name
                    </label>
                    <input
                      className="w-full rounded-xl px-4 py-2.5 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      type="text"
                      value="Admin User"
                    />
                  </div>
                  <div className="mt-4 pb-6">
                    <label className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      className="w-full rounded-xl px-4 py-2.5 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      type="email"
                      value="admin@schoolms.com"
                    />
                  </div>
                </form>
                <div className="pt-6 border-t">
                  <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl transition">
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </Layout>
    </>
  );
};

export default Settings;
