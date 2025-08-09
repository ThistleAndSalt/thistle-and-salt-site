
import React from 'react'
export function Button({ asChild, variant='primary', size='md', className='', ...props }){
  const base='inline-flex items-center justify-center rounded-2xl font-medium transition focus:outline-none focus:ring-2 focus:ring-[rgba(212,175,55,0.35)]'
  const variants={primary:'bg-[#D4AF37] text-neutral-900 hover:bg-[#c49c2f]',secondary:'bg-neutral-100 text-neutral-900 hover:bg-white',ghost:'bg-transparent text-white hover:bg-white/10',outline:'border border-[#D4AF37]/60 text-[#D4AF37] hover:bg-[#D4AF37]/10'}
  const sizes={sm:'px-3 py-2 text-sm',md:'px-4 py-2',lg:'px-6 py-3 text-base'}
  const cls=`${base} ${variants[variant]} ${sizes[size]} ${className}`
  if(asChild && props.children?.type==='a'){return React.cloneElement(props.children,{className:`${props.children.props.className||''} ${cls}`})}
  return <button className={cls} {...props}/>
}
