const onShowPopUp = (text, isShow) => {
  const popup = document.getElementById("popup");
  popup.innerHTML = "";
  const buttons = document.createElement("div");
  const p = document.createElement("p");
  p.innerHTML = text;
  popup.appendChild(p);

  const yesButton = document.createElement("button");
  const noButton = document.createElement("button");
  buttons.className = "buttons";
  yesButton.onclick = () => onSelect("yes");
  noButton.onclick = () => onSelect("no");
  yesButton.innerHTML = "Yes";
  noButton.innerHTML = "No";

  buttons.appendChild(yesButton);
  buttons.appendChild(noButton);
  popup.appendChild(buttons);

  popup.style.display = isShow ? "flex" : "none";
};
const onSelect = (value) => {
  onShowPopUp();
  const body = document.getElementsByTagName("body")[0];
  const divForShowResponse = document.createElement("div");
  divForShowResponse.id = "response";

  const p = document.createElement("p");
  p.innerHTML = "you click on " + value;
  divForShowResponse.appendChild(p);
  body.appendChild(divForShowResponse);
};
