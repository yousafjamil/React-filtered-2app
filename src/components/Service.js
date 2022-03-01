import React, { useState } from 'react'
import Mcatergory from './Mcatergory';
import Mdata from './MobileData'
import MobileHome from './MobileHome';


const  allCategries=['all', ...new Set(Mdata.map((item)=>item.title))]
function Service() {
  const  [mobile,setMobile]=useState(Mdata);
  const  [categry,setCategry]=useState([]);

  const filterFun=(catgry)=>{
      if(catgry==='all'){
        return  setMobile(Mdata)
      }
      let fiteredItem=Mdata.filter((item)=>item.title===catgry);
      setMobile(fiteredItem)
  }

  return (
    <div className='container jumbotron py-5 mt-5'>
        <Mcatergory   filterFun={filterFun}  allCategries={allCategries}/>
        <MobileHome  data={mobile} />

    </div>
  )
}

export default Service