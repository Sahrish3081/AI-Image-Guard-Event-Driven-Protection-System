
import { Outlet } from "react-router-dom";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
export default function Layouts() {
  return (
    <div className="flex flex-col min-h-screen">
     <Header/>

      {/* MAIN CONTENT */}
      <main className="flex-1 ">
        <Outlet/>
      </main>

      <Footer />
    </div>
  );
}