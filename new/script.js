document.addEventListener('DOMContentLoaded', function() {
    main();
 }, false);

function main() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    if (urlParams.has('url')) {
        document.getElementById("seecrets").value = "funnsam.github.io/Seecrets?l="+btoa(urlParams.get('url'));
    }
}