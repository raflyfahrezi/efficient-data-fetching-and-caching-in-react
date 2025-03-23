import { HTMLProps, PropsWithChildren } from 'react'

const Wrapper = ({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLProps<HTMLDivElement>>) => {
  return (
    <div className={`w-full max-w-3xl mx-auto ${className}`} {...props}>
      {children}
    </div>
  )
}

export default Wrapper
