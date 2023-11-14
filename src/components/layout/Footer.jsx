import React from 'react'
import { FaSlackHash } from 'react-icons/fa'
const Footer = () => {
    const footerYear = new Date().getFullYear()
    return (
        <footer className='footer p-5 bg-gray-700 text-white  footer-center'>
            <div>
                <FaSlackHash fontSize={'3rem'} style={{ marginBottom: '-30px' }} />
            </div>
            <p>CopyRight &copy; {footerYear} All Rights Reserved</p>
        </footer>
    )
}

export default Footer