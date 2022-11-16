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
import Reminder from "@pages/Reminder";
import Dashboard from "@pages/admin/Dashboard";
import RechargeHistory from "@pages/admin/RechargeHistory";
import LoginSession from "@pages/admin/LoginSession";
import ActiveDevice from "@pages/admin/ActiveDevice";
import UpdateProfile from "@pages/admin/UpdateProfile";
import Help from "@pages/admin/Help";

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
                <Route path="/reminder" element={<Reminder />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/recharge-history" element={<RechargeHistory />} />
                <Route path="/login-session" element={<LoginSession />} />
                <Route path="/active-devices" element={<ActiveDevice />} />
                <Route path="/update-profile" element={<UpdateProfile />} />
                <Route path="/help" element={<Help />} />
            </Routes>
        </>
    );
}
