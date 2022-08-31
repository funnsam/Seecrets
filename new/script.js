document.addEventListener('DOMContentLoaded', function() {
    main();
 }, false);

function main() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    if (urlParams.has('url')) {
        document.getElementById("seecrets").innerHTML = "https://seecrets.tk?l="+btoa(urlParams.get('url'));
        document.getElementById("seecrets").href = "https://seecrets.tk?l="+btoa(urlParams.get('url'));
    }
}