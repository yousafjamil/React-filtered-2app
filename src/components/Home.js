import React, { useState } from 'react'
import Catetogery from './Catetogery';

import data from './Data'
import Item from './Item';
function Home() {
 
const allcategories=['all', ...new Set(data.map((post)=>post.category ))]
 
  const [items, setItems] = useState(data)
  const [categories, setCategories] = useState([]);


  const filterItem = (catgry) => {
if(catgry==='all'){
return setItems(data)

}

    let newItem = data.filter((item) => item.category == catgry);
    setItems(newItem)

  }

  return (
    <div className='container py-5'>
      <Catetogery filterfun={filterItem}   allcategories={allcategories}/>
      <Item items={items} />



    </div>
  )
}

export default Home