interface ISVGProps {
  className?: string
  width?: number
  height?: number
}

export default function RemindSVG(props: ISVGProps) {
  const { className, height = 19, width = 19 } = props
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox='0 0 19 19'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M15.4805 15.5544L16.3323 18.1098L15.4805 15.5544Z' fill='#38B6FF' />
      <path
        d='M15.4805 15.5544L16.3323 18.1098'
        stroke='#38B6FF'
        strokeWidth='1.70358'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path d='M3.5554 15.5544L2.70361 18.1098L3.5554 15.5544Z' fill='#38B6FF' />
      <path
        d='M3.5554 15.5544L2.70361 18.1098'
        stroke='#38B6FF'
        strokeWidth='1.70358'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path d='M1 3.62934L3.55537 1.07397L1 3.62934Z' fill='#38B6FF' />
      <path
        d='M1 3.62934L3.55537 1.07397'
        stroke='#38B6FF'
        strokeWidth='1.70358'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path d='M15.4805 1.07397L18.0358 3.62934L15.4805 1.07397Z' fill='#38B6FF' />
      <path
        d='M15.4805 1.07397L18.0358 3.62934'
        stroke='#38B6FF'
        strokeWidth='1.70358'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path d='M9.51794 2.77755V1.07397V2.77755Z' fill='#38B6FF' />
      <path
        d='M9.51794 2.77755V1.07397'
        stroke='#38B6FF'
        strokeWidth='1.70358'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M18 10.4438C18 15.1283 14.2024 18.9259 9.51786 18.9259C4.83333 18.9259 1.03577 15.1283 1.03577 10.4438C1.03577 5.75923 4.83333 1.96167 9.51786 1.96167C14.2024 1.96167 18 5.75923 18 10.4438ZM13.4188 7.74745C13.7514 7.41481 13.7514 6.87548 13.4188 6.54284C13.0862 6.2102 12.5468 6.2102 12.2142 6.54284L8.9156 9.84143C8.58295 10.1741 8.58295 10.7134 8.9156 11.046C9.24824 11.3787 9.78757 11.3787 10.1202 11.046L13.4188 7.74745Z'
        fill='#38B6FF'
      />
    </svg>
  )
}
