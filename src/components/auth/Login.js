import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../common/Input';
import logo from '../../assets/img/logo.png';
import logo1 from '../../assets/img/logo1.png';
import Alert from '../modals/Alert';
import { login } from '../../actions/auth';
import { setAlert } from '../../actions/alert';
import ButtonSpinner from '../common/ButtonSpinner';

export class Login extends Component {
    state = {
        email: '',
        password: '',
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
        const { email, password } = this.state;
        const { login } = this.props;
        await login({
            email,
            password
        });
        this.setState({ loading: false });
    };

    render() {
        const { loading } = this.state;
        return (
            <Fragment>
                <Alert />
                <div className="login-left">
                    <img src={logo} alt="Questioner Logo" width="100" />
                    <h1>Questioner</h1>
                </div>
                <div className="login-right">
                    <img
                        className="logo"
                        src={logo1}
                        alt="Questioner Logo"
                        width="50"
                    />
                    <h1>Login</h1>
                    <div className="login-form">
                        <form onSubmit={this.onSubmit}>
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

                            <button className="btn btn-primary">
                                Login {loading ? <ButtonSpinner /> : ''}
                            </button>
                        </form>
                        <div className="signup-link">
                            Don't have an account? <Link to="/">Register</Link>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

Login.propTypes = {
    setAlert: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
    auth: PropTypes.object,
    history: PropTypes.object
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { setAlert, login }
)(Login);
