import React from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <div className='h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-4'>
      <motion.div
        className='backdrop-blur-xl bg-white/60 rounded-2xl shadow-2xl px-6 sm:px-12 py-10 text-center max-w-2xl w-full'
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className='text-3xl sm:text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight'
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to <span className='text-purple-600'>Note Nest </span>
        </motion.h2>

        <motion.h3
          className='text-base sm:text-xl md:text-2xl text-gray-700 mb-8'
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          Where every idea matters.<br />
          Create, organize, and protect your notes with ease.
        </motion.h3>

        <motion.button
          className='px-6 py-3 bg-purple-600 text-white rounded-full font-semibold text-lg hover:bg-purple-700 transition-all shadow-md hover:shadow-lg'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
         <NavLink to="/createnotes">Get Started</NavLink>
        </motion.button>
      </motion.div>
    </div>
  )
}

export default Home
