import React from "react";
import MessengerCustomerChat from "react-messenger-customer-chat";

const MessengerChat = () => {
  return (
    <div className="w-12 h-12">
      <MessengerCustomerChat
        pageId="172994256569099"
        appId={process.env.REACT_APP_FB_APP_ID}
      />
    </div>
  );
};

export default MessengerChat;
