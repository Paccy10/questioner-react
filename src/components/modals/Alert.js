import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeAlert } from '../../actions/alert';

export class Alert extends Component {
    onClose = () => {
        const { removeAlert } = this.props;
        removeAlert();
    };

    render() {
        const { alert } = this.props;
        return (
            alert !== undefined &&
            alert !== null &&
            Object.keys(alert).length !== 0 && (
                <div id="alert-modal" className="alert-modal">
                    <div
                        className={`alert-modal-content alert-${alert.alertType}`}
                    >
                        <span className="close" onClick={this.onClose}>
                            &times;
                        </span>
                        <p>{alert.message}</p>
                    </div>
                </div>
            )
        );
    }
}

Alert.propTypes = {
    alert: PropTypes.object,
    removeAlert: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    alert: state.alert
});

export default connect(
    mapStateToProps,
    { removeAlert }
)(Alert);
