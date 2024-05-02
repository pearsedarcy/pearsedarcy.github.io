// Create a function which takes the number from the 'loading' element and
// increments it by 1.

function increment() {
    let loading = document.querySelector('#loading');
    loading.textContent = parseInt(loading.textContent) + 1;
    }

// call increment function when page is loaded
window.onload = setInterval(increment, 1000);

function fullscreen() {
    document.body.requestFullscreen();
    document.querySelector('#enter-fullscreen').style.opacity = '0';
}