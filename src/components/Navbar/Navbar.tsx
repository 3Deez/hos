import Link from 'next/link'

function Navbar() {
  return (
    <div className='flex w-full items-center justify-center border text-lg font-semibold text-white'>
      <div className='fixed top-8 flex w-10/12 items-center justify-between rounded-md bg-primary px-8 py-6'>
        <div className='w-3/12'>
          <Link href='/'>HOS, NIGER STATE</Link>
        </div>
        <div className='flex w-5/12 items-center justify-center gap-x-7'>
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/media'>Media</Link>
          <Link href='/mda'>MDA</Link>
        </div>
        <div className='w-3/12 text-right'>
          <p>Contact</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
