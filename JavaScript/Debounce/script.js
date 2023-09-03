const initApp = () => {
    const button = document.querySelector("button");
    button.addEventListener('click', debounce(clickLog, 3000));
}

const clickLog = () => console.log('clicked');

document.addEventListener('DOMContentLoaded', initApp);

const debounce = (fn, delay) => {
    let id;
    console.log(`id at immediate load: ${id}`);

    return (...args) => {
        console.log(`previous id: ${id}`);
        if(id) clearTimeout(id);
        id = setTimeout(() => {
            fn(...args);
        }, delay);
    }
}