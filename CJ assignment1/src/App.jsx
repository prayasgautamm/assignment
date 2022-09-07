import logo from './logo.svg';
import './App.css';
import{BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import Layout from './components/router/Layout';
import Home from './components/router/home';
import Blogs from './components/router/Blogs';
import Contact from './components/router/Contact';
import NoPage from './components/router/NoPage';

function App() {
  return (
    <>
   

    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> <Route/>
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>




      </Routes>
    </BrowserRouter></>
  );
}

export default App;
