let score0el = document.querySelector('#score--0');
let score1el = document.querySelector('#score--1');
let diceel = document.querySelector('.dice');
let btnroll = document.querySelector('.btn--roll');
let btnhold = document.querySelector('.btn--hold');
let current0el = document.getElementById('current--0');
let current1el = document.getElementById('current--1');
let player0el = document.querySelector('.player--0');
let player1el = document.querySelector('.player--1');
//////////////////////////////////////////////////////////////////////
diceel.classList.add('hidden');
score0el.textContent = 0;
score1el.textContent = 0;
let currentscore = 0;
const scores = [0, 0];
let activeplayer = 0;
let playing = true;
//////////////////////////////////////////////////////////////////////
btnroll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    // console.log(dice)
    diceel.classList.remove('hidden');
    diceel.src = `dice-${dice}.png`;
    if (dice !== 1) {
      //add dice to current score
      currentscore = currentscore + dice;
      document.getElementById(`current--${activeplayer}`).textContent =
        currentscore;
    } else {
      document.getElementById(`current--${activeplayer}`).textContent = 0;
      if (activeplayer === 0) {
        activeplayer = 1;
      } else {
        activeplayer = 0;
      }
      currentscore = 0;
      player0el.classList.toggle('player--active');
      player1el.classList.toggle('player--active');
    }
  }
});

btnhold.addEventListener('click', function () {
  if (playing) {
    scores[activeplayer] += currentscore;
    // score[1] = score[1] + currentscore;
    document.getElementById(`score--${activeplayer}`).textContent =
      scores[activeplayer];
    if (scores[activeplayer] >= 30) {
      playing = false;
      diceel.classList.add('hidden');
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove('player--active');
    } else {
      document.getElementById(`current--${activeplayer}`).textContent = 0;
      if (activeplayer === 0) {
        activeplayer = 1;
      } else {
        activeplayer = 0;
      }
      currentscore = 0;
      player0el.classList.toggle('player--active');
      player1el.classList.toggle('player--active');
    }
  }
});
