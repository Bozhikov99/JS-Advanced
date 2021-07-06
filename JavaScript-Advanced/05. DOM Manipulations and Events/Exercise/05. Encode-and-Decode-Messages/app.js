function encodeAndDecodeMessages() {
    document.getElementById('main').addEventListener('click', (e) => {
        if (e.target.tagName !== 'BUTTON') {
            return;
        }
 
        let decodedMessage = document.getElementsByTagName('textarea')[0];
        let encodedMessage = document.getElementsByTagName('textarea')[1];
 
        if (e.target.textContent.includes('Encode')) {
            let content=Array.from(decodedMessage.value.split('')
        .map(x=>String.fromCharCode(x.charCodeAt(0)+1)));
            decodedMessage.value = '';
            encodedMessage.value = content.join('');
        } else if (e.target.textContent.includes('Decode')) {
            let content=Array.from(encodedMessage.value.split('')
        .map(x=>String.fromCharCode(x.charCodeAt(0)-1)));

            encodedMessage.value = content.join('');
        }
    });
}