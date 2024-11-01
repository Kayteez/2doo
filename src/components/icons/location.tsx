interface ISVGProps {
  className?: string
  width?: number
  height?: number
}

export default function LocationSVG(props: ISVGProps) {
  const { className, height = 18, width = 12 } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 12 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM1.90404 4.65736C2.40335 5.00577 3.28088 4.61072 3.86406 3.77498C4.44723 2.93923 4.51522 1.97928 4.0159 1.63086C3.51659 1.28245 2.63906 1.6775 2.05589 2.51325C1.47271 3.34899 1.40473 4.30894 1.90404 4.65736Z'
        fill='#FFB800'
      />
      <rect x={5} y={10} width={2} height={8} rx={1} fill='#FFB800' />
    </svg>
  )
}
