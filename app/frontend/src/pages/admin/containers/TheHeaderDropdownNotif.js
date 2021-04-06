import React from "react";
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CHeaderNavLink,
  CDropdownToggle,
  CProgress,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { useSelector } from "react-redux";

const TheHeaderDropdownNotif = () => {
  const messages = useSelector((state) => state.message.messages);
  const newMessages = messages.filter((m) => !m.isRead).length;
  return (
    <CDropdown inNav className="c-header-nav-item mx-2">
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <i class="far fa-envelope fa-2x"></i>
        <CBadge
          shape="pill"
          className={newMessages ? "animate-pulse" : ""}
          color="danger"
        >
          {newMessages}
        </CBadge>
      </CDropdownToggle>
      <CDropdownMenu placement="bottom-end" className="pt-0">
        <CDropdownItem header tag="div" className="text-center" color="light">
          <strong>You have {newMessages} message(s)</strong>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-user-follow" className="mr-2 text-success" />
          <CHeaderNavLink to="/messages">View messages</CHeaderNavLink>
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default TheHeaderDropdownNotif;
