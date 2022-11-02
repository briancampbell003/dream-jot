const newDreamBtnHandler = (event) => {
    event.preventDefault();
    console.log("new dream button has been pressed!!");
    document.location.replace('/newdream');
  };
  
  document
    .querySelector('.new-dream-btn')
    .addEventListener('click', newDreamBtnHandler)
  
  