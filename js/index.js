const miranha = document.querySelector('.miranha')
const granada = document.querySelector('.granada')

const jump = () => {
  miranha.classList.add('jump');

  setTimeout(() => {
    miranha.classList.remove('jump');
  }, 1000);
}

const loop = setInterval(() => {
  const granadaPosicao = granada.offsetLeft;
  const jumpMiranha = +window.getComputedStyle(miranha).bottom.replace('px', '');
  console.log(jumpMiranha);

  if (granadaPosicao <= 200 > 0 && jumpMiranha < 135) {
    granada.style.animation = 'none';
    granada.style.left = `${granadaPosicao}px`;

    miranha.style.animation = 'none';
    miranha.style.left = `${jumpMiranha}px`;

    clearInterval(loop);
  }
}, 10)

document.addEventListener('keydown', jump);