import React from 'react'

const Helmet = (props) => {
    document.title = "CartMax - " + props.title;//title la 4r fire nu varanum mela tap la
    return <div className='w-100'> {props.children}</div>


}

export default Helmet