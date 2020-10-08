var apple = document.getElementById("apple-is-shit");
var full = document.getElementById("content");
if( /iPhone/i.test(navigator.userAgent) ) {
    apple.style.display = "block";
    full.style.display = "none";
}else{
    apple.style.display = "none";
    full.style.display = "block";
}