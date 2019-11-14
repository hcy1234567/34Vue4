<template>
    <div class="demo1">
        <div id="nav">
            <router-link to="/login">登录</router-link>  |
            <router-link to="/register">注册</router-link>
        </div>
        <h3>欢迎进入我们的MALL</h3>
    </div>
</template>

<script>
    export default {
        name: "Index",
        mounted(){
            if (this.$cookies.isKey('username')) {
                let loginuser = this.$cookies.get('username')
                this.$store.commit('setLoginUser',loginuser);
                this.$router.push('/productlist');
            }
        }
    }
</script>

<style scoped>
.demo1{
    background: aquamarine ;
    height: 450px;
    width: 450px;
    margin: 0px auto;

    border: 1px solid red;
}
#nav {
    padding-right: 30px;
    padding-top: 10px;
    background: aquamarine;
    margin-left: 300px;
}
#nav a {
    font-weight: bold;
    color: #2c3e50;
}

h3{
    margin-top: 150px;
   text-align: center;

}
</style>