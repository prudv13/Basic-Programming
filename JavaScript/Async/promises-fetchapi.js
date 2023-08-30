const users = fetch("https://jsonplaceholder.typicode.com/users");

console.log(users);

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => {
    return response.json();
})
.then(data => {
    data.forEach(user => {
        console.log(user.name);
    })
});