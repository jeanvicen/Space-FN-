/* ============================================================
   SPACEFN — PAINEL DE CONTROLE (admin.config.js)
   ============================================================
   ESTE É O ÚNICO ARQUIVO QUE VOCÊ PRECISA MEXER.
   Não precisa entender programação pra editar aqui — só siga
   os comentários e troque os valores.

   IMPORTANTE: depois de editar, salve o arquivo e suba pro
   GitHub. O jogo só vai pegar a mudança na próxima vez que o
   jogador abrir o app (não é em tempo real — ver explicação
   completa que te dei na conversa).
   ============================================================ */

const ADMIN_CONFIG = {

  /* ----------------------------------------------------------
     1. CÓDIGOS DE RESGATE
     Jogador digita o código na tela de Eventos e recebe o prêmio.
     Cada código só pode ser usado 1 vez por jogador (controlado
     automaticamente, você não precisa se preocupar com isso).

     Pra CRIAR um código novo: copie um bloco { } e cole abaixo,
     mude o "codigo" pro texto que quiser (ex: "NATAL2026"),
     e defina os prêmios.

     Pra DESATIVAR um código sem apagar: mude "ativo" para false.

     "validoAte": data limite no formato "AAAA-MM-DD". Depois
     dessa data o código para de funcionar sozinho. Se quiser
     que nunca expire, deixe null.
     ---------------------------------------------------------- */
  codigos: [
    {
      codigo: "BEMVINDO",
      ativo: true,
      validoAte: null,
      recompensa: { moedas: 500, rubis: 5 }
    },
    {
      codigo: "SPACEFN100K",
      ativo: false,
      validoAte: "2026-12-31",
      recompensa: { moedas: 2000, rubis: 20 }
    }
  ],

  /* ----------------------------------------------------------
     2. MENSAGEM GLOBAL
     Aparece como um aviso na tela pra todo mundo que abrir o jogo.
     Use pra avisos, promoções, "servidor vai cair", etc.

     "ativa": true mostra a mensagem, false esconde.
     "id": TROQUE esse número toda vez que escrever uma mensagem
     nova (ex: de 1 pra 2). Isso é o que faz o aviso aparecer de
     novo pra quem já tinha fechado a mensagem anterior.
     ---------------------------------------------------------- */
  mensagemGlobal: {
    ativa: true,
    id: 1,
    titulo: "BEM-VINDO AO EARLY ACCESS",
    texto: "O jogo está em desenvolvimento ativo. Use o código BEMVINDO e aproveite!"
  },

  /* ----------------------------------------------------------
     3. PRÊMIO DIÁRIO (login diário)
     Jogador ganha isso automaticamente só por abrir o jogo no dia.
     Um prêmio por linha = um dia do ciclo. Depois do último dia,
     volta pro dia 1 de novo (ciclo se repete).

     Regra que você pediu: rubi é raro, moeda é o normal.
     Ajuste os valores como quiser, mas mantenha esse espírito
     pra não inflacionar rubi de graça.
     ---------------------------------------------------------- */
  premioDiario: [
    { dia: 1,  moedas: 100, rubis: 0 },
    { dia: 2,  moedas: 120, rubis: 0 },
    { dia: 3,  moedas: 150, rubis: 1 },
    { dia: 4,  moedas: 150, rubis: 0 },
    { dia: 5,  moedas: 200, rubis: 1 },
    { dia: 6,  moedas: 220, rubis: 0 },
    { dia: 7,  moedas: 300, rubis: 3 },
    { dia: 8,  moedas: 150, rubis: 0 },
    { dia: 9,  moedas: 150, rubis: 1 },
    { dia: 10, moedas: 200, rubis: 0 },
    { dia: 11, moedas: 200, rubis: 1 },
    { dia: 12, moedas: 250, rubis: 0 },
    { dia: 13, moedas: 250, rubis: 1 },
    { dia: 14, moedas: 400, rubis: 5 }
  ],

  /* ----------------------------------------------------------
     4. ROLETA DE PRÊMIOS
     "giroPorDia": quantas vezes o jogador pode girar por dia
     de graça (você pediu 3).

     Cada fatia da roleta é um prêmio. "peso" controla a chance:
     quanto MAIOR o peso, MAIS fácil de cair ali. Rubi deve ter
     peso baixo pra ser raro de verdade.
     ---------------------------------------------------------- */
  roleta: {
    giroPorDia: 3,
    fatias: [
      { label: "50 Moedas",  moedas: 50,  rubis: 0, peso: 30 },
      { label: "100 Moedas", moedas: 100, rubis: 0, peso: 25 },
      { label: "200 Moedas", moedas: 200, rubis: 0, peso: 18 },
      { label: "1 Rubi",     moedas: 0,   rubis: 1, peso: 12 },
      { label: "400 Moedas", moedas: 400, rubis: 0, peso: 8  },
      { label: "3 Rubis",    moedas: 0,   rubis: 3, peso: 4  },
      { label: "800 Moedas", moedas: 800, rubis: 0, peso: 2  },
      { label: "10 Rubis",   moedas: 0,   rubis: 10, peso: 1 }
    ]
  },

  /* ----------------------------------------------------------
     5. NAVE LENDÁRIA ROTATIVA
     A cada 1 hora, uma nave lendária diferente fica disponível
     pra comprar só com rubis. Você não precisa mexer aqui toda
     hora — o jogo escolhe sozinho da lista abaixo. Você só
     controla QUAIS naves podem entrar nesse sorteio e o preço.
     (Lista de naves é definida em shop.js — aqui só o preço-base
     em rubis das lendárias e a rotação.)
     ---------------------------------------------------------- */
  lendarias: {
    rotacaoHoras: 1,
    precoRubis: 150
  },

  /* ----------------------------------------------------------
     6. CRÉDITOS (tela de Configurações)
     ---------------------------------------------------------- */
  creditos: {
    estudio: "Klipza Studio",
    instagram: "@0neajx"
  }

};
