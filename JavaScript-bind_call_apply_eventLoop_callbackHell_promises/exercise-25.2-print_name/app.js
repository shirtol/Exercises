const person = {
    name: "Shir",
    printName: function () {
        console.log(this.name);
    },
    printNameAfterSecond: function () {
        setTimeout(this.printName.bind(this), 1000);
    },
};

person.printName();
person.printNameAfterSecond();
