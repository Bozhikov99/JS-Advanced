function solution() {


    (async function getArticle() {
        let articlesListUrl = 'http://localhost:3030/jsonstore/advanced/articles/list';
        let articlesRequest = await fetch(articlesListUrl);
        let articlesArray = await articlesRequest.json();

        let mainSectionElement = document.getElementById('main');

        for (const a of articlesArray) {
            //mainSectionElement.appendChild(//
            let currentArticleReq = await getJsonObject(a);
            let currentArticleObj = await currentArticleReq.json();
            let currentNode = CreateHtmlStructure(currentArticleObj);
            mainSectionElement.appendChild(currentNode);
        }
    })();

    async function getJsonObject(article) {
        //extracting current article data
        let currentId = article._id;
        let url = `http://localhost:3030/jsonstore/advanced/articles/details/${currentId}`
        let currentRequest = await fetch(url);
        return currentRequest;
    }

    function CreateHtmlStructure(currentObj) {

        let currentId = currentObj._id;
        let currentTitle = currentObj.title;
        let currentContent = currentObj.content;

        //creating the HTML structure
        let accordionDivElement = document.createElement('div');
        accordionDivElement.classList.add('accordion');

        let headDivElement = document.createElement('div');
        headDivElement.classList.add('head');

        let titleSpanElement = document.createElement('span');
        titleSpanElement.textContent = currentTitle;

        let buttonElement = document.createElement('button');
        buttonElement.classList.add('button');
        buttonElement.id = currentId;
        buttonElement.textContent = 'More';
        buttonElement.addEventListener('click', buttonHandler);
        //add event listener

        headDivElement.appendChild(titleSpanElement);
        headDivElement.appendChild(buttonElement);
        accordionDivElement.appendChild(headDivElement);

        let extraDivElement = document.createElement('div');
        extraDivElement.classList.add('extra');

        let pElement = document.createElement('p');
        pElement.textContent = currentContent;

        extraDivElement.appendChild(pElement);
        accordionDivElement.appendChild(extraDivElement);

        return accordionDivElement;
    }

    function buttonHandler(e) {
        let button = e.target;
        let divElement = e.target
            .parentElement.nextSibling;


        if (button.textContent === 'More') {
            button.textContent = 'Less';
            divElement.style.display = 'block';
        } else {
            button.textContent = 'More';
            divElement.style.display = 'none';
        }
    }

}

solution();