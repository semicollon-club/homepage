import type { AnchorHTMLAttributes, MouseEvent } from 'react'
import { navigate } from '../lib/navigation'

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string
}

function Link({ to, onClick, children, ...rest }: LinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    event.preventDefault()
    navigate(to)
    onClick?.(event)
  }

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  )
}

export default Link
