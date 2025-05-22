import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <motion.nav
      className="w-full fixed top-0 z-50 backdrop-blur-md bg-white/40 shadow-md"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        <h2 className="text-2xl md:text-3xl font-bold text-purple-700">
        Note Nest 
        </h2>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 text-lg font-medium text-gray-700">
          <NavLink to="/" className="hover:text-purple-700 transition">Home</NavLink>
          <NavLink to="/createnotes" className="hover:text-purple-700 transition">Create</NavLink>
          <NavLink to="/notes" className="hover:text-purple-700 transition">Notes</NavLink>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-white/60 backdrop-blur-lg shadow-md px-4 pb-4 flex flex-col space-y-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <NavLink to="/" className="text-gray-800 hover:text-purple-700" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/createnotes" className="text-gray-800 hover:text-purple-700" onClick={() => setIsOpen(false)}>Create</NavLink>
          <NavLink to="/notes" className="text-gray-800 hover:text-purple-700" onClick={() => setIsOpen(false)}>Notes</NavLink>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar
