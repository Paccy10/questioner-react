import React, { Fragment } from 'react';
import buttonSpinner from '../../assets/img/button_spinner.gif';

const ButtonSpinner = () => {
    return (
        <Fragment>
            <img
                src={buttonSpinner}
                alt="Spinner"
                width="20"
                style={{ verticalAlign: 'middle' }}
            />
        </Fragment>
    );
};

export default ButtonSpinner;
