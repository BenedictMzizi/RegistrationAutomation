const arrowDisplay = document.getElementById('arrowDisplay');
const arrowSets = [
  { color: 'blue', arrows: ['➡️', '➡️', '➡️', '➡️', '➡️'], correct: 'ArrowRight' },
  { color: 'red', arrows: ['⬅️', '⬅️', '➡️', '⬅️', '⬅️'], correct: 'ArrowLeft' },
];

let current = 0;
function displaySet(index) {
  arrowDisplay.textContent = arrowSets[index].arrows.join(' ');
  current = index;
}
displaySet(current);

document.addEventListener('keydown', (e) => {
  if (e.key === arrowSets[current].correct) {
    alert('✅ Correct!');
  } else {
    alert('❌ Wrong! Try again.');
  }
  current = (current + 1) % arrowSets.length;
  displaySet(current);
});
