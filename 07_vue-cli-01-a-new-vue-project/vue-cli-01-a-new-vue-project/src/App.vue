<!-- regular html markup -->
<template>
    <section>
        <h2>My Friends</h2>
        <ul>
            <li></li>
        </ul>
    </section>
</template>
<script>
export default {
    data(){
        return{
            friends:[
                {
                    id: '1',
                    name:"mony",
                    phone:'0110 10101',
                    email:"abc@gmail.com"

                },
                {
                    id: '1',
                    name:"sophie",
                    phone:'0110 100101',
                    email:"sophie@gmail.com"

                }
            ]
        }
    }
}
</script>