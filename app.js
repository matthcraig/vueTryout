const vm = Vue.createApp({
  data(){
    return{
      firstName: 'Johnson',
      middleName: 'Ville',
      lastName: 'Brats',
      url: 'https://google.com',
      raw_url: '<a href="https://google.com" target="blank">Google</a>',
      age: 20
    }
  },
  methods: {
    fullName() {
      return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`
    },
    increment() {
      this.age++
    },
    decrement() {
      this.age--
    },
    updateLastName(msg, event) {
      console.log(msg);
      this.lastName = event.target.value;
    },
    updateMiddleName(event) {
      this.middleName = event.target.value;
    }
  }
}).mount('#app')

// setTimeout(() => {
//   vm.firstName = 'Bob'
// }, 9000)