import React from 'react'

function Mcatergory({filterFun,allCategries}) {
  return (
    <div className='container'>
       <div className='row'>
           <div className='col-sm-10 m-2'>
               {allCategries.map((post)=><button className='btn btn-warning  m-2' onClick={()=>filterFun(post)}>{post}</button>)}
           </div>
       </div>
    </div>
  )
}

export default Mcatergory