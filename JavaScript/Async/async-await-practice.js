// 2nd paramater of fetch is an object

const myUsers = {
    userList: [],
    userEmailList: [],
};

const getAllUserEmails = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    const userEmailArray = jsonUserData.map(user => user.email);
    return userEmailArray;
}


console.log(getAllUserEmails());

const postToUserData = async () => {
    const userData = await getAllUserEmails();
    myUsers.userEmailList = userData;
    console.log(myUsers.userEmailList);
    return userData;
}

console.log(postToUserData());