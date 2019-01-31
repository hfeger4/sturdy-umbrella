import React from 'react';
import {connect} from 'react-redux';
import {signIn, signOut} from '../actions';

class GoogleAuth extends React.Component{
  componentDidMount(){
    window.gapi.load('client:auth2', ()=>{
      window.gapi.client.init({
        clientId: '876870281865-9s7um6e3d5rfl5j6p00op5v717h7mmuv.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }
  onAuthChange = (isSignedIn) => {
    if(isSignedIn === true){
      this.props.signIn(this.auth.currentUser.get().getId());
    }else{
      this.props.signOut();
    }
  }
  signOutButton = () => {
    window.gapi.auth2.getAuthInstance().signOut();
  }
  signInButton = () => {
    window.gapi.auth2.getAuthInstance().signIn();
  }
  renderAuthButton(){
    if(this.props.isSignedIn === null){
      return null;
    }else if(this.props.isSignedIn){
      return <button className="ui red google button"
              onClick={this.signOutButton}>
              <i className="google icon"/>
                Sign Out
              </button>;
    }else{
      return <button className="ui blue google button"
              onClick={this.signInButton}>
              <i className="google icon"/>
                Sign In With Google
              </button>;
    }
  }
  render(){
    return(
      <div>
      {this.renderAuthButton()}
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return { isSignedIn: state.auth.isSignedIn}
}

export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth);
