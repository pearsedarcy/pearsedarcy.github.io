// Create a function which takes the number from the 'loading' element and
// increments it by 1.

function increment() {
    let loading = document.querySelector('#loading');
    loading.textContent = parseInt(loading.textContent) + 1;
    }

// call increment function when page is loaded
window.onload = setInterval(increment, 1000);

// send user alert to enter fullscreen after 2 seconds
setTimeout(() => {
    ;
    if (window.confirm('Please enter fullscreen for the best experience!')) {
        document.body.style.backgroundColor = 'black';
    }
    else {
        alert('You will be missing out on the best experience!');
    }
}, 500);

// get enter-fullscreen button
let enterFullscreen = ;

// add event listener to enter-fullscreen button
document.querySelector('#enter-fullscreen').addEventListener('click', () => {
    console.log('enter fullscreen');
    document.body.requestFullscreen();
});
