import type React from 'react';

export interface MediaProps {
  leftElement?: React.ReactNode | React.ReactNode[];
  rightElement?: React.ReactNode | React.ReactNode[];
}
export default function Media({ leftElement, rightElement, children }: React.PropsWithChildren<MediaProps> ) {
  return (
    <div className="flex items-center p-2">
      <aside>
        {leftElement}
      </aside>
      <section>
        {children}
      </section>
      <aside>
        {rightElement}
      </aside>
    </div>
  )
}