<template>
  <!-- how could we recieve content from outside? -->
  <div>
    <header v-if="$slots.header"> 
      <!-- if slot header is truethy -->
      <slot name="header">
        <!-- <h2>The default</h2> -->
      </slot>
    </header>
    <slot></slot>
    <!-- slot without the wrapper would be the default slot -->
    <!-- content of the slot would be wrapped inside the template -->
    <!-- but use v-slot to know where the content should be going to -->
  </div>
</template>


<script scoped>
export default {
  mounted() {
    //got called everyday time component being used
    console.log(this.$slot.header);
    // hole info about slot data
  },
};
</script>
<style scoped>
/* change from section to div */
/* section is used and style into different component */
/* sol: create standable component */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>