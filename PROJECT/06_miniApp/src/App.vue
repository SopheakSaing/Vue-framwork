<script setup>
import NavBar from "@/components/NavBar.vue";
import Hero from "@/components/Hero.vue";
import HomeCard from "@/components/HomeCards.vue";
import JobListings from "@/components/JobListings.vue";
</script>
<template>
  <NavBar/>
  <Hero/>
  <HomeCard/>
  <JobListings :limit="3" :show-button="true"/>
</template>