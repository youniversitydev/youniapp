import React from "react";
import Allmentors from "pages/Allmentors";
import YOUnitodayPrograms from "pages/YOUnitodayPrograms";
import YOUnitodayJoinAsMentor from "pages/YOUnitodayJoinAsMentor";
import YOUnitodayShop from "pages/YOUnitodayShop";
import Singlementordetails from "pages/Singlementordetails";
import YOUnitodayProgramPricing from "pages/YOUnitodayProgramPricing";
import CoursesDetails from "pages/CoursesDetails";
import YOUnitoday from "pages/YOUnitoday";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/younitoday" element={<YOUnitoday />} />
        <Route path="/coursesdetails" element={<CoursesDetails />} />
        <Route
          path="/younitodayprogrampricing"
          element={<YOUnitodayProgramPricing />}
        />
        <Route path="/singlementordetails" element={<Singlementordetails />} />
        <Route path="/younitodayshop" element={<YOUnitodayShop />} />
        <Route
          path="/younitodayjoinasmentor"
          element={<YOUnitodayJoinAsMentor />}
        />
        <Route path="/younitodayprograms" element={<YOUnitodayPrograms />} />
        <Route path="/allmentors" element={<Allmentors />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
