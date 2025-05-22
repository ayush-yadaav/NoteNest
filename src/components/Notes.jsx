import React, { useState } from 'react'
import { CiViewTimeline } from 'react-icons/ci'
import { FaCopy, FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromNote } from '../redux/notesSlice'
import toast from 'react-hot-toast'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

function Notes() {
  const allNotes = useSelector((state) => state.notes.note)
  const dispatch = useDispatch()
  const [searchTerms, setSearchTerms] = useState('')

  const filteredNotes = allNotes.filter((note) =>
    note.title.toLowerCase().includes(searchTerms.toLowerCase())
  )

  const handleDelete = (noteId) => {
    dispatch(removeFromNote(noteId))
    toast.success('Note deleted')
  }

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
    toast.success('Content copied')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Search Bar */}
        <motion.input
          type="text"
          className="bg-white/60 mt-6 backdrop-blur-md w-full p-4 rounded-xl mb-8 text-gray-800 placeholder-gray-500 border border-purple-300 focus:ring-2 ring-purple-400 outline-none"
          placeholder="Search notes..."
          value={searchTerms}
          onChange={(e) => setSearchTerms(e.target.value)}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* Notes List */}
        <motion.div
          className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {filteredNotes.length > 0 ? (
            filteredNotes.map((note) => (
              <motion.div
                key={note._id}
                className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow flex flex-col justify-between"
                whileHover={{ scale: 1.02 }}
              >
                {/* Title & Content */}
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-purple-800 truncate mb-2">
                    {note.title}
                  </h2>
                  <p className="text-gray-700 line-clamp-4">{note.content}</p>
                </div>

                {/* Action Icons */}
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-purple-200 text-lg text-gray-700">
                  <NavLink
                    to={`/createnotes/?noteId=${note._id}`}
                    className="hover:text-purple-600"
                    title="Edit"
                  >
                    <FaEdit />
                  </NavLink>

                  <NavLink
                    to={`/notes/${note._id}`}
                    className="hover:text-green-600"
                    title="View"
                  >
                    <CiViewTimeline />
                  </NavLink>

                  <button
                    onClick={() => handleCopy(note.content)}
                    className="hover:text-yellow-500"
                    title="Copy"
                  >
                    <FaCopy />
                  </button>

                  <button
                    onClick={() => handleDelete(note._id)}
                    className="hover:text-red-500"
                    title="Delete"
                  >
                    <MdDelete />
                  </button>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center">No notes found</p>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default Notes
