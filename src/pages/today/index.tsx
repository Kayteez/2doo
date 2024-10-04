import ImagePlanToday from '~/assets/images/svg/nguoi-chien-soan-plan.svg'
import JobCard from './components/JobCard'
import Tag from './components/Tag'
import ScheduleSVG from '~/components/icons/schedule'
import PrioritySVG from '~/components/icons/priority'
import LocationSVG from '~/components/icons/location'
import RemindSVG from '~/components/icons/remind'
import TagSVG from '~/components/icons/tag'
import FlagSVG from '~/components/icons/flag'
import SetNote from '~/assets/images/svg/set-note.svg'
import CancelNote from '~/assets/images/svg/cancel-note.svg'

const Today = () => {
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

  return (
    <div className='py-10 h-full'>
      <img src={ImagePlanToday} />
      <div className='mt-10'>
        <JobCard />
      </div>
      <div className='mt-10 flex flex-wrap gap-4 items-center justify-end'>
        {listTags.map((item) => (
          <Tag key={item.text} icon={item.icon} text={item.text} color={item.color} />
        ))}
      </div>
      <div className='absolute right-5 bottom-40 flex flex-col gap-5 cursor-pointer'>
        <img src={CancelNote} />
        <img src={SetNote} />
      </div>
    </div>
  )
}

export default Today
