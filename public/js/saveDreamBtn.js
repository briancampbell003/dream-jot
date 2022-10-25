const saveDreamBtnHandler = async (event) => {
    event.preventDefault();
    console.log("save dream button has been pressed!!");
    let today = new Date().toLocaleDateString();
    const newDream = {
      title: ,
      content : document.querySelector('#new-dream-content').value.trim(),
      date : today,
      user_id: ,
      tag: ,
      lucid: ,
    }
      


    console.log(newDream);
    if (newDream) {
      const response = await fetch('/api/dreams', {
        method: 'POST',
        body: JSON.stringify(newDream),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        console.log("JS COMMENT RESPONSE OKAYYYYYYYYYYYYYYYY");
        document.location.replace('/mydreams');
      } else {
        alert('Failed to post your new dream.');
      }
    }
  };
  
  document
    .querySelector('.new-dream-form')
    .addEventListener('submit', saveDreamBtnHandler);
  