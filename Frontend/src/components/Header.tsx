import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div className='bg-red-600 py-6 px-6'>
      <div className='flex justify-between container'>
        <span className='text-white text-3xl font-bold tracking-tight'>
          <Link to="/">HotelHub.com</Link>
        </span>
        <span className='flex space-x-2'>
          <Link to="/sign-in" className='flex items-center text-red-400 px-3 font-bold hover:bg-gray-300 bg-white rounded'>Sign In</Link>
        </span>
      </div>
    </div>
  )
}

export default Header