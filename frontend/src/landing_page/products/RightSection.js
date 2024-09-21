import React from 'react'

function RightSection({imageUrl, productName, productDescsription, learnMore}) {
    return ( 
        <div className='container'>
            <div className='row  mt-5'>
            <div className='col p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDescsription}</p>
                    <div>
                    <a href={learnMore} style={{marginLeft:"50px"}}>Learn more <i class="fa-solid fa-arrow-right"></i></a>
                    </div>             
                </div>
                <div className='col '>
                    <img src={imageUrl}></img>
                </div>
            </div>
        </div>
     );
}

export default RightSection;