import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs'
import { RiArrowDropDownLine } from 'react-icons/ri'
const HeaderComponent = () => {
    return (
        <header className='bg-purple-900 flex justify-between px-10 py-5 items-center'>
            <div className="logo">
                <img src="/images/logo.png" alt="" style={{ height: '20px' }} />
            </div>
            <nav className=' '>
                <ul className='flex gap-5 items-center'>
                    <li className='flex items-center gap-2'>
                        <a href="/categories" className='flex items-center text-white'>Categories <RiArrowDropDownLine /> </a>
                    </li>
                    <li className='flex items-center gap-2'>
                        <a href="/deals" className='flex items-center text-white'>Deals <RiArrowDropDownLine /></a>
                    </li>
                    <li className='flex items-center gap-2'>
                        <a href="/about" className='text-white'>About</a>
                    </li>
                    <li className='flex items-center gap-2'>
                        <a href="/contact" className='text-white'>Contact</a>
                    </li>
                </ul>

            </nav>
            <nav className="social-menu">
                <ul className='flex gap-5 text-white'>
                    <li>
                        <a href='/facebookLink'>
                            <BsFacebook />
                        </a>
                    </li>
                    <li>
                        <a href='/twitterLink'>
                            <BsTwitter />
                        </a>
                    </li>
                    <li>
                        <a href='/instagramLink'>
                            <BsInstagram />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>

    )
}
export default HeaderComponent;