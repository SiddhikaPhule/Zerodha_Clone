import React from 'react'

function LeftSection({imageUrl, productName, productDescsription, tryDemo, learnMore, googlePlay, appStore}) {
    return (  
        <div className='container'>
            <div className='row  mt-5'>
                <div className='col '>
                    <img src={imageUrl}></img>
                </div>
                <div className='col p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDescsription}</p>
                    <div>
                    <a href={tryDemo}>Try demo <i class="fa-solid fa-arrow-right"></i></a>
                    <a href={learnMore} style={{marginLeft:"50px"}}>Learn more <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className='mt-5'>
                    <a href={googlePlay}><img src='media\Images\googlePlayBadge.svg'></img></a>
                    <a href={appStore} style={{marginLeft:"50px"}}><img src='media\Images\appstoreBadge (1).svg'></img></a>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default LeftSection;