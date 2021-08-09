let duedate = new Date(2021, 6, 22);
const day = document.querySelector('#day');
const hour = document.querySelector('#hours');
const minute = document.querySelector('#minutes');
const second = document.querySelector('#seconds');
const articlecontainer = document.querySelector('.article-container')
setInterval(() => {
    const current= new Date();
    const elapsed = current-duedate;
    const secondstotal =Math.floor(elapsed/1000);
    const days = Math.floor(secondstotal/3600/24);
    const hours = Math.floor(secondstotal/3600)%24;
    const minutes = Math.floor(secondstotal/60)%60;
    const seconds = Math.floor(secondstotal)%60;
    day.innerText =days;
    hour.innerText =hours;
    minute.innerText =minutes;
    second.innerText =seconds;
}, 1000);

async function getNews(){
    const response = await fetch('https://gnews.io/api/v4/search?q=Donda&token=86fa995755b34940f55cb351288e8fc6&lang=en');
    const respobject = await response.json();
    console.log(respobject);
    return respobject;
}

getNews().then((responseobject) => {
    fillArticles(responseobject);
})

function fillArticles(resp){
    for(let i=0; i<resp.articles.length;i++){
        const title = resp.articles[i].title;
        const description = resp.articles[i].content;
        const link = resp.articles[i].url;
        const image =resp.articles[i].image;
        const newArticle = document.createElement('div')
        
        newArticle.classList.add('article');
        newArticle.innerHTML = `
        <div class="article-main">
            <img src=${image} alt="article image" class="article-img">
            <div class="article-text">
                <a href=${link} target="_blank"><h1>${title}</h1></a>
                <p>${description}</p>
            </div>
        </div>`
        articlecontainer.append(newArticle);
    }
}