import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Otp from "./pages/Otp";
import ProfileSetup from "./pages/ProfileSetup";

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/otp" element={<Otp />} />
                <Route path="/profile-setup" element={<ProfileSetup />} />
            </Routes>
        </>
    );
}
