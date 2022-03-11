class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');
    this.hidebuttonEl = document.querySelector('#hide-message-button');
    this.mainContainerEl = document.querySelector('#main-container');
    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });

    this.hidebuttonEl.addEventListener('click', () => {
      this.hideMessage();
   });
  }

  displayMessage() {
 const messageEl = document.createElement('div');
 messageEl.setAttribute('id','message');
 messageEl.innerText = 'This is a message displayed by JavaScript';
 this.mainContainerEl.append(messageEl);
};

 hideMessage() {
  const hideEl = document.querySelector('#message');
  hideEl.remove();

 }
};
module.exports = MessageView;