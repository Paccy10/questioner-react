import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type, value, className, id, onClick }) => (
    <input
        type={type}
        id={id}
        value={value}
        onClick={onClick}
        className={className}
    />
);

Button.propTypes = {
    id: PropTypes.string,
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};

export default Button;
