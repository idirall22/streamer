import React from 'react';

class GoogleAuth extends React.Component{
    componentDidMount(){
        window.gapi.load("client:auth2");
        window.gapi.init({
            clientId:"736427284234-479n9fs2g8jmnk14ll8j32pevqjr55j7.apps.googleusercontent.com",
            scope: "email"
        })
    }

    render(){
        return <div>Google</div>
    }
}

export default GoogleAuth;