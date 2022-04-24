const users = [
    {
        id: 167464,
        firstName: "Jimmy",
        lastName: "Arnold",
        email: "jimmya@gmail.com",
    },
    {
        id: 578447,
        firstName: "Martha",
        lastName: "Goldman",
        email: "gold@hotmail.com",
    },
    {
        id: 864578,
        firstName: "Tim",
        lastName: "Burton",
        email: "timmy.hotmail.com",
    },
];

const newOl = document.createElement("ol");
newOl.setAttribute("style", "list-style-type: none;");

document.body.appendChild(newOl);

users.forEach((user) => {
    const newLi = document.createElement("li");
    newLi.setAttribute("data-id", user.id.toString());
    newLi.textContent += `${user.firstName} ${user.lastName}`;
    newOl.appendChild(newLi);
});

console.log(newOl);
