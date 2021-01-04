import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';

import GoogleLogin from 'react-google-login';

class SocialLogin extends Component {
  render() {
    const responseFacebook = response => {
      console.log(response);
    };

    const responseGoogle = response => {
      sessionStorage.setItem('token', response.accessToken);
      this.props.history.push('/');
    };

    return (
      <div className="SocialLogin">
        <h1>LOGIN WITH FACEBOOK AND GOOGLE</h1>

        <FacebookLogin
          appId="819282478524369" //APP ID IS CREATED YET
          fields="name,email,picture"
          callback={responseFacebook}
        />
        <br />
        <br />

        <GoogleLogin
          clientId="399945929502-ic2ccrao2jgd7apl5kjaimoqhsvh9fl0.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
      </div>
    );
  }
}

export default SocialLogin;
