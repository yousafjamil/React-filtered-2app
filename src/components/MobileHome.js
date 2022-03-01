import React from 'react'

function MobileHome({ data }) {
    console.log(data)


    return (
        <div className='container'>
            <div className='row'>
                {data.map((mobile, index) => {
                    const { img, title, price } = mobile
                    return <div className='col-lg-4'>

                        <div class="card mb-4" >
                            <img class="card-img-top" src={img} alt="Card image cap"  style={{height:'400px'}}/>
                            <div class="card-body">
                                <h4>{title}</h4>
                                <p class="card-text">${price}</p>
                            </div>
                        </div>

                    </div>

                })}
            </div>
        </div>
    )
}

export default MobileHome