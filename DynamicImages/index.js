let imageFiles = [
  { name: "images/art.jpg", description: "This is art" },
  { name: "images/bridge.jpg", description: "This is a bridge.nice." },
  { name: "images/buff bros.jpg", description: "buff bros dancing" },
  { name: "images/cat,jpg", description: "cat on a stroll" },
  { name: "images/walking.jpg", description: "two people walking" },
];
const categorySelectorEl = document.getElementById("categorySelector");
function imageDropDown() {
  for (let i = 0; i < imageFiles.length; i++) {
    let optionEl = document.createElement("option");
    const image = imageFiles[i];
    optionEl.textContent = image.description;
    optionEl.value = image.name;
    categorySelectorEl.appendChild(optionEl);
  }
}

imageDropDown();
//------------------------------------------------------------------
let addBtnEl = document.getElementById("addBtn");
addBtnEl.onclick = addBtnClickedAddImage;

function addBtnClickedAddImage() {
  //console.log(`click`);
  let selectedValue = categorySelectorEl.value;
  let selectedImage = imageFiles.length;
  for (let i = 0; i < selectedImage; i++) {
    console.log(imageFiles[i].categorySelectorEl);
  }
}
const locationDiv = document.getElementById("locationDiv");
locationDiv.appendChild(img);
