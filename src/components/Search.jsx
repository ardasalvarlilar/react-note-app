import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  return(
    <div className='relative flex items-center'> 
        <FaSearch size={17} className='absolute left-2 text-zinc-700' />
        <input 
          type="text" 
          className='w-full px-8 py-1 bg-zinc-300 rounded-xl placeholder:text-zinc-500' 
          placeholder='Type to search...'
        />
      </div>
  )
}