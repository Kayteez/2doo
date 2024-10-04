import { ReactNode } from 'react'

interface TagProps {
  icon: ReactNode
  text?: string
  color?: string
}

export default function Tag(props: TagProps) {
  const { icon, color = 'border-2doo-blue', text } = props
  return (
    <div className={`flex items-center p-1 ${text ? 'rounded-lg' : 'rounded-full'} gap-2 border ${color} `}>
      {icon}
      {props.text && <p className='font-medium'>{text}</p>}
    </div>
  )
}
