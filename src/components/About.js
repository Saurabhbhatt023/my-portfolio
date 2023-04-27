import React from 'react'

const About = () => {
  return (
    <div name = "about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>

      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full '> 
         <div className='pb-8 '> 
         <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
         </div>
      </div>
      <p className='text-xl mt-20 pl-20'> 
        I  have a  Good exprience in  Front-End-Devlopment
       Technology i have worked with 
       ⬇️
      </p>
      <br/> 
      <p> 
        <ul className='pl-20'> 

        <li className='hover:bg-orange-500 hover:text-black'> HTML </li>
        <li className='hover:bg-sky-400 hover:text-black'> Css </li>
        <li className='hover:bg-yellow-400 hover:text-black'> Javascript </li>
        <li className='hover:bg-blue-500 hover:text-black'> Reactjs</li>
        <li className='hover:bg-violet-400 hover:text-black'> Redux</li>
        <li className='hover:bg-blue-700 hover:text-black'> TypeScript</li>
        <li className='hover:bg-sky-300 hover:text-black'> Tailwind</li>
         
        
       
  
    
        </ul>
         
      </p>

    </div>
  )
}

export default About
