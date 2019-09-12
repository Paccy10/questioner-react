import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Input from '../common/Input';
import Button from '../common/Button';
import logo from '../../assets/img/logo.png';
import logo1 from '../../assets/img/logo1.png';

class Signup extends Component {
    state = {
        email: '',
        password: ''
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
    };

    render() {
        return (
            <Fragment>
                <div className="login-left">
                    <img src={logo} alt="Questioner Logo" width="100" />
                    <h1>Questioner</h1>
                </div>
                <div className="login-right">
                    <img src={logo1} alt="Questioner Logo" width="50" />
                    <h1>Login</h1>
                    <div className="login-form">
                        <form action="">
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

                            <Button
                                type="submit"
                                value="Login"
                                onClick={this.onSubmit}
                                className="btn btn-primary"
                            />
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

export default Signup;
