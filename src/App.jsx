import { useEffect, useState } from 'react';

function App() {
  const [value, setValue] = useState({
    content: ''
  })
  const [list, setList] = useState([])

  useEffect(() => {
    let listArr = JSON.parse(localStorage.getItem('array'))
    if(!listArr){
      localStorage.setItem('array',JSON.stringify([]))
    }else{
      setList(listArr)
    }
  },[])

  useEffect(() => {
    let listArr = JSON.parse(localStorage.getItem('array'))
    if(!listArr){
      listArr = localStorage.setItem('array',[])
    }else{
      let str = JSON.stringify(list)
      listArr = localStorage.setItem('array',str)
    }
  },[list])


  function handleItemDelete(index){
    const newList = [...list]
    newList.splice(index,1)
    setList(newList)
  }

  return (
    <div className='min-h-screen px-4 py-8 bg-red-300'>
      
      <div className='flex justify-center gap-3'>
        <input type="text" value={value.content} onChange={(e) => setValue({...value, content:e.target.value })} />
        <button 
          onClick={()=> setList(prevList => [...prevList, value])}
          className='px-3 py-1 text-white bg-red-400 border border-red-500 rounded-lg'
        >ekle</button>
      </div>

      {list.map((item,index) => (
        <p key={index} className='flex gap-12 mb-3'>
          <span>{item.content}</span>

          <button 
            onClick={() => handleItemDelete(index)}
            className='px-3 py-1 text-white bg-red-400 border border-red-500 rounded-lg'>sil</button>
        </p>
      ))}
    </div>
  );
}

export default App;
