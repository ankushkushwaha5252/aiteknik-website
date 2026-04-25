/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import LearningPath from './pages/LearningPath';
import Offerings from './pages/Offerings';
import BusinessModel from './pages/BusinessModel';
import Partnerships from './pages/Partnerships';
import Team from './pages/Team';
import FounderMessage from './pages/FounderMessage';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="programs" element={<Programs />} />
          <Route path="learning-path" element={<LearningPath />} />
          <Route path="offerings" element={<Offerings />} />
          <Route path="business-model" element={<BusinessModel />} />
          <Route path="partners" element={<Partnerships />} />
          <Route path="team" element={<Team />} />
          <Route path="founder-message" element={<FounderMessage />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

