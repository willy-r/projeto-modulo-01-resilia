/*
 * General scripts
 */

// An example function to handle the choice on the Brad's first phase.
function handleChoice() {
  const msg =
`O que você deseja fazer?
\t1. Adentrar o desconhecido pois não gostou do tom que o John Form falou com você e com sua "matadora de fantasmas".
\t2. Ficar fora da casa guardando a retaguarda.
  `;
  redirect(msg, 'second-phase.html', 'first-gameover.html');
}

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
function redirect(message, firstPage, secondPage) {
  while (true) {
    const response = Number(prompt(message));

    if ([1, 2].includes(response)) {
      if (response === 1) {
        location.replace(firstPage);
      } else {
        location.replace(secondPage);
      }

      break;
    }
  }
}

/**
 * Plays an audio on the page.
 * 
 * @param {string} audioPath A relative path to the audio path, related to the HTML page that's calling the function.
 */
function playAudio(audioPath) {
  const audio = new Audio(audioPath);

  audio.addEventListener('canplaythrough', () => {
    audio.volume = 0.7;
    console.log(audio.volume);
    audio.play();
  });
}
