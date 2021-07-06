function attachGradientEvents() {
    let hoverBox=document.querySelector('#gradient-box');
    let resultElement=document.querySelector('#result');

    hoverBox.addEventListener('mousemove',function(e){
        let length=e.target.clientWidth-1;
        let clientX=e.offsetX;
        let percent=Math.trunc((clientX/length)*100);

        resultElement.textContent=percent+'%';
    });
}