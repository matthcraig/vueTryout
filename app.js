const vm = Vue.createApp({
  data(){
    return{
      firstName: 'Johnson',
      middleName: 'Ville',
      lastName: 'Brats',
      url: 'https://google.com',
      raw_url: '<a href="https://google.com" target="blank">Google</a>',
      age: 20,
      isPurple: false,
      selectedColor: '',
      size: 150,
      rotation: 0,
      mode: 1,
      birds: ['Pigeons', 'Eagles', 'Doves', 'Parrots'],
      people: [
        {name: 'John', age: 20},
        {name: 'Rick', age: 78},
        {name: 'Amy', age: 33},
        {name: 'Jerry', age: 44},
        {name: "Keri", age: 51}
      ]
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
    },
    move(){
      const first = this.people.shift()

      this.people.push(first)
    }
  },
  computed: {
    fullName() {
      console.log('full name computed property was called')
    
      return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`
    },
    circle_classes() {
      return { purple: this.isPurple }
    },
    size(){
      return { width: size + 'px', height: size + 'px', lineHeight: size + 'px' }
    },
    rotate_circle(){
      return { transform: 'rotate(30deg)' }
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