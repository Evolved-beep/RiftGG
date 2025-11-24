import Link from 'next/link'

const Navbar = () => {
  return (
    <header className='fixed top-0 left-0 right-0 z-50 text-white w-full'>
        <nav className='bg-[#151B3B] border-b border-[#1E2544] px-6 py-4'>
            <div className='max-w-7xl mx-auto'>
                <Link href="/">
                    <h1 className='font-heading text-xl font-bold hover:text-blue-400 transition cursor-pointer'>
                        RiftGG
                    </h1>
                </Link>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
