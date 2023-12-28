function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + max);
}
const app = Vue.createApp({
  data() {
    return {
      playerHealthe: 100,
      monsterHelth: 100,
    };
  },
  methods: {
    attackMonster() {
      const attackValue = getRandomValue(5, 12);
      //   this.monsterHelth = this.monsterHelth - attackValue;
      this.monsterHelth -= attackValue;
      this.attackPlayer;
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHealthe -= attackValue;
    },
  },
});
app.mount("#game");
