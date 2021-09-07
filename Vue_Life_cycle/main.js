new Vue ({
    el: "#app",
    data: {
        name : "Hasib"
    },
    methods: {
        updateName(){
            this.name = "Hasibul Alam Rahi";
        },
        deleteName(){
            this.$destroy()
        }
    },
    beforeCreate(){
        alert("Running before created ");
    },
    created(){
        alert("Running while created");
    },
    beforeMount(){
        alert("Running  before Mount")
    },
    mounted(){
        alert("Mounted")
    },
    beforeUpdate(){
        alert("Before Update")
    },
    updated(){
        alert("Before Updated ");
    },
    beforeDestroy(){
        alert("Before Destroy")
    },
    destroyed(){
        alert("destroyed");
    }

})