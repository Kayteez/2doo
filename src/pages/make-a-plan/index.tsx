import ImageMakePlan from '~/assets/images/svg/nguoi-chien-soan-plan.svg'
import Tag from './components/Tag'
import ScheduleSVG from '~/assets/images/svg/schedule.svg'
import PrioritySVG from '~/assets/images/svg/priority.svg'
import LocationSVG from '~/assets/images/svg/location.svg'
import RemindSVG from '~/assets/images/svg/remind.svg'
import TagSVG from '~/assets/images/svg/tag.svg'
import FlagSVG from '~/assets/images/svg/flag.svg'
import ScheduleWhiteSVG from '~/assets/images/svg/white-schedule.svg'
import PriorityWhiteSVG from '~/assets/images/svg/white-priority.svg'
import LocationWhiteSVG from '~/assets/images/svg/white-location.svg'
import RemindWhiteSVG from '~/assets/images/svg/white-remind.svg'
import TagWhiteSVG from '~/assets/images/svg/white-tag.svg'
import FlagWhiteSVG from '~/assets/images/svg/white-flag.svg'
import SetNote from '~/assets/images/svg/set-note.svg'
import CancelNote from '~/assets/images/svg/cancel-note.svg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const MakePlan = () => {
  const [jobTitle, setJobTitle] = useState('')
  const [jobDescription, setJobDescription] = useState('')
  const [activeTags, setActiveTags] = useState<string[]>([])
  const navigate = useNavigate()
  const listTags = [
    {
      icon: <img src={ScheduleSVG} />,
      activeIcon: <img src={ScheduleWhiteSVG} />,
      text: 'Thời hạn',
      bgColor: 'bg-extra-blue',
      borderColor: 'border-extra-blue'
    },
    {
      icon: <img src={PrioritySVG} />,
      activeIcon: <img src={PriorityWhiteSVG} />,
      text: 'Độ ưu tiên',
      bgColor: 'bg-deep-pink',
      borderColor: 'border-deep-pink'
    },
    {
      icon: <img src={LocationSVG} />,
      activeIcon: <img src={LocationWhiteSVG} />,
      text: 'Địa điểm',
      bgColor: 'bg-more-yellow',
      borderColor: 'border-more-yellow'
    },
    {
      icon: <img src={RemindSVG} />,
      activeIcon: <img src={RemindWhiteSVG} />,
      text: 'Nhắc nhở',
      bgColor: 'bg-2doo-blue',
      borderColor: 'border-2doo-blue'
    },
    {
      icon: <img src={TagSVG} />,
      activeIcon: <img src={TagWhiteSVG} />,
      text: 'Gắn thẻ',
      bgColor: 'bg-2doo-pink',
      borderColor: 'border-2doo-pink'
    },
    {
      icon: <img src={FlagSVG} />,
      activeIcon: <img src={FlagWhiteSVG} />,
      bgColor: 'bg-2doo-yellow',
      borderColor: 'border-2doo-yellow'
    }
  ]

  const clearContent = () => {
    setJobTitle('')
    setJobDescription('')
    navigate('/today')
  }

  return (
    <div className='py-10 h-full'>
      <img src={ImageMakePlan} />
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
        {listTags.map((item, index) => (
          <Tag
            key={index}
            icon={activeTags.includes(item.text || '') ? item.activeIcon : item.icon}
            text={item.text}
            bgColor={item.bgColor}
            borderColor={item.borderColor}
            onSelect={(activeTag) => {
              if (activeTags.includes(activeTag)) {
                setActiveTags(activeTags.filter((tag) => tag !== activeTag))
              } else {
                setActiveTags([...activeTags, activeTag])
              }
            }}
            active={activeTags.includes(item.text || '')}
          />
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

export default MakePlan
