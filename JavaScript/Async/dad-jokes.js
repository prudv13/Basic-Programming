const getDadJokes = async () => {
    const response = await fetch("https://icanhazdadjoke.com", {
        method: "GET",
        headers: {
            Accept: "application/json",
        },
    });
    const jsonJokeData = await response.json();
    console.log(jsonJokeData);
    console.log(jsonJokeData.joke);
    return jsonJokeData.joke;
}

console.log(getDadJokes());

// =========================================================================================================

const jokeObject = { 
    id: 'Zv4wHQuXgyd',
    joke: 'How do you tell the difference between a crocodile and an alligator? You will see one later and one in a while.',
}


const postData = async () => {
    const response = await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: {
            Accept: "application/json",
        },
        body: JSON.stringify(jokeObject),
    });
    const jsonResponse = await response.json();
    console.log(jsonResponse);
}

console.log(postData());