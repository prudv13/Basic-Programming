const initApp = () => {
    const button = document.querySelector('button');
    button.addEventListener('click', throttle(clickLog, 2000));
}

const clickLog = () => console.log('click');

document.addEventListener('DOMContentLoaded', initApp);

const throttle = (fn, delay) => {
    let lastTime = 0;
    console.log('called Throttle Immediately');
    return (...args) => {
        const now = new Date().getTime();
        if(now - lastTime < delay) return;
        lastTime = now;
        fn(...args);
    }
}