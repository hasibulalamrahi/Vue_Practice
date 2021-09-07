new Vue ({
    el : "#app",
    data:{
        formData:{
            firstName:'',
            lastName :'',
            Email:''
        }
    },
    methods:{
        handleForm(){
            console.log(this.formData)
        }
    }
})