import React from 'react'

function Catetogery({filterfun, allcategories}) {
  return (
    <div>
       { allcategories.map((button)=>{
           return <>
           <button className='btn btn-warning m-3' onClick={()=>filterfun(button)}>{button}</button>
           
           </>
       })}
    </div>
  )
}

export default Catetogery