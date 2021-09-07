const temp = `<p>This is the first Instance which will load after few seconds {{name}}</p>` ;
const app1 = new Vue ({
    data: {
        name: "Hasib"
    },
    template: temp 
});

setTimeout(()=>{
    setTimeout(()=>{
        app1.$mount('#app')
    },3000);
})
