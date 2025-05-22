import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { addToNote, updateToNote } from '../redux/notesSlice'
import { motion } from 'framer-motion'

function CreateNotes() {
  const [title, settitle] = useState("")
  const [value, setvalue] = useState('')
  const [searchParams, setsearchParams] = useSearchParams()
  const noteId = searchParams.get("noteId")
  const dispatch = useDispatch()
  const allNotes = useSelector((state) => state.notes.note)

  useEffect(() => {
    if (noteId) {
      const existingNote = allNotes.find((p) => p._id === noteId)
      if (existingNote) {
        settitle(existingNote.title)
        setvalue(existingNote.content)
      }
    }
  }, [noteId, allNotes])

  function createNote() {
    const note = {
      title: title,
      content: value,
      _id: noteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    }

    if (noteId) {
      dispatch(updateToNote(note))
    } else {
      dispatch(addToNote(note))
    }

    settitle('')
    setvalue('')
    setsearchParams({})
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-16 px-4 flex flex-col items-center'>
      <motion.div
        className='w-full max-w-4xl mt-7 bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl p-6 sm:p-10'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className='text-2xl md:text-3xl font-bold text-center text-purple-700 mb-8'>
          {noteId ? 'Update Your Note' : 'Create a New Note'}
        </h2>

        {/* Title and Button */}
        <div className='flex flex-col md:flex-row gap-4 mb-6'>
          <input
            type="text"
            className='w-full md:w-2/3 p-3 rounded-xl outline-none bg-white text-gray-800 placeholder-gray-400 border border-purple-300 focus:ring-2 focus:ring-purple-400'
            placeholder='Enter Title Here'
            value={title}
            onChange={(e) => settitle(e.target.value)}
          />
          <button
            className='w-full md:w-auto bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-xl transition font-semibold'
            onClick={createNote}
          >
            {noteId ? 'Update Note' : 'Create Note'}
          </button>
        </div>

        {/* Content Area */}
        <textarea
          className='w-full h-[300px] p-4 rounded-xl outline-none bg-white text-gray-800 placeholder-gray-400 border border-purple-300 focus:ring-2 focus:ring-purple-400 resize-none'
          placeholder='Enter your content here...'
          value={value}
          onChange={(e) => setvalue(e.target.value)}
        ></textarea>
      </motion.div>
    </div>
  )
}

export default CreateNotes
