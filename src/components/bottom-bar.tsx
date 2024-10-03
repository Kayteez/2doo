import { useState } from 'react'
import Schedule from './icons/schedule'
import { useNavigate } from 'react-router-dom'

export default function BottomBar() {
  const [active, setActive] = useState('Hôm nay')
  const navigate = useNavigate()
  const items = [
    {
      icon: <Schedule />,
      text: 'Hôm nay',
      url: '/'
    },
    {
      icon: <Schedule />,
      text: 'Trong tuần',
      url: '/plan-in-week'
    },
    {
      icon: <Schedule />,
      text: 'Trong tháng',
      url: '/'
    },
    {
      icon: <Schedule />,
      text: 'Đại dương',
      url: '/'
    },
    {
      icon: <Schedule />,
      text: 'Tài khoản',
      url: '/'
    }
  ]
  return (
    <div className='flex justify-around bg-2doo-blue rounded-full'>
      {items.map((item) => {
        return (
          <div
            key={item.text}
            onClick={() => {
              setActive(item.text)
              navigate(item.url)
            }}
            className='flex justify-center items-center p-2 m-2 cursor-pointer gap-2'
          >
            <p className={`${active === item.text ? 'bg-2doo-pink' : ''} text-starbucks-white rounded-full p-1`}>
              {item.icon}
            </p>
            <p className={`text-starbucks-white ${active !== item.text ? 'hidden' : ''}`}>{item.text}</p>
          </div>
        )
      })}
    </div>
  )
}
