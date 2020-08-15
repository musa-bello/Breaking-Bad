import React from 'react'


const CharacterComponent = ({name, img, occupation, nickName, appearance, status}) => {
    return (
        <div className="card-container col-lg-3 col-md-4" >
            <div className="card-flip">
                <div className="card front">
                    <img src={img} alt="" className='rounded border border-success'/>
                </div>
                <div className="card back bg-back p-5">
                    <p><span><strong>Name: </strong> {name} </span></p>
                    <p><span><strong>Nickname: </strong> {nickName} </span></p>
                    <p><span><strong>Occupation: </strong> {occupation} </span></p>
                    <p><span><strong>Season appearance: </strong> {appearance} </span></p>
                    <p><span><strong>Status: </strong> {status} </span></p>
                </div>
            </div>
        </div>
        
    )
}

export default CharacterComponent