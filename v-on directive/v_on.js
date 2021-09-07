new Vue({
    el:'#app',
    data:{
        name: 'Hasib',
        x:0,
        y:0
    },
    methods:{
        updateName(){
            this.name = "Alam"
            
        },
        getCoord(event){
            this.x = event.clientX;
            this.y = event.clientY;


        }
        
    }
})