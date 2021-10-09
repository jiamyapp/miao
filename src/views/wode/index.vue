<template>
  <div id="main">
    <Header title="我的" />
    <Login/>
    <Footer />
  </div>
</template>
<script>
    import Header from "@/components/Header";
    import Footer from "@/components/Footer";
    import Login from "@/components/Login";
    export default {
        name:"wode",
        components:{
            Header,Footer,Login
        }
    }
</script>
<style scoped>

</style>