import React, { Component } from "react";
import './Social.css'

class Social extends Component {
  render() {
    return (
      <div className="sociaux">
         <a className="fb-ic mr-3" role="button" href="www.facebook.com/gasy-ecocitizen"><i className="fab fa-lg fa-facebook-f blue-text"></i></a>  
         <a className="tw-ic mr-3" role="button" href="www.twitter.com/gasy-ecocitizen"><i className="fab fa-lg fa-twitter cyan-text"></i></a>
         <a className="ins-ic mr-3" role="button" href="www.instagram.com/gasy-ecocitizen"><i className="fab fa-lg fa-instagram white-text"></i></a>
      </div>
    );
  }
  };

  export default Social;