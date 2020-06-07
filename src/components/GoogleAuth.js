import React from 'react';
import {connect} from 'react-redux';

import {signIn, signOut} from '../actions';

class GoogleAuth extends React.Component{
    state={
        isSignedIn: null
    }
    componentDidMount(){
        window.gapi.load("client:auth2", ()=>{
            window.gapi.client.init({
                clientId:"736427284234-479n9fs2g8jmnk14ll8j32pevqjr55j7.apps.googleusercontent.com",
                scope: "email"
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChanged(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChanged);
            })
        });
    }

    onAuthChanged = (isSignedIn) =>{
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId())
        }else{
            this.props.signOut()
        }
    }

    onSignInClick = ()=>{
        this.auth.signIn();
    }

    onSignOutClick = ()=>{
        this.auth.signOut();
    }

    renderAuthButton(){
        if(this.props.isSignedIn === null){
            return null;
        }else if(this.props.isSignedIn){
            return <button
                onClick={this.onSignOutClick}
                className="ui red google button">
                <i className="google icon">Sign Out </i>
            </button>
        }
        return (
            <button
                onClick={this.onSignInClick}
                className="ui red google button">
                <i className="google icon">Sign In With Google</i>
            </button>
        );
    }

    render(){
        return this.renderAuthButton();
    }
}

const mapStateToProps= (state)=>{
    return {isSignedIn: state.auth.isSignedIn};
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);