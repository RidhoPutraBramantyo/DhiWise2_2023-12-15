import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ReportPageOne = React.lazy(() => import("pages/ReportPageOne"));
const SuccessPaymentPageOne = React.lazy(
  () => import("pages/SuccessPaymentPageOne"),
);
const MainPage = React.lazy(() => import("pages/MainPage"));
const LoginPage = React.lazy(() => import("pages/LoginPage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route
            path="/successpaymentpageone"
            element={<SuccessPaymentPageOne />}
          />
          <Route path="/reportpageone" element={<ReportPageOne />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
