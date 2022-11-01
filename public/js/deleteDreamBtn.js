const deleteDreamBtnHandler = async (event) => {
    event.preventDefault();
    console.log("delete dream button has been pressed!!");

    fetch("/api/dreams/id")
        .then((response) => response.json())
        .then((result) => console.log(result))


};

document
    .querySelector('.delete-dream-button')
    .addEventListener('click', deleteDreamBtnHandler);