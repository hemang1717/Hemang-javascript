// Throttling ensures that a function is executed at most once in a specified interval of time,
// regardless of how many times the event occurs. It limits the rate at which the function can be called.

// Example:

// Handling window scroll events to update the position of elements or lazy load images.
// Preventing excessive API calls during rapid user interactions.
function f(){
    console.log("Resizing the window");
}
function throttle(func, limit) {
    let flag=true;
    return function(...args) {
        if (flag) {
            func.apply(this, args);
            flag = false;
            setTimeout(() => flag = true, limit);
        }
    };
}

window.addEventListener('resize',throttle(f,800))