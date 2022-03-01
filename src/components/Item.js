import React from 'react'

const Item = ({ items }) => {

    return (
        <div className='container'>
            <div className='row'>
                {items.map((post, index) => {
                    const  {img,price,title,desc}=post
                    return (

                        <div className='col-lg-4'>


                            <div className="card m-3">
                                <img className="card-img-top" src={img} alt="Card image cap" style={{ height: "350px" }} />
                                <div className="card-body">
                                    <h5 className="card-title">{title}</h5>
                                    <p className="card-text">{desc}</p>

                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>



        </div>
    )
}

export default Item