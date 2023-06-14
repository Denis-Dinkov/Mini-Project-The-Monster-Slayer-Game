function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + max;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      loggMessages: [],wwwwwwww
    };
  },
  computed: {
    monsterBarStyle() {
      if (this.monsterHealth <= 0) {
        return { width: "0%" };
      }
      return { width: this.monsterHealth + "%" };
    },
    playerBarHealth() {
      if (this.playerHealth <= 0) {
        return { width: "0%" };
      }
      return { width: this.playerHealth + "%" };
    },
    isThirdAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },
  },
  methods: {
    startNewGame(){
      this.playerHealth = 100,
      this.monsterHealth = 100,
      this.currentRound = 0,
      this.winner = null
    },
    attackMonster() {
      this.currentRound++;
      let attactValue = getRandomValue(5, 12);
      this.monsterHealth -= attactValue;

      this.attackPlayer();
    },
    attackPlayer() {
      let attactValue = getRandomValue(7, 15);
      this.playerHealth -= attactValue;
    },
    specialAttackMonster() {
      this.currentRound++;
      let attackValue = getRandomValue(10, 24);
      this.monsterHealth -= attackValue;

      this.attackPlayer();
    },
    healPlayer() {
      const healValue = getRandomValue(8, 19);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }

      this.currentRound++;

      this.attackPlayer();
    },
    surrender(){
      this.winner = 'monster'
    },
  },
});

app.mount("#game");
