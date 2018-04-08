<template><div>test1{{source}} {{a}}</div></template>
<script>
export default {
    data(){
        return {
            a:this.$route.query.a
        }
    },
    props: {
      source: String
    }
}
</script>
