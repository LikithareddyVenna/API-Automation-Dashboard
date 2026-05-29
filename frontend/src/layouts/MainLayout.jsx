import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      
      <Sidebar />

      <div className="flex-1 bg-gray-100">

        <Navbar />

        <div className="p-6">
          {children}
        </div>

      </div>

    </div>
  );
}