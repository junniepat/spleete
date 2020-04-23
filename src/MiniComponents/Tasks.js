
import React from 'react';

export default function Tasks(props) {
    return (
        <>
            <div className='col-md-11 TaskCard ml-auto mr-auto'>
                    <span className="hamburger">h</span>
                        <h3>
                            {props.title}
                        </h3>
                        <p>
                            {props.time}
                        </p>
                </div>
        </>
    )
}