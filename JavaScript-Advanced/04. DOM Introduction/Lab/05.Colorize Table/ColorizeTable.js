function colorize() {
    let rows=document.querySelectorAll('table tr:nth-of-type(2n)');

    for (const r of rows) {
        r.style.background="teal";
    }
}