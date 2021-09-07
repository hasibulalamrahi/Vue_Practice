const app1 = new Vue ({
    el : "#app1",
    data: {
        value : "1st"
    },
    methods:{
        changeValue(){
            app2.value = " changed"
        }
    }
});

const app2 = new Vue ({
    el:"#app2",
    data:{
        value : "2nd"
    }
});