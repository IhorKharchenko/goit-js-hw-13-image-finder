import "@pnotify/mobile/dist/PNotifyMobile.css";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import "material-design-icons/iconfont/material-icons.css";
import "@pnotify/core/dist/Material.css";

import { defaults } from "@pnotify/core";

defaults.delay = 2000;

const { alert,  success, error } = require("@pnotify/core");

defaults.styling = "material";
defaults.icons = "material";

function emptyNotification() {
  alert("Entry some word");
}

function errorNotification() {
  error("No matches");
}

function succsessNotification() {
  success("You got it");
}

export default {
  succsessNotification,
  errorNotification,
  emptyNotification,
};
