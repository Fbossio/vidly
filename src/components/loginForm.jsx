import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import Input from "./common/input";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    // Call the server
    console.log("Submitted");
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={data.username}
            label="Username"
            error={errors.username}
            onChange={this.hanldeChange}
          />
          <Input
            name="password"
            value={data.password}
            label="Password"
            error={errors.password}
            onChange={this.hanldeChange}
            type="password"
          />
          {this.renderButton("Loggin")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
