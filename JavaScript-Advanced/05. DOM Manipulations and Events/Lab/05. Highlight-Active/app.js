function focused() {
    let sectionElements=document.querySelectorAll('div div');

    for (let el of sectionElements) {
        el.children[1].addEventListener('focus', function(e){
            el.className='focused';
        });

        el.children[1].addEventListener('blur', function(e){
            el.className='';
        });
    }
}