import { Route, Routes } from 'react-router-dom';
import './App.css';
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
        <Route path='/about' element={<About />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/projectDetails/:id' element={<ProjectDetails />} />
      </Routes>
    </div>
  );
}

export default App;
