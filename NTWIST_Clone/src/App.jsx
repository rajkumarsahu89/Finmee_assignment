import { useState } from 'react'
import { HomePage } from './Pages/HomePage'
import { Loader } from './components/Loader'
import { useEffect } from 'react'

function App() {

  const [Loading,setLoading]=useState(false)
 
  useEffect(()=>{
     setTimeout(()=>{
        setLoading(true)
     },3000)
  },[])
  

  console.log(Loading)


  return (
   <div>

    {
      Loading? <HomePage/>:<Loader/>
    }
  
    
   </div>
 
  )
}

export default App