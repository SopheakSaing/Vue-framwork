<script setup>
  import JobListing from '@/components/JobListing.vue'
  import { ref, defineProps, onMounted } from 'vue';
  import axios from 'axios';

  defineProps({
    limit: Number,
    showButton: {
      type: Boolean,
      default: false
    }
  })
  const jobs = ref([]);

  onMounted(async () => {
    try {
      const res = await axios.get('https://localhost:8081/jobs');
      jobs.value = res.data;
    } catch (e) {
      console.e('err fetching jobs');
    }
  })
</script>

<template>
  <section class="bg-blue-50 px-4 py-10">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Brows Jobs
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <JobListing v-for="job in jobs.slice(0, limit || jobs.length)"
          :key="job.id"
          :job="job"/>
      </div>
  </section>

  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
    <router-link
        to="/jobs"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
    >View All Jobs</router-link
    >
  </section>
</template>

<style scoped>

</style>
