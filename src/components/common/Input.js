import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Input = ({
    type,
    name,
    id,
    placeholder,
    className,
    value,
    onChange,
    label,
    required,
}) => (
    <Fragment>
        <label htmlFor={name} className="input-label">
            {label} <span>{required === true ? '*' : ''}</span>
        </label>
        <input
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            className={className}
            value={value}
            onChange={onChange}
            required={required}
        />
    </Fragment>
);

Input.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string,
    required: PropTypes.bool.isRequired,
};

export default Input;
