const deleteDreamBtnHandler = async (event) => {
    event.preventDefault();
    console.log("delete dream button has been pressed!!");
    let dreamId = document.location.pathname.slice(7) ;

    console.log(dreamId);
    if (dreamId) {
        const response = await fetch(`/api/dreams/${dreamId}`, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.ok) {
          document.location.replace('/mydreams');
        } else {
          alert('Failed to delete your new dream.');
        }
      }

};

document
    .querySelector('.delete-dream-btn')
    .addEventListener('click', deleteDreamBtnHandler);
