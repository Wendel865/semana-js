# semana-js
projeto semana js
const mostrarParesAte = (n) => {
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};

mostrarParesAte(10);

const gerarNumeroAleatorio = () => {
  return Math.floor(Math.random() * 10) + 1;
};

const simularAdivinhacao = () => {
  const numeroSecreto = gerarNumeroAleatorio();
  let tentativas = 0;
  let numeroAdivinhado = 0;

  while (numeroAdivinhado !== numeroSecreto) {
    tentativas++;
    numeroAdivinhado = gerarNumeroAleatorio();
    console.log(`Tentativa ${tentativas}: ${numeroAdivinhado}`);
  }

  console.log(`Acertou em ${tentativas} tentativas. O número secreto era ${numeroSecreto}`);
};

simularAdivinhacao();
