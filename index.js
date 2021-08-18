const content = "Welcome, \n I Am \n Frontend Developer :) ";
const textarea = document.querySelector(".typetext");
let i = 0;

let typing = () => {
  let text = content[i++];
  textarea.innerHTML += text === "\n" ? "<br/>" : text;

  if (i > content.length) {
    textarea.textContent = "";
    i = 0;
  }
};

setInterval(typing, 300);
