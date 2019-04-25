import React from 'react';

export default ({ staticContext = {} }) => {
    staticContext.status = 404;
    return <h1>404 -Error<br/>
            Page not found!
           </h1>

};