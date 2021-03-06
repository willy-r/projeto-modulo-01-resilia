/*
 * General helper functions that are used in some pages.
 */

const audio = new Audio();

/**
 * Redirects the user to a page, depending on the response by the user.
 * 
 * The firstPage param will redirect the user to a page if the response is 1.
 * The secondPage param will redirect the user to a page if the response is 2.
 * 
 * @param {string} message The message to display on the prompt.
 * @param {string} firstPage A relative path to a page.
 * @param {string} secondPage A relative path to a page.
 */
function redirectOnChoice(message, firstPage, secondPage) {
  let response;

  do {
    response = Number(prompt(message));

    if (response === 1) {
      redirect(firstPage);
    } else if (response === 2) {
      redirect(secondPage);
    }
  } while (![1, 2].includes(response));
}

/**
 * Redirects the user to a page, after a predefined time in miliseconds.
 * 
 * @param {number} time Time in miliseconds to redirects the user.
 * @param {string} page A relative path to a page.
 */
function redirectAfterTimeout(time, page) {
  setTimeout(() => redirect(page), time);
}

/**
 * Redirects the user to a page.
 * 
 * @param {string} page A relative path to a page.
 */
function redirect(page) {
  location.replace(page);
}

/**
 * Plays an audio on the page.
 * 
 * @param {string} audioPath A relative path to the audio path, related to the HTML page that's calling the function.
 * @param {number} volume A number between 0 and 1, where 0 means muted and 1 completly audible (default: 0.5).
 * @param {boolean} loop A boolean that specifies if the audio should restart when it ends (default: false).
 */
function playAudio(audioPath, volume=0.5, loop=false) {
  audio.src = audioPath;

  audio.addEventListener('canplaythrough', () => {
    audio.volume = volume;
    audio.loop = loop;
    audio.play();
  });
}

/** Pause and unpause a audio. */
function toggleAudio() {
  audio.paused ? audio.play() : audio.pause();
}

/** Toggles the audio button.  */
function toggleAudioButtonIcon() {
  const button = document.getElementById('btn-audio');
  const audioIsPlaying = button.getAttribute('data-audio') === 'on';

  if (audioIsPlaying) {
    button.innerHTML = '<span class="fas fa-volume-mute"></span>';
    button.setAttribute('data-audio', 'off');
  } else {
    button.innerHTML = '<span class="fas fa-volume-up"></span>';
    button.setAttribute('data-audio', 'on');
  }
}

/** Creates an fade in effect in the body content. */
function bodyContentFadeIn() {
  document.body.classList.add('fade-in');
}

/** Displays the nun gif on the credits page. */
function displayNunImage() {
  const divCredits = document.querySelector('.text-wrapper#nun-img');

  divCredits.innerHTML = '<img src="../assets/images/the-nun-gif.gif" alt="Gif da cena de Invoca????o do Mal 2 da Freira">';
  divCredits.style.width = '100%';
}
