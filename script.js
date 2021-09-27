const gridSqBtn = document.getElementById('grid-squares');
const gridLnBtn = document.getElementById('grid-lines');
const projClass = document.querySelector('.proj-items-all');

const mode = document.querySelector('.checkbox');
const htmlMode = document.querySelector('.html-mode');

const arrowDown = document.querySelector('.arrowdown');

window.addEventListener('resize', checkScreenWidth);

gridLnBtn.addEventListener('click', linedGrid);
gridSqBtn.addEventListener('click', squaredGrid);

arrowDown.addEventListener('click', pageScroll);

mode.addEventListener('click', modeChange);
mode.checked = false;

checkScreenWidth();

function modeChange() {
  if (mode.checked) {
    console.log(mode.checked);
    htmlMode.classList.add('dark');
  } else {
    console.log(mode.checked);
    htmlMode.classList.remove('dark');
  }
}

function pageScroll() {
  var h = window.innerHeight;
  window.scrollTo(0, h);
}

function checkScreenWidth() {
  var w = window.outerWidth;
  console.log(w);
  if (w >= 1060) {
    gridSqBtn.style.cursor = 'pointer';
    gridLnBtn.style.cursor = 'pointer';
    gridSqBtn.disabled = false;
    gridLnBtn.disabled = false;
  } else {
    gridSqBtn.click();
    gridSqBtn.disabled = true;
    gridLnBtn.disabled = true;

    gridSqBtn.style.cursor = 'not-allowed';
    gridLnBtn.style.cursor = 'not-allowed';
  }
}

function squaredGrid() {
  projClass.classList.add('squares');
  projClass.classList.remove('lines');

  gridSqBtn.style.backgroundColor = 'var(--color-prim2)';
  gridLnBtn.style.backgroundColor = 'var(--color-prim1)';
}

function linedGrid() {
  projClass.classList.remove('squares');
  projClass.classList.add('lines');
  gridSqBtn.style.backgroundColor = 'var(--color-prim1)';
  gridLnBtn.style.backgroundColor = 'var(--color-prim2)';
}
