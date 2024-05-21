import { cn } from "@/lib/utils"
import React, { ChangeEvent } from "react"
import { MdOutlineHttp } from "react-icons/md"


export const IconInput = ({
  children,
  icon,
  label,
  onChange,
  className,
  placeholder
}: {
  children?: React.ReactNode,
  icon: React.ReactNode,
  label: string,
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
  className?: string,
  placeholder?: string
}) => {

  return (
    <div className={cn('mt-8')}>
      <label htmlFor={label} className={cn('block w-full mb-2 font-bold text-xl')}>{label}</label>
      <div className={cn('w-full border border-icons rounded-xl flex items-center gap-4 overflow-hidden')}>
        <div className={cn('text-2xl bg-icons p-2 px-4 text-main-bg grid cursor-pointer')}>
          {/* <MdOutlineHttp className='text-4xl' /> */}
          {icon}
        </div>
        {children ? children : <input
          type="text"
          placeholder={placeholder}
          className={cn('w-[90%] bg-transparent border-0 outline-none', className)}
          onChange={onChange}
        />}
      </div>
    </div>
  )
}