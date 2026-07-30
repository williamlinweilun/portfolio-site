const cursor = document.querySelector("#cursor-img");

// addEventlistener to listen to cursorEvent => {
//     do something with cursor event
// }

document.addEventListener("mousemove", e => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
})