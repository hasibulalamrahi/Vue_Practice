// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');


// function addGoal(){
//     const enteredValue = inputEl.value;
//     const listItemEl = document.createElement('li');
//     listItemEl.textContent = enteredValue;
//     listEl.appendChild(listItemEl);
//     inputEl.value = '';
// }
// buttonEl.addEventListener('click',addGoal);


// we can do the above task by using Vue js by follows

// const app1= Vue.createApp({
 const app1 = new Vue ({
    // el:"#app",
    data() {
        return{
            goals: [],
            enteredvalue: '',
        };
    },

    methods:{
        addGoal(){
            this.goals.push(this.enteredvalue);
        }
    }
});
 app1.$mount('#app');