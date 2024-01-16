import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="bg-red-600 p-6 ">
        <div className="flex justify-between">
        <span className='text-white text-3xl font-bold tracking-tight items-center hover:cursor-default'>
          HotelHub.com
        </span>
        <span className='text-white text-base items-center font-bold flex gap-6'>
          <Link to="/404" className="hover:text-gray-300 hover:cursor-pointer">Privacy Policy</Link>
          <Link to="/404" className="hover:text-gray-300 hover:cursor-pointer">Terms of Service</Link>
        </span>
        </div>
        <div className="text-center">
            <p className="text-white text-xs hover:cursor-default">©2024 Debaditya Barman</p>
        </div>
    </div>
  )
}

export default Footer