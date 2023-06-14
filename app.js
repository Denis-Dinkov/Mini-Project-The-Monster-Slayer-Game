function damageCalc(min,max) {
  return Math.floor(Math.random() * (max-min)) + max;
}

const app = Vue.createApp({
  data(){
    return{ 
      playerHealth: 100,
      monsterHealth: 100,
    }
  },
  computed: {
    monsterBarStyle(){
      return {width: this.monsterHealth + '%'}
    },
    playerBarHealth(){
      return {width: this.playerHealth + '%'}

    }
  },

  methods: {
    attackMonster(){
      let attactValue = damageCalc(5,12);
      this.monsterHealth -= attactValue
      
      this.attackPlayer()
    },
    attackPlayer(){
      let attactValue = damageCalc(7,15);
      this.playerHealth -= attactValue;
    },
  }
});

app.mount('#game')