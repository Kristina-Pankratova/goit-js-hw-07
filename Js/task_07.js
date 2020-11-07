const fontSizeRangeEl = document.querySelector("#font-size-control");
const spanTextEl = document.querySelector("#text");

fontSizeRangeEl.addEventListener("input", fontSizeChange);

function fontSizeChange() {
  console.log(fontSizeRangeEl.value);
  spanTextEl.style.fontSize = `${fontSizeRangeEl.value}px`;
};
