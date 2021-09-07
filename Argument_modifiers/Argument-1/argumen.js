new Vue ({
    el:"#app",
    data:{
        name : "Whats you name?"
    },
    methods:{
        updateName(newname,event){
            this.name = newname;
            console.log(event) //as it is a mouse click so it will show in the  console as pointer event
        }
    }
})