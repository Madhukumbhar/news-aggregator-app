
//Api key//
const apikey="5a4c5da13d3b49c0aa33b1838401a5bb";
var article_box=document.getElementById("news-articles");
// Function to display news//
function newsResults(news){
    let result="";
    if(news.totalResults>0){
        news.articles.forEach(i=>{
            result+= 
              ` <section class="container">
                <li class="article"><a class="article-link" href="${i.url}" target="_blank">
                <div class="img_area">
                <img src="${i.urlToImage}" class="article-img" alt="${i.title}"></img>
                </div>
                <h2 class="article-title">${i.title}</h2>
                <p class="article-description">${i.description || "Description not available"}</p> <br>
                <span class="article-author">-${i.author? i.author: "Anon"}</span><br>
                </a>
                </li>
                </section>
              `;
          });
          article_box.innerHTML=result;
        }
        else
        { 
          article_box.innerHTML='<li class="not-found">No article was found based on the search.</li>';
        }
    
};
// Function to retreive news using Fetch API with Await//
async function retreive(searchValueText=""){

    article_box.innerHTML='<p class="load">News are Loading...</p>';
    
    if(searchValueText!=""){
      url=`https://newsapi.org/v2/everything?q=${searchValueText}&apiKey=${apikey}`;
    }
    else
    {
      url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}`;
    }
    const response=await fetch(url);
    const result=await response.json();
    newsResults(result);
}
//Get text value from Searchbar and pass to retreive function//
async function searchvalue(e){  
    if (event.which === 13 || event.keyCode === 13 || event.key === "Enter")
     {
      retreive(e.target.value);
     }
};
//Attached Event listener for Searchbar to retreive text from Searchbar//
function start(){
  document.getElementById("search").addEventListener('keypress',searchvalue);
  retreive();
}
//Initializing Function//
(function(){
  start();}
)();
      


/*let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=5a4c5da13d3b49c0aa33b1838401a5bb"

let search = function(keyword){
    let searchUrl = url + `&q=${keyword}` ;
    callApi(searchUrl);
}

let handleSearch = function(){
    if(event.keyCode == 13){
        var searchInput = document.getElementById("SearchBox");
        search(searchInput.value);
    }
    
}


let prepareHTMLFromData =  function(dataArr){
    let finalHTML = '';
    if(dataArr.length == 0){
        document.getElementById("Results").innerHTML = "No result" ;
        return;
    }
    
    
    for(let i=0;i<dataArr.length;i++){
        console.log(dataArr[i]);
        let htmlString = `
        <div class="item">
            <img src="${dataArr[i]["urlToImage"]}">
            <div>${dataArr[i]["title"]}</div>
            <div>${dataArr[i]["description"]}</div>
            <div>${dataArr[i]["author"]}</div>

        </div>`;
        finalHTML = finalHTML + htmlString ;
        console.log(finalHTML);
        
    }
    document.getElementById("Results").innerHTML=finalHTML;
}

let callApi = function(url){
    let myPromise = fetch(url);
    let myPromise.then(function(response){
        response.json()
    })

}*/