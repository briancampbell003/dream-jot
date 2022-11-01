const deleteDream = async () => {
  const getId = document.location.pathname.replace("/dream/", "");
  const info = await fetch(`/api/dreams/${getId}`, {
    method: "DELETE",
  });
  const json = await info.json();
};

const delBtn = document.querySelector(".delete-dream-btn");
delBtn.addEventListener("click", async () => {
  await deleteDream();
  document.location = "/mydreams";
});
