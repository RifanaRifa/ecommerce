import React from 'react'

const Helmet = (props) => {
    document.title = "4R Fire - " + props.title;//title la 4r fire nu varanum mela tap la
    return <div className='w-100'> {props.children}</div>


}

export default Helmet