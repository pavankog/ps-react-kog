import React from 'react';
import propTypes from 'prop-types'
function Label({ required, htmlFor, label }) {

    return (
        <label htmlFor={htmlFor} style={{ display: 'block' }}>
            {label}   {required && <span style={{ color: 'red' }}>*</span>}
        </label>
    )

}

export default Label;
Label.propTypes = {
    /** HTML Id asccociated for input */
    htmlFor: propTypes.string.isRequired,
    /** Label Text */
    label: propTypes.string.isRequired,
    /** Display asterisk after label if true */
    required: propTypes.bool
}