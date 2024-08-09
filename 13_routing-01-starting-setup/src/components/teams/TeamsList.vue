<template>
  <ul>
    <teams-item
      v-for="team in teams"
      :key="team.id"
      :name="team.name"
      :id="team.id"
      :member-count="team.members.length"
    ></teams-item>
    <router-link to="/teams/t2">Go to Team 2</router-link>
  </ul>
</template>

<script>
import TeamsItem from './TeamsItem.vue';

export default {
  components: {
    TeamsItem,
  },
  inject: ['teams'],
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 40rem;
  padding: 0;
}
</style>