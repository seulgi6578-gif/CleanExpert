/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Business from "./pages/Business";
import Portfolio from "./pages/Portfolio";
import News from "./pages/News";
import Inquiry from "./pages/Inquiry";
import Support from "./pages/Support";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about/*" element={<About />} />
          <Route path="business/*" element={<Business />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="news/*" element={<News />} />
          <Route path="inquiry" element={<Inquiry />} />
          <Route path="support" element={<Support />} />
        </Route>
      </Routes>
    </Router>
  );
}

