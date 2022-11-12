import { Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import Otp from "@pages/Otp";
import ProfileSetup from "@pages/ProfileSetup";
import EnterPassword from "@pages/EnterPassword";
import Connected from "@pages/Connected";
import ChoosePack from "@pages/ChoosePack";
import ChoosePayment from "@pages/ChoosePayment";
import RechargeDone from "@pages/RechargeDone";
import RechargeFailed from "@pages/RechargeFailed";

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
                <Route path="/choose-payment" element={<ChoosePayment />} />
                <Route path="/recharge-done" element={<RechargeDone />} />
                <Route path="/recharge-failed" element={<RechargeFailed />} />
            </Routes>
        </>
    );
}
