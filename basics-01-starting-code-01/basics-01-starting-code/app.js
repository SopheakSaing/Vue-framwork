const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Finish the course and can apply to real project!",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const radomNum = Math.random();
      if (radomNum < 0.5) {
        return "Learn Vue";
      } else {
        return "master vue!";
      }
    },
  },
});

app.mount("#user-goal");
