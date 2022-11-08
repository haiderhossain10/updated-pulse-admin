import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Otp from "./pages/Otp";

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/otp" element={<Otp />} />
            </Routes>
        </>
    );
}
