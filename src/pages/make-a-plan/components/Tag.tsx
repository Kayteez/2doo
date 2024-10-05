import { ReactNode } from 'react'

interface TagProps {
  icon: ReactNode
  text?: string
  bgColor?: string
  borderColor?: string
  onSelect?: (value: string) => void
  active?: boolean
}

export default function Tag(props: TagProps) {
  const { icon, bgColor, text = '', onSelect, active = false, borderColor } = props
  return (
    <div
      className={`flex items-center p-1 ${text ? 'rounded-lg' : 'rounded-full'} gap-2 border ${borderColor} ${
        active ? bgColor : 'bg-transparent'
      }`}
      onClick={() => onSelect?.(text)}
    >
      {icon}
      {props.text && <p className={`font-medium ${active ? 'text-white' : ''}`}>{text}</p>}
    </div>
  )
}
