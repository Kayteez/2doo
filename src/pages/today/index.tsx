import ImagePlanToday from '~/assets/images/svg/nguoi-chien-soan-plan.svg'
import Tag from './components/Tag'
import ScheduleSVG from '~/components/icons/schedule'
import PrioritySVG from '~/components/icons/priority'
import LocationSVG from '~/components/icons/location'
import RemindSVG from '~/components/icons/remind'
import TagSVG from '~/components/icons/tag'
import FlagSVG from '~/components/icons/flag'
import SetNote from '~/assets/images/svg/set-note.svg'
import CancelNote from '~/assets/images/svg/cancel-note.svg'
import { useState } from 'react'

const Today = () => {
  const [jobTitle, setJobTitle] = useState('')
  const [jobDescription, setJobDescription] = useState('')
  const listTags = [
    {
      icon: <ScheduleSVG />,
      text: 'Thời hạn',
      color: 'border-extra-blue'
    },
    {
      icon: <PrioritySVG />,
      text: 'Độ ưu tiên',
      color: 'border-deep-pink'
    },
    {
      icon: <LocationSVG />,
      text: 'Địa điểm',
      color: 'border-more-yellow'
    },
    {
      icon: <RemindSVG />,
      text: 'Nhắc nhở'
    },
    {
      icon: <TagSVG />,
      text: 'Gắn thẻ',
      color: 'border-2doo-pink'
    },
    {
      icon: <FlagSVG />,
      color: 'border-2doo-yellow'
    }
  ]

  const clearContent = () => {
    setJobTitle('')
    setJobDescription('')
  }

  return (
    <div className='py-10 h-full'>
      <img src={ImagePlanToday} />
      <div className='mt-10'>
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
              onChange={(e) => {
                setJobTitle(e.target.value)
              }}
              className='w-full py-3 text-gray-900 placeholder-transparent focus:outline-none focus:ring-0 text-xl font-bold'
              placeholder='Tên công việc'
            />
          </div>
          <div>
            <textarea
              value={jobDescription}
              onChange={(e) => {
                setJobDescription(e.target.value)
              }}
              className='w-full p-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 rounded-3xl'
              rows={4}
              placeholder='Mô tả công việc'
              style={{ resize: 'none' }}
            ></textarea>
          </div>
        </div>
      </div>
      <div className='mt-10 flex flex-wrap gap-4 items-center justify-end'>
        {listTags.map((item) => (
          <Tag key={item.text} icon={item.icon} text={item.text} color={item.color} />
        ))}
      </div>
      <div className='absolute right-5 bottom-40 flex flex-col gap-5 cursor-pointer'>
        <img
          src={CancelNote}
          onClick={() => {
            console.log(`Cancel note`)
            clearContent()
          }}
        />
        <img
          src={SetNote}
          onClick={() => {
            console.log(`Set note - ${jobTitle} - ${jobDescription}`)
            clearContent()
          }}
        />
      </div>
    </div>
  )
}

export default Today
