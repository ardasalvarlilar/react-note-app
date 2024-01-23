
export default function Navbar(){
  
  return(
    <div className='flex items-center justify-between mb-10'>
      <h1 className='text-4xl font-bold'>Notes</h1>
      <button 
        className='px-3 py-2 transition-colors rounded-xl bg-zinc-400 hover:bg-zinc-500'
      >Add new note</button>
    </div>
  )
}