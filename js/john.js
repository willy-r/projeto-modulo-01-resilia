function handleJohnFirstPhaseChoice() {
  const msg =
`O que você deseja fazer?

1. Deixar o Brad entrar com vocês, pois mesmo ele não tendo a fé necessária.
2. Tentar convencer Brad que o melhor que ele pode fazer é não se envolver naquele assunto, e que nada vai acontecer caso ele decida voltar.
  `;
  redirectOnChoice(msg, 'second-phase.html', 'first-gameover.html');
}

function handleJohnSecondPhaseChoice() {
  const msg =
`O que você deseja fazer?

1. Correr desesperadamente em direção à figura de Brad para tentar desarmá-lo.
2. Pedir ajuda à Rosaria, agora que ela está se recompondo, para tentar de alguma forma exorcizar aquele ser.
  `;
  redirectOnChoice(msg, 'second-gameover.html', 'third-phase.html');
}

function handleJohnThirdPhaseChoice() {
  const msg =
`Qual pode ser o nome do demônio em que John pensou?

1. VALAK
2. VAPULA
  `;
  redirectOnChoice(msg, 'final-phase.html', 'third-gameover.html');
}
