let user = {
    name: "John",
    surname: "Smith",

    get fullName() {
        return `${this.name} ${this.surname}`;
    },

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    }
};

// alert(user.fullName) //we don't call the accessor property WE READ IT

// user.fullName = "Alice Cooper";

// alert(user.name) //Alice
// alert(user.surname) //Cooper

let user1 = {
    get name() {
        return this._name;
    },

    set name(value) {
        if (value.length < 4) {
            alert("Name is too short, need at least 4 characters.");
            return;
        }
        this._name = value;
    }
}

//using for compatibility

function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;

    Object.defineProperty(this, "age", {
        get() {
            let todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear();
        }
    });

    return { name, birthday };
}

let john = User("John", new Date(1992, 6, 1));