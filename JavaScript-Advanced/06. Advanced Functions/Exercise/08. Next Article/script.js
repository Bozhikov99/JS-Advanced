function getArticleGenerator(articles) {
    
    let articleList=articles;

    return function showNext(){
        if (articles.length>0) {
            
            let divElement=document.querySelector('#content');

            let currentArticle=document.createElement('article');
            currentArticle.textContent=articles[0];
            divElement.appendChild(currentArticle);

            articles.shift(1);
        }
    }
}
