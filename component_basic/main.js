const temp = `<p>The name of the person is {{name}}</p>`

Vue.component('hasib',{
    data(){
        return{
            name : " Hasib"
        }
    },

    template : temp

})

new Vue ({
    el:"#app"
});
