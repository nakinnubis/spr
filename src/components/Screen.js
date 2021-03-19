import React from 'react'



const Screen = (props) => {
    return (
        <section className="screen outline">
        <div className="inner-screen">
                {props.children}
        </div>
    </section>
    )
}
export default Screen