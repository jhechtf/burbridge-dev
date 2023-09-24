import type React from 'react';
import { classNames, type ClassVariants } from '../button/button';

export interface LinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'color'>, ClassVariants {

}

export default function Link({
  size,
  color,
  children,
  rounded,
  ...props
}: React.PropsWithChildren<LinkProps>) {
  const classes = classNames({ size, color, rounded });
  return (
    <a className={classes} {...props}>
      {children}
    </a>
  )
}
