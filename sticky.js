const btn = document.querySelector("button");
const ta = document.querySelector("textarea");
const Bg = document.querySelector("#bgcolor");
const txt = document.querySelector("#textcolor");
const rightone = document.querySelector(".right_container");

btn.addEventListener("click", (e) => {
  if (ta.value == "") {
    alert("Plz enter note");
  } else {
    let anotherdiv = document.createElement("div");
    anotherdiv.classList.add("anotherdiv");

    let sticky = document.createElement("p");
    sticky.innerText = `${ta.value}`;

    rightone.appendChild(anotherdiv);

    anotherdiv.appendChild(sticky);

    ta.value = "";

    let cross = document.createElement("span");
    cross.innerHTML = "x";
    cross.classList.add("close");
    anotherdiv.append(cross);

    cross.addEventListener("click", RemoveStickyNotes);

    anotherdiv.style.backgroundColor = Bg.value;
    anotherdiv.style.color = txt.value;

    document.querySelector(".para").innerText =""

  }

});

function RemoveStickyNotes(e) {
    e.target.parentElement.remove();
  }



