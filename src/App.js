import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Home from './pages/Home/Home';
import ProjectDetails from './pages/ProjectDetails';
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/projectDetails/:id' element={<ProjectDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
