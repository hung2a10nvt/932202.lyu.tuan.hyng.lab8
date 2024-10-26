function Add1() {
  const content = document.getElementById("content");

  const newBox = document.createElement("div");
  newBox.className = "box";
  newBox.innerHTML = `
      <input type="text" class="input1" id="input1" />
        <input type="text" class="input2" id="input2" />
        <button class="buttonUp" onclick="Up1(this)">↑</button>
        <button class="buttonDown" onclick="Down1(this)">↓</button>
        <button class="buttonDel" onclick="Del1(this)">x</button>
    `;

  content.insertBefore(newBox, document.getElementById("buttonAdd"));
}

function Del1(button) {
  button.parentElement.remove();
}

function Up1(button) {
  const box = button.parentElement;
  const prevBox = box.previousElementSibling;
  if (prevBox && prevBox.classList.contains("box")) {
    box.parentNode.insertBefore(box, prevBox);
  }
}

function Down1(button) {
  const box = button.parentElement;
  const nextBox = box.nextElementSibling;
  if (nextBox && nextBox.classList.contains("box")) {
    box.parentNode.insertBefore(nextBox, box);
  }
}

function Save1() {
  const output = document.getElementById("output");
  const keys = document.querySelectorAll(".input1");
  const values = document.querySelectorAll(".input2");

  a = [];
  for (var i = 0; i < keys.length; i++) {
    a.push(keys[i].value + ":" + values[i].value);
  }
  console.log(JSON.stringify(a));
  a = JSON.stringify(a);
  a = "{" + a.slice(1, a.length - 1) + "}";
  output.innerHTML = a;
}
