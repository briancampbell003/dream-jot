const saveDreamBtnHandler = async (event) => {
    event.preventDefault();
    console.log("save dream button has been pressed!!");
    let today = new Date().toLocaleDateString();

    const newDream = {
      title: "Dream Title",
      content : document.querySelector('#new-dream-content').value.trim(),
      date : today,
      nightmare : document.querySelector('#nightmare-meter').value,
      private : false,
    }


    console.log(document.querySelector('#new-dream-content'));
    console.log(document.querySelector('#nightmare-meter'));
    console.log(newDream);
    
    if (newDream) {
      const response = await fetch('/api/dreams', {
        method: 'POST',
        body: JSON.stringify(newDream),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/mydreams');
      } else {
        alert('Failed to post your new dream.');
      }
    }
  };
  
  document
    .querySelector('.new-dream-form')
    .addEventListener('submit', saveDreamBtnHandler);
  