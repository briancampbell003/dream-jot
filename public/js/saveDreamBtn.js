const saveDreamBtnHandler = async (event) => {
    event.preventDefault();
    console.log("save dream button has been pressed!!");
    let today = new Date().toLocaleDateString();
    let tagArray = [
      document.querySelector('#pleasant-tag').checked,
      document.querySelector('#adventure-tag').checked,
      document.querySelector('#spooky-tag').checked,
      document.querySelector('#nostalgic-tag').checked,
      document.querySelector('#upsetting-tag').checked,
      document.querySelector('#inspiring-tag').checked,
      document.querySelector('#intense-tag').checked,
      document.querySelector('#feverish-tag').checked,
      document.querySelector('#bizarre-tag').checked,
    ];
    let tag = tagArray.toString();

    const newDream = {
      title: document.querySelector('#new-dream-title').value.trim(),
      content : document.querySelector('#new-dream-content').value.trim(),
      date : today,
      tag: tag,
      private : document.querySelector('#private-check').checked,
      lucid: document.querySelector('#lucid-check').checked,
      nightmare : document.querySelector('#nightmare-meter').value,
    }

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
  