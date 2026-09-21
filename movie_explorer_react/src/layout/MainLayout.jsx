import { Outlet } from "react-router";
import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";

export default function MainLayout() {
    return (
        <div className="min-h-screen flex flex-col">

            <Navbar />

            <main className="flex-1">
                <Outlet />
            </main>

            <Footer />

        </div>
    )
}