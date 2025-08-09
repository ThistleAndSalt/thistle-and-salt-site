
export function Card({ className='', children }){return <div className={`rounded-2xl border border-[#D4AF37]/25 bg-neutral-950 ${className}`}>{children}</div>}
export function CardHeader({ children }){return <div className='px-6 pt-6'>{children}</div>}
export function CardTitle({ className='', children }){return <div className={`text-lg text-[#E8E3D5] ${className}`}>{children}</div>}
export function CardContent({ children }){return <div className='px-6 pb-6 text-[#CFC9B8]'>{children}</div>}
