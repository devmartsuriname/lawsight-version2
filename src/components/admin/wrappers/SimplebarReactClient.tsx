import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

type SimplebarReactClientProps = {
  children: React.ReactNode
  className?: string
  [key: string]: any
}

const SimplebarReactClient = ({ children, className, ...props }: SimplebarReactClientProps) => {
  return (
    <SimpleBar className={className} {...props}>
      {children}
    </SimpleBar>
  )
}

export default SimplebarReactClient
