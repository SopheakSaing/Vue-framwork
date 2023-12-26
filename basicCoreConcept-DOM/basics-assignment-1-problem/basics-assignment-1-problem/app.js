const app = Vue.createApp({
  data() {
    return {
      name: "Sopheak",
      age: 19,
    };
  },
  methods: {
    ageInFiveY() {
      return (inFiveYear = this.age + 5);
    },
    favNum() {
      const rand = Math.random(1, 0);
      return rand;
    },
  },
});
app.mount("#assignment");
