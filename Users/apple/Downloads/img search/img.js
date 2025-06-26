const accesskey ='DPwl1O7PTa40Rj6mVNX6hhnTHMbwZkSWW1oG8OZVgvU';
const searchForm = document.querySelector('form');
const searchInput = document.querySelector('.search-input');
const imgContainer = document.querySelector('.img-container');
const morebtn = document.querySelector('.morebtn');

let page=1;
let currentQuery = '';
async function fetchImages(query, pageNo) {
    try {
        if (pageNo === 1) {
            imgContainer.innerHTML = '';

    }
    const url = `https://api.unsplash.com/search/photos/?query=${query}&per_page=28&page=${pageNo}&client_id=${accesskey}`;

    const response = await fetch(url);
    const data = await response.json();

    if (pageNo === 1) {
imgContainer.innerHTML='';
    }

    if (data.results.length === 0) {
        imgContainer.innerHTML =`<h2>No , image found.</h2>`;
        morebtn.style.display ="none";
        return;
        } 
        

    data.results.forEach(photo => {
        const imgElement = document.createElement('div');
        imgElement.classList.add('imgdiv');

        imgElement.innerHTML = `<img src="${photo.urls.regular}"/>`;
        const overlayElement = document.createElement('div');
        overlayElement.classList.add('overlay');


        const overlayText = document.createElement('h3');
        overlayText.innerText = `${photo.alt_description}`;

        overlayElement.appendChild(overlayText);
        imgElement.appendChild(overlayElement);
        imgContainer.appendChild(imgElement);
    });

    if (data.total_pages === page) {
    morebtn.style.display ="none";
}else{
       morebtn.style.display ="block";
}


} catch (error) {
        imgContainer.innerHTML = `<h2>failed,please try again later.</h2>`
    }
}
searchForm.addEventListener('submit', (e) =>  {
    e.preventDefault();
    const inputText = searchInput.value.trim();
    if(inputText !==''){
         page = 1;
         currentQuery =inputText;
        fetchImages(currentQuery,page);
    } else{
        imgContainer.innerHTML = `<h2>please enter a search query.</h2>`
    }

});

morebtn.addEventListener('click' , () => {
if (currentQuery !== '') {
    fetchImages(currentQuery, ++page);

}
});