import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../common/Input';
import logo from '../../assets/img/logo.png';
import logo1 from '../../assets/img/logo1.png';
import { setAlert } from '../../actions/alert';
import { signup } from '../../actions/auth';
import Alert from '../modals/Alert';
import ButtonSpinner from '../common/ButtonSpinner';

export class Signup extends Component {
    state = {
        firstname: '',
        lastname: '',
        othername: '',
        email: '',
        password: '',
        confirmPassword: '',
        loading: false
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/home');
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = async e => {
        e.preventDefault();
        this.setState({ loading: true });
        const {
            firstname,
            lastname,
            othername,
            email,
            password,
            confirmPassword
        } = this.state;
        const { setAlert, signup } = this.props;
        if (password !== confirmPassword) {
            setAlert('Passwords do not match', 'danger');
            this.setState({ loading: false });
        } else {
            await signup({
                firstname,
                lastname,
                othername,
                email,
                password,
                confirmPassword
            });
            this.setState({ loading: false });
        }
    };

    render() {
        const { loading } = this.state;
        return (
            <Fragment>
                <Alert />
                <div className="signup-left">
                    <img src={logo} alt="Questioner Logo" width="100" />
                    <h1>Questioner</h1>
                </div>
                <div className="signup-right">
                    <img
                        className="logo"
                        src={logo1}
                        alt="Questioner Logo"
                        width="50"
                    />
                    <h1>Signup</h1>
                    <div className="signup-form">
                        <form onSubmit={this.onSubmit}>
                            <Input
                                type="text"
                                name="firstname"
                                className="form-control"
                                value={this.state.firstname}
                                placeholder="Fistname"
                                onChange={this.onChange}
                                label="Fistname"
                                required={true}
                            />
                            <Input
                                type="text"
                                name="lastname"
                                className="form-control"
                                value={this.state.lastname}
                                placeholder="Lastname"
                                onChange={this.onChange}
                                label="Lastname"
                                required={true}
                            />

                            <Input
                                type="text"
                                name="othername"
                                className="form-control"
                                value={this.state.othername}
                                placeholder="Othername"
                                onChange={this.onChange}
                                label="Othername"
                                required={false}
                            />

                            <Input
                                type="text"
                                name="email"
                                className="form-control"
                                value={this.state.email}
                                placeholder="E-mail Address"
                                onChange={this.onChange}
                                label="E-mail"
                                required={true}
                            />

                            <Input
                                type="password"
                                name="password"
                                className="form-control"
                                value={this.state.password}
                                placeholder="Password"
                                onChange={this.onChange}
                                label="Password"
                                required={true}
                            />

                            <Input
                                type="password"
                                name="confirmPassword"
                                className="form-control"
                                value={this.state.confirmPassword}
                                placeholder="Re-enter the Password"
                                onChange={this.onChange}
                                label="Confirm Password"
                                required={true}
                            />

                            <button className="btn btn-primary">
                                Register {loading ? <ButtonSpinner /> : ''}
                            </button>
                        </form>
                        <div className="login-link">
                            Already have an account? <Link to="/">Login</Link>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

Signup.propTypes = {
    setAlert: PropTypes.func.isRequired,
    signup: PropTypes.func.isRequired,
    auth: PropTypes.object,
    history: PropTypes.object
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { setAlert, signup }
)(Signup);
