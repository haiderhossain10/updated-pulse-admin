import { Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import Otp from "@pages/Otp";
import ProfileSetup from "@pages/ProfileSetup";
import EnterPassword from "./pages/EnterPassword";
import Connected from "./pages/Connected";
import ChoosePack from "./pages/ChoosePack";

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/otp" element={<Otp />} />
                <Route path="/profile-setup" element={<ProfileSetup />} />
                <Route path="/enter-password" element={<EnterPassword />} />
                <Route path="/connected" element={<Connected />} />
                <Route path="/choose-pack" element={<ChoosePack />} />
            </Routes>
        </>
    );
}
