import React from 'react'


const CustomBtn = (props) => {
    return (
        <>
            <button className={props.cname} onClick={props.function}>{props.children}</button>
        </>
    )
}
export default CustomBtn