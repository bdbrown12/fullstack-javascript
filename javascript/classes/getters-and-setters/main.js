let user = {
    name: "John",
    surname: "Smith",

    get fullName() {
        return `${this.name} ${this.surname}`;
    },

    set fullName(value){
        [this.name, this.surname] = value.split(" ");
    }
};

alert(user.fullName) //we don't call the accessor property WE READ IT

user.fullName = "Alice Cooper";

alert(user.name) //Alice
alert(user.surname) //Cooper