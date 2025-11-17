import React from 'react'


function Button(props) {
  return (
    <button onClick={props.onClick} className={`w-1/1 h-12 bg-${props.backgroundcolor} rounded-lg flex justify-center items-center gap-2 text-white cursor-pointer`}>
           <p className='font-Poppins font-medium text-[16px] leading-6 tracking-normal'>{props.name}</p>
           <div className='w-6 h-6 content-center'>
                 <img className='w-3 justify-self-center' src="src/assets/whitedot.svg" alt="" />
           </div>

    </button>

  )
}

export default Button
