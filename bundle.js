(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // messageView.js
  var require_messageView = __commonJS({
    "messageView.js"(exports, module) {
      var MessageView2 = class {
        constructor() {
          this.buttonEl = document.querySelector("#show-message-button");
          this.hidebuttonEl = document.querySelector("#hide-message-button");
          this.mainContainerEl = document.querySelector("#main-container");
          this.buttonEl.addEventListener("click", () => {
            this.displayMessage();
          });
          this.hidebuttonEl.addEventListener("click", () => {
            this.hideMessage();
          });
        }
        displayMessage() {
          const messageEl = document.createElement("div");
          messageEl.setAttribute("id", "message");
          messageEl.innerText = "This is a message displayed by JavaScript";
          this.mainContainerEl.append(messageEl);
        }
        hideMessage() {
          const hideEl = document.querySelector("#message");
          hideEl.remove();
        }
      };
      module.exports = MessageView2;
    }
  });

  // index.js
  var MessageView = require_messageView();
  var view = new MessageView();
})();
