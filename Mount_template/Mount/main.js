const app1 = new Vue ({
    // el:'#app',
    data:{
        name : 'Hasib'
    }
});
setTimeout(()=>{
    app1.$mount('#app')
},2000);