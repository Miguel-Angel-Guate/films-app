import Image from 'next/image'
import { navItemData } from '../mappersData/navData';

const Nav = () => {
    return (
        <>
            <nav className="border-blue-200">
                <div className="flex flex-wrap items-center justify-between">
                    <Image
                        src="https://flowbite.com/docs/images/logo.svg"
                        alt="Flowbite Logo"
                        width={60}
                        height={40}
                    />
                    
                    {navItemData.map((item) => {
                        return (
                            <>
                                <div className='hidden sm:block'>
                                    <button>{item?.title}</button>
                                </div>
                            </>
                        )
                    })}
                </div>
            </nav>
        </>
    );
}

export default Nav;




