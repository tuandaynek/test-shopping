import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar/Navbar.jsx'
import Footer from './components/footer/Footer.jsx'

import HomePage from './components/home/Home.jsx'
import CreateCourse from './components/courses/CreateCourse.jsx'
import NotFound from './components/not-found/NotFound.jsx'

import CourseDetail from './pages/CourseDetail/CourseDetail.jsx'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="courses/create" element={<CreateCourse />}/>
          <Route path="courses/:slug" element={<CourseDetail />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
