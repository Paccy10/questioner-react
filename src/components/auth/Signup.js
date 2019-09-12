import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Input from '../common/Input';
import Button from '../common/Button';
import logo from '../../assets/img/logo.png';
import logo1 from '../../assets/img/logo1.png';

class Signup extends Component {
    state = {
        firstname: '',
        lastname: '',
        othername: '',
        email: '',
        password: '',
        confirmPassword: ''
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
                <div className="signup-left">
                    <img src={logo} alt="Questioner Logo" width="100" />
                    <h1>Questioner</h1>
                </div>
                <div className="signup-right">
                    <img src={logo1} alt="Questioner Logo" width="50" />
                    <h1>Signup</h1>
                    <div className="signup-form">
                        <form action="">
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

                            <Button
                                type="submit"
                                value="Register"
                                onClick={this.onSubmit}
                                className="btn btn-primary"
                            />
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

export default Signup;
