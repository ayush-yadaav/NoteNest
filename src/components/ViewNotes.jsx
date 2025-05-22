import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import { motion } from 'framer-motion'

function ViewNotes() {
  const { id } = useParams()
  const allNotes = useSelector((state) => state.notes.note)
  const note = allNotes.find((p) => p._id === id)

  if (!note) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 px-4">
        <div className="text-red-500 text-xl font-semibold">Note not found</div>
      </div>
    )
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(note.content)
    toast.success("Copied to clipboard")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-16 px-4 flex justify-center items-start">
      <motion.div
        className="w-full max-w-3xl mt-8  bg-white/60 backdrop-blur-xl p-6 rounded-2xl shadow-xl space-y-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <input
            className="flex-1 bg-white/80 text-gray-800 p-3 rounded-xl border border-purple-300"
            type="text"
            disabled
            value={note.title}
            placeholder="Note Title"
          />
          <button
            onClick={handleCopy}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl transition font-semibold"
          >
            Copy Content
          </button>
        </div>

        <textarea
          className="w-full h-[400px] p-4 bg-white/80 text-gray-800 rounded-xl border border-purple-300 resize-none"
          value={note.content}
          disabled
          placeholder="Note content here..."
        ></textarea>
      </motion.div>
    </div>
  )
}

export default ViewNotes
