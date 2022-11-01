function deleteDream() {
  fetch("/api/dreams")
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    });
}
