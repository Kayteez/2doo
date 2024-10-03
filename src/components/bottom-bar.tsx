import { useState } from 'react'
import Schedule from './icons/schedule'

export default function BottomBar() {
  const [active, setActive] = useState('Hôm nay')
  const items = [
    {
      icon: <Schedule />,
      text: 'Hôm nay'
    },
    {
      icon: <Schedule />,
      text: 'Trong tuần'
    },
    {
      icon: <Schedule />,
      text: 'Trong tháng'
    },
    {
      icon: <Schedule />,
      text: 'Đại dương'
    },
    {
      icon: <Schedule />,
      text: 'Tài khoản'
    }
  ]
  return (
    <div className='flex justify-around bg-2doo-blue rounded-full'>
      {items.map((item) => {
        return (
          <div
            key={item.text}
            onClick={() => setActive(item.text)}
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
