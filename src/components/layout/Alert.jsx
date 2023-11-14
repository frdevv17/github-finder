import React, { useContext } from 'react'
import AlertContext from '../../context/alert/AlertContext'
import { AiFillCloseCircle } from 'react-icons/ai'
const Alert = () => {
    const { alert } = useContext(AlertContext)

    return alert !== null && (
        <p className="flex items-center mb-4 space-x-2 text-white">
            {alert.type === 'error' && (
                <AiFillCloseCircle className='w-6 h-6  text-red-500' />
            )}
            <strong className='flex-1 text-base  font-bold leading-10 text-white'>{alert.msg}</strong>
        </p>
    )
}

export default Alert