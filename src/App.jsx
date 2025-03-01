import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import './App.css'
import Home from './pages/home/home'
import StartupList from './pages/startup/startup_list'
import InvestorsList from './pages/investor/investors_list'
import InnovationsList from './pages/innovations/innovations_list'
function App() {  
  return (
    <Router>
      <div className="app min-h-screen flex flex-col bg-gradient-to-b from-black via-purple-900/10 to-black">
        <Header />
        <main className="flex-grow pt-16"> {/* Add padding-top to account for fixed header */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/startups" element={<StartupList />} />
            <Route path="/investors" element={<InvestorsList />} />
            <Route path="/innovations" element={<InnovationsList />} />
            <Route path="/schemes" element={<div className="text-white text-center pt-20">Schemes Page Coming Soon</div>} />
            <Route path="/about" element={<div className="text-white text-center pt-20">About Page Coming Soon</div>} />
            <Route path="/login" element={<div className="text-white text-center pt-20">Login Page Coming Soon</div>} />
            <Route path="/signup" element={<div className="text-white text-center pt-20">Sign Up Page Coming Soon</div>} />
            <Route path="*" element={
              <div className="text-white text-center pt-20">
                <h2 className="text-4xl font-bold mb-4">404 - Page Not Found</h2>
                <p>The page you're looking for doesn't exist.</p>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
