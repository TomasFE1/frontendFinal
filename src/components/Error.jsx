import React from 'react'
import {useRouteError} from 'react-router-dom'

function Error() {
    const error = useRouteError();
    return (
    <div className="text-center">
        <h1>Error</h1>
        <p>{error.statusText || error.message}</p>
    </div>
    )
}

export default Error