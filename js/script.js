/*
 * General helper functions that are used in some pages.
 */

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
  while (true) {
    const response = Number(prompt(message));

    if ([1, 2].includes(response)) {
      if (response === 1) {
        redirect(firstPage);
      } else {
        redirect(secondPage);
      }

      break;
    }
  }
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
 */
function playAudio(audioPath) {
  const audio = new Audio(audioPath);

  audio.addEventListener('canplaythrough', () => {
    audio.volume = 0.5;
    console.log(audio.volume);
    audio.play();
  });
}

/** Creates an fade in effect in the body content. */
function bodyContentFadeIn() {
  document.body.classList.add('fade-in');
}

function displayNunImage() {
  const divCredits = document.querySelector('#nun-img');

  divCredits.innerHTML = '<img src="../assets/images/the-nun.jpg" alt="Imagem da Freira">';
}
