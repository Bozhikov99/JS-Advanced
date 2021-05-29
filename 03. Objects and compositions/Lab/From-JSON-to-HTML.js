function solve(stringInput){
    let students=JSON.parse(stringInput[0]);

    let html='<table>';
    
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

console.log(solve(['[{"Name":"Stamat","Score":5.5},{"Name":"Rumen","Score":6}]']));