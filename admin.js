/* ============================================================
   SPACEFN — ARQUIVO DE CONTROLE (Klipza Studio)
   ============================================================
   Este é o arquivo que você edita para atualizar o jogo aos
   poucos, sem mexer no código principal. Ele controla:

     - Códigos promocionais
     - Mensagem oficial do desenvolvedor (aba "Mais")
     - Eventos: Roleta Diária e Baú Diário (recompensas e tempo
       de espera entre usos)
     - Config global (textos e valores gerais do jogo)

   As NAVES não ficam aqui — elas são fixas no próprio jogo e
   não precisam ser mexidas.

   Depois de editar, salve e suba este arquivo (admin.js) na raiz
   do seu repositório, no mesmo nível do index.html. O jogo carrega
   ele automaticamente via <script src="/admin.js"></script> ANTES
   do script principal, então não precisa mexer em mais nada.

   Não precisa saber programar: só edite os valores entre aspas
   e números abaixo, respeitando vírgulas e chaves { }.
   ============================================================ */

window.ADMIN_CONFIG = {

  /* ----------------------------------------------------------
     CÓDIGOS PROMOCIONAIS
     ----------------------------------------------------------
     Chave = o código que o jogador digita (sempre em MAIÚSCULO).
     type: 'reward' (dá moedas/diamantes) ou 'ship' (dá uma nave
           já existente no jogo — use o id da nave, ex: 'fantasma')
     msg: mensagem mostrada quando o código é resgatado com sucesso

     Para adicionar um código novo, copie um bloco inteiro (do
     nome até a vírgula final) e cole logo abaixo, mudando o nome
     do código e os valores.
  ---------------------------------------------------------- */
  promoCodes: {
    KLIPZA2026: {
      type: 'reward',
      coins: 1000,
      gems: 50,
      msg: 'Código Klipza resgatado! +1000 Moedas e +50 Diamantes.'
    },
    BEMVINDO: {
      type: 'reward',
      coins: 300,
      gems: 0,
      msg: 'Bem-vindo ao SpaceFN! +300 Moedas.'
    }
  },

  /* ----------------------------------------------------------
     EVENTO: ROLETA DIÁRIA
     ----------------------------------------------------------
     cooldownHours: horas de espera entre um giro e outro
     winCoins / winGems: quanto o jogador ganha a cada giro
  ---------------------------------------------------------- */
  wheel: {
    cooldownHours: 24,
    winCoins: 500,
    winGems: 20
  },

  /* ----------------------------------------------------------
     EVENTO: BAÚ DIÁRIO
     ----------------------------------------------------------
     cooldownHours: horas de espera entre uma abertura e outra
     coins / gems: quanto o jogador ganha a cada abertura
  ---------------------------------------------------------- */
  chest: {
    cooldownHours: 24,
    coins: 300,
    gems: 10
  },

  /* ----------------------------------------------------------
     MENSAGEM OFICIAL DO DESENVOLVEDOR
     ----------------------------------------------------------
     Aparece na aba "Mais" > Mensagens. Use para avisar sobre
     atualizações, eventos, manutenções etc.
  ---------------------------------------------------------- */
  devMessage: {
    author: 'Klipza Studio (Dev)',
    badge: 'Anúncio Oficial',
    text: 'Bem-vindo ao SpaceFN! Novos eventos e códigos chegando em breve. Bom jogo, piloto! 🚀'
  }

};
