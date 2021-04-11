const app = Vue.createApp({
    /* template: '<h1>Hello {{firstName}}</h1>', */
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods: {
        async getUser () {
            const data = await (await fetch("https://randomuser.me/api")).json();
            console.log(data);
            const {results} = data;  // random user data
            console.log(results);

            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.medium
        },
    }
});

app.mount('#app');