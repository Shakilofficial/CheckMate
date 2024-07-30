import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <header className="bg-gray-800 p-4 text-white">
        <div className="container mx-auto">
          <h1 className="text-lg font-bold">Admin Dashboard</h1>
        </div>
      </header>
      <main className="container mx-auto p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
