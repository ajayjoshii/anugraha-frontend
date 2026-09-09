import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar';
import AboutHero from './pages/About/Leaders';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Statementfaith from './pages/About/Statementfaith';
import Church_CovenantParent from './components/Church_Covenant/Church_CovenantParent';
import ScrollToTop from './components/ScrollToTop';
import Ladies_Bible from './pages/Ministries/Ladies_Bible';
import Mens_Bible from './pages/Ministries/Mens_Bible';
import Pastoral from './pages/Ministries/Pastoral';
import Sunday from './pages/Ministries/Sunday';
import Sermons from './pages/Sermons';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import Blogs from './pages/About/Blogs';

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about/our-leaders' element={<AboutHero />} />
        <Route path='/about/blogs' element={<Blogs />} />
        <Route path='/plan-a-visit' element={<Contact />} />
        <Route path='/about/statement-of-faith' element={<Statementfaith />} />
        <Route path='/about/church-covenant' element={<Church_CovenantParent />} />
        <Route path='/ministries/ladies-bible-studies' element={<Ladies_Bible />} />
        <Route path='/ministries/mens-bible-studies' element={<Mens_Bible />} />
        <Route path='/ministries/pastoral-internship' element={<Pastoral />} />
        <Route path='/ministries/sunday-school' element={<Sunday />} />
        <Route path='/sermons' element={<Sermons />} />

        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />

        <Route
          path="/admin/dashboard"
          element={<AdminDashboard />}
        />
      </Routes>
      <Footer />

    </>

  )
}

export default App