<template>
<learning-resources v-for="res in stroedRes" :key="res.id" :title="res.title" :description="res.description" :link="res.link"></learning-resources>
</template>
<script>
import LearningResource from "./components/learning-resources";
export default{
    components: [
        LearningResource
    ],
    data() {
        return {
            stroedRes: [{
                id: 'official',
                title: 'office guid',
                description: "loremabc",
                link: "https://vuejs.org"
            },
            {
                id: 'google',
                title: 'google',
                description: "loremabcde",
                link: "https://google.com"
            }]
        }
    }
}
</script>