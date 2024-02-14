<template>
    <section class="score"> Humano <span>{{ this.humanPoints }}</span> x <span>{{ this.pcPoints }}</span> Computador </section>

</template>

<script>
    export default{
        props: ['humanPoints', 'pcPoints']
    }
</script>

<style lang="scss">
    
    section.score{
        border-bottom: 1px solid black;
        padding: 24px;
        font-size: 18px;

        span{
            padding: 8px;
            font-weight: bold;
            border: 1px solid black;
        }
    }


</style>