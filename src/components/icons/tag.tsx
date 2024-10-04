interface ISVGProps {
  className?: string
  width?: number
  height?: number
}

export default function TagSVG(props: ISVGProps) {
  const { className, height = 18, width = 16 } = props

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 16 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.2636 1.82962C11.0655 0.158123 7.9286 0.584997 6.2571 2.78307L0.20406 10.743C-0.130241 11.1826 -0.0448658 11.81 0.39475 12.1443L6.7627 16.9867C7.20232 17.321 7.8297 17.2357 8.164 16.7961L14.217 8.83612C15.8885 6.63804 15.4617 3.50113 13.2636 1.82962ZM10.2352 5.80826C10.6748 6.14256 11.3022 6.05718 11.6365 5.61757C11.9708 5.17795 11.8854 4.55057 11.4458 4.21627C11.0062 3.88197 10.3788 3.96734 10.0445 4.40696C9.71017 4.84657 9.79554 5.47396 10.2352 5.80826Z'
        fill='#FF66C4'
      />
    </svg>
  )
}
