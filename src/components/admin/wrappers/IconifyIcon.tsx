import { Icon, IconProps } from '@iconify/react'

type IconifyIconProps = IconProps & {
  icon: string
  className?: string
}

const IconifyIcon = ({ icon, className, ...props }: IconifyIconProps) => {
  return <Icon icon={icon} className={className} {...props} />
}

export default IconifyIcon
