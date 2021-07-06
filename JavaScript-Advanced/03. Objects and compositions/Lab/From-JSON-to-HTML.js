function solve(stringInput){
    let students=stringInput;

    let html='<table>\n   <tr><th>Name</th><th>Score</th></tr>';
    
    for (let obj of students) {
        html+='\n   <tr>';
        Object.keys(obj).forEach(k=>html+=`<td>${htmlEscape(String(obj[k]))}</td>`)
    }
    html+='\n</table>';

    function htmlEscape(text) {

        return text

            .replace(/&/g, "&amp;")

            .replace(/</g, "&lt;")

            .replace(/>/g, "&gt;")

            .replace(/"/g, "&quot;")

            .replace(/'/g, "&#039;");

    }

    return html;
}

console.log(solve([{"Name":"Stamat","Score":5.5},{"Name":"Rumen","Score":6}]));