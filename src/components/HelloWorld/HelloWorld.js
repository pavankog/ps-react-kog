import React from 'react';
import propTypes from 'prop-types';

/** A super lame  component that says hello with a custom message */
function HelloWorld({ message }) {
    return <div>Hello {message}</div>
}

HelloWorld.propTypes = {
    /**Message to Display */ 
    message: propTypes.string
}
export default HelloWorld;