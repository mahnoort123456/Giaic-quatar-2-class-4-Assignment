import Link from 'next/link';

export default function Header(){
    return(
        <header className='bg-orange-500 black-600 body-font z-50 sticky top-0'>
            <div className='p-5 flex'>
            <a className='flex title-font font-medium items-center text-gray-900 mb-4
     md:mb-0'>
        <span className='font-bold italic ml-3 text-4xl flex text-center items-center'>Mahnoor&apos;s Creative Hub</span>
     </a>
     </div>
            <div>
                <nav>
                    <ul className='md:ml-auto flex flex-wrap items-center text-base flex justify-center'>
                        <li ><Link href={'/'} className='text-black-500 mr-5'>Home</Link></li>
                        <li ><Link href={'#about'} className='text-black-500 mr-5'>About</Link></li>
                        <li><Link href={'#details'} className='text-black-500 mr-5'>Details</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
};