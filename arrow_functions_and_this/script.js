const person = {
    firstName: 'Madonna',
    lastName: 'Ciccone',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
        // 'This' refers to the window object. This needs to be the format of this. An 
    },
    shoutName: function () {
        setTimeout(() => {
            console.log(this);
            console.log(this.fullName());
        }, 3000)
    }
}

// This is very annoying, because you have to be really careful about where it is executed.

console.log('Connected');