const visibleLightMin = 430000000000000;
const visibleLightMax = 770000000000000;
const c = 300000000;

const $body = document.querySelector('body');
const $header = document.querySelector('.header');

const onPlay = () => {
  fetch('/assets/audio.json')
    .then((response) => response.json())
    .then((json) => {
      // Format: [timestamp, [[ampl, freq]]]
      console.log(json);

      // TODO(alecmerdler): Do all the calculations
      json.forEach((elem) => {
        elem[1].map((tuple) => {
          tuple[1]
        })
      });
    })
    .catch((error) => {
      console.error(error);
    });
};

const onStop = () => {

};

document.querySelector('.start-btn').addEventListener('click', (e) => {
  if (e.target.classList.contains('start-btn--hidden')) {
    $header.classList.remove('header--hidden');
    onStop();
  } else {
    $header.classList.add('header--hidden');
    onPlay();
  }
});
