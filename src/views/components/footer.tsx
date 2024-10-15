import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col px-4 md:flex-row md:justify-between md:items-center">
        {/* Left Side: Logo */}
        <div className="mb-4 md:mb-0 justify-center items-center">
          <img src="/images/logo-gojek.png" alt="Logo" className="h-12" />
        </div>

        {/* Middle: Menus */}
        <div className="flex md:flex-row md:space-y-4 md:space-x-[2em]">
          {/* First Menu */}
          <nav className='m-4'>
            <ul>
              <li className="mb-[2em]">
                <Link href="#">
                  <span className="hover:text-gray-400 font-bold">Perusahaan</span>
                </Link>
              </li>
              <li className="mb-[1em]">
                <Link href="#">
                  <span className="hover:text-gray-400">About</span>
                </Link>
              </li>
              <li className="mb-[1em]">
                <Link href="#">
                  <span className="hover:text-gray-400">Services</span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Second Menu */}
          <nav className='m-4'>
            <ul>
              <li className="mb-[2em]">
                <Link href="#">
                  <span className="hover:text-gray-400 font-bold">Gabung</span>
                </Link>
              </li>
              <li className="mb-[1em]">
                <Link href="#">
                  <span className="hover:text-gray-400">Mitra Driver</span>
                </Link>
              </li>
              <li className="mb-[1em]">
                <Link href="#">
                  <span className="hover:text-gray-400">Mitra Usaha</span>
                </Link>
              </li>
            </ul>
          </nav>

        </div>

        {/* Right Side: Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0 justify-center items-center">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} className="h-6 w-6 hover:text-gray-400" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="h-6 w-6 hover:text-gray-400" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="h-6 w-6 hover:text-gray-400" />
          </a>
        </div>
      </div>
    </footer>
  );
}
