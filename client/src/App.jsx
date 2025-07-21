import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  ShowroomPage,
  AcquisitionPage,
  BrokeragePage,
  SkynetPage,
  AboutPage,
  TestimonialPage,
  TeamPage,
  MemberDetailPage,
  HigherPage,
  ContactPage,
} from "./pages/index";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/showroom" element={<ShowroomPage />} />
        <Route path="/acquisition" element={<AcquisitionPage />} />
        <Route path="/brokerage" element={<BrokeragePage />} />
        <Route path="/skynet" element={<SkynetPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/testimonial" element={<TestimonialPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/team/:id" element={<MemberDetailPage />} />
        <Route path="/higher" element={<HigherPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
