import React from "react";
import MessengerCustomerChat from "react-messenger-customer-chat";

const MessengerChat = () => {
  return (
    <div>
      <MessengerCustomerChat
        pageId="172994256569099"
        appId={process.env.REACT_APP_FB_APP_ID}
      />
      lalal
    </div>
  );
};

export default MessengerChat;
