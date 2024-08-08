let costumCursor = document.querySelector(".costum-cursor");
window.addEventListener("mousemove", (e) => {
    costumCursor.style.left = `${e.clientX - 100}px`;
    costumCursor.style.top = `${e.clientY - 100}px`;
});
