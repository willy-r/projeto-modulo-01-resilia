function handleBradFirstPhaseChoice() {
  const msg =
`O que você deseja fazer?

1. Adentrar o desconhecido pois não gostou do tom que o John Form falou com você e com sua "matadora de fantasmas".
2. Ficar fora da casa guardando a retaguarda.
  `;
  redirectOnChoice(msg, 'second-phase.html', 'first-gameover.html');
}

function handleBradSecondPhaseChoice() {
  const msg =
`O que você deseja fazer?

1. Continuar segurando a matadora de fantasmas e atirar mais uma vez, dessa vez para cima.
2. Guardar a arma no coldre novamente, respeitando o que o John disse, mas simplesmente porque você percebe que tem algo errado com Rosaria e começa a sentir calafrios.
  `;
  redirectOnChoice(msg, 'second-gameover.html', 'third-phase.html');
}

function handleBradThirdPhaseChoice() {
  const msg =
`O que você deseja fazer?

1. Correr para a porta mais próxima de você, mesmo sem saber para onde está indo.
2. Correr para a porta que você acredita ser aquela que você entrou na casa e que está mais distante.
  `;
  redirectOnChoice(msg, 'postlude-phase.html', 'third-gameover.html');
}
