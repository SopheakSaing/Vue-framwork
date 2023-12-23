const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Finish course and learn vue!",
      courseGoalB: "<h2>Master Vue and can apply to real project!</h2>",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const radomNum = Math.random();
      if (radomNum < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal"); //mounted as vue
