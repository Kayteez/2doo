import { useState } from 'react'

const JobCard = () => {
  const [jobTitle, setJobTitle] = useState('')
  const [jobDescription, setJobDescription] = useState('')

  return (
    <div className='bg-white border border-gray-300 rounded-3xl shadow-sm'>
      <div className='px-4 relative border-b border-gray-300'>
        <p
          className={`absolute left-4 top-3 text-[#474747] text-xl font-bold transition-all duration-200 pointer-events-none ${
            jobTitle ? 'opacity-0' : 'opacity-100'
          }`}
        >
          Tên công việc
        </p>
        <input
          type='text'
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          className='w-full py-3 text-gray-900 placeholder-transparent focus:outline-none focus:ring-0 text-xl font-bold'
          placeholder='Tên công việc'
        />
      </div>
      <div>
        <textarea
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          className='w-full p-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 rounded-3xl'
          rows={4}
          placeholder='Mô tả công việc'
          style={{ resize: 'none' }}
        ></textarea>
      </div>
    </div>
  )
}

export default JobCard
