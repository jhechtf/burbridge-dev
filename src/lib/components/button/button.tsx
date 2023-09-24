import type React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

export const classNames = cva('border transition-all', {
  variants: {
    color: {
      primary: 'bg-emerald-800 border-emerald-800 text-slate-50 hover:bg-emerald-700 hover:border-emerald-700',
      'primary:inverse': 'bg-emerald-300 text-zinc-800 border-emerald-300 hover:bg-emerald-400 hover:border-emerald-400',
      'primary:outline': 'border-emerald-800 hover:bg-emerald-800',
      'primary:outline:inverse': 'border-emerald-300 hover:bg-emerald-300 hover:text-zinc-800'
    },
    size: {
      'lg': 'p-6',
      'md': 'p-4',
      'sm': 'p-3',
      'xs': 'p-2'
    },
    rounded: {
      full: 'rounded-full',
      md: 'rounded',
      sm: 'rounded-sm',
      lg: 'rounded-lg'
    }
  },
  defaultVariants: {
    size: 'md',
    rounded: 'lg',
    color: 'primary'
  }
});

export type ClassVariants = VariantProps<typeof classNames>;

export interface ButtonProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'color'>, ClassVariants {
}

export default function Button({ children, size, color, rounded, ...props }: React.PropsWithChildren<ButtonProps>) {
  const classes = classNames({ size, color, rounded });
  return (
    <button className={classes} {...props} >
      {children}
    </button>
  );
}
