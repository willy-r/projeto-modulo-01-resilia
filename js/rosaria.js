function handleRosariaFirstPhaseChoice() {
  const msg =
`O que você deseja fazer?

1. Não averiguar quem é, até porque independente de quem seja, essa pessoa não sabe onde está se metendo.
2. Ir até o carro ver quem é, apenas para avisá-la do perigo de estar ali.
  `;
  redirectOnChoice(msg, 'second-phase.html', 'first-gameover.html');
}

function handleRosariaSecondPhaseChoice() {
  const msg =
`O que você deseja fazer?

1. Ficar onde você está, tentando distinguir aquelas palavras e tentar conversar com ele dali.
2. Se aproximar do senhor para tentar conversar com ele melhor e perguntar o que aquilo significava.
  `;
  redirectOnChoice(msg, 'second-gameover.html', 'third-phase.html');
}

function handleRosariaThirdPhaseChoice() {
  const msg =
`O que você deseja fazer?

1. Procurar por Brad juntos, pois sabe que a essa altura já pode ser tarde demais e a união faz a força.
2. Se separar e ir procurar pelo Brad, mesmo sabendo que isso é perigoso.
  `;
  redirectOnChoice(msg, 'final-phase.html', 'third-gameover.html');
}
