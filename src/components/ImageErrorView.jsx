import React from 'react';


export default function imageErrorView({message}) {
    return (
        <div role='alert'>
            <p>{message}</p>
        </div>
    )
}