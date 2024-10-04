interface ISVGProps {
  className?: string
  width?: number
  height?: number
}
const ScheduleSVG = (props: ISVGProps) => {
  const { className, height = 18, width = 18 } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M18 5.14286V14.7857C18 16.4899 16.6738 17.8843 14.9971 17.9932L14.7857 18H3.21429C1.51008 18 0.115664 16.6738 0.00683703 14.9971L0 14.7857V5.14286H18ZM5.14286 11.5714C4.43278 11.5714 3.85714 12.1471 3.85714 12.8571C3.85714 13.5672 4.43278 14.1429 5.14286 14.1429C5.85294 14.1429 6.42857 13.5672 6.42857 12.8571C6.42857 12.1471 5.85294 11.5714 5.14286 11.5714ZM9 11.5714C8.28992 11.5714 7.71429 12.1471 7.71429 12.8571C7.71429 13.5672 8.28992 14.1429 9 14.1429C9.71008 14.1429 10.2857 13.5672 10.2857 12.8571C10.2857 12.1471 9.71008 11.5714 9 11.5714ZM5.14286 7.71429C4.43278 7.71429 3.85714 8.28992 3.85714 9C3.85714 9.71008 4.43278 10.2857 5.14286 10.2857C5.85294 10.2857 6.42857 9.71008 6.42857 9C6.42857 8.28992 5.85294 7.71429 5.14286 7.71429ZM9 7.71429C8.28992 7.71429 7.71429 8.28992 7.71429 9C7.71429 9.71008 8.28992 10.2857 9 10.2857C9.71008 10.2857 10.2857 9.71008 10.2857 9C10.2857 8.28992 9.71008 7.71429 9 7.71429ZM12.8571 7.71429C12.1471 7.71429 11.5714 8.28992 11.5714 9C11.5714 9.71008 12.1471 10.2857 12.8571 10.2857C13.5672 10.2857 14.1429 9.71008 14.1429 9C14.1429 8.28992 13.5672 7.71429 12.8571 7.71429ZM14.7857 0C16.4899 0 17.8843 1.32625 17.9932 3.00294L18 3.21429V3.85714H0V3.21429C0 1.51009 1.32626 0.115665 3.00295 0.00683703L3.21429 0H14.7857Z'
        fill='#001AFF'
      />
    </svg>
  )
}

export default ScheduleSVG
