import React from "react";
import { notification } from "antd-notifications-messages";

const openNotificationWithIcon = (type, msg) => {
  notification({
    type: type,
    message: msg,
    duration: 2000,
  });
};

export { openNotificationWithIcon };
