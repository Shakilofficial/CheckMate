import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <NavigationBar />
      <main className="container mx-auto p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
