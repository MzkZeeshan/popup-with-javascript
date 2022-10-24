const onShowPopUp = (text, isShow) => {
  const containerPopup = document.getElementById("popup");
  containerPopup.innerHTML = "";

  const popup = document.createElement("div");
  popup.className = "popupBox";

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
  containerPopup.appendChild(popup);

  containerPopup.style.display = isShow ? "flex" : "none";
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
