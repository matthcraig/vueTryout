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
  },
  computed: {
    fullName() {
      console.log('full name computed property was called')
    
      return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`
    }
  },
  watch: {
    age(newVal, oldVal){
      setTimeout(() => {
        this.age = 20
      }, 3000)
    }
  }
}).mount('#app')

// setTimeout(() => {
//   vm.firstName = 'Bob'
// }, 9000)