import React from "react";
import FacebookLogin from "react-facebook-login";
import { GoogleLogin } from "react-google-login";
import authActions from "../../redux/actions/auth.actions";
import { useDispatch } from "react-redux";

const SocialMediaPanel = () => {
  const dispatch = useDispatch();
  const FB_APP_ID = process.env.REACT_APP_FB_APP_ID;
  const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  return (
    <div className="flex items-center justify-around w-full">
      <FacebookLogin
        className="w-16"
        appId={FB_APP_ID}
        icon="fa-facebook"
        fields="name,email,picture"
        cssClass="w-1/2 w-full flex items-center fb-button text-lg border-none outline-none hover:bg-blue-600 text-white focus:outline-none focus:ring rounded px-3 py-1"
        textButton="Facebook"
        callback={(u) => dispatch(authActions.loginFacebook(u))}
        onFailure={() => console.log("Facebook Login Failure")}
      />
      <GoogleLogin
        clientId={GOOGLE_CLIENT_ID}
        buttonText="Google"
        className="flex items-center google-button text-lg border-none outline-none hover:bg-green-400  focus:outline-none focus:ring rounded px-3 py-1"
        onSuccess={(u) => dispatch(authActions.loginGoogle(u))}
        onFailure={() => console.log("Google Login Failure")}
      />
    </div>
  );
};

export default SocialMediaPanel;
