<template>
    <div>
    <Product></Product>
    </div>
</template>

<script>
    import Product from '@/components/Product.vue'
    import axios from 'axios'
    export default {
        name: "ProductList",
        data(){
            return  {
                prodlist:[],
                current:1,
                size:4,
                showlist:[]
            }
        },
        computed:{
            total(){
                return this.prodlist.length;
            }
        },
        components:{product:Product},
        mounted(){
            if (this.$store.state.loginuser == ''){
                this.$router.push('/');
            }
            else {
                axios.post("http://localhost:8080/api/getproductlist")
                    .then((res)=>{
                        this.prodlist = res.data;
                        this.$store.commit('setProdList',this.prodlist);
                        this.change(this.current);
                    })
            }
        },
        methods:{
            logout(){
                if (this.$cookies.isKey('username')){
                    this.$cookies.remove('username')
                }
                this.$store.commit('setLoginUser','');
            },
            change(val){
                this.current = val;
                this.showlist = [];
                for(var i=0;i<this.size;i++){
                    var index = (this.current-1)*this.size+i;
                    if (index < this.prodlist.length) {
                        var prod = this.prodlist[index];
                        this.showlist.push(prod);
                    }
                    else
                        break;
                }
            }
        }
    }
</script>

<style scoped>

</style>