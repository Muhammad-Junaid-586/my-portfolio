const accessKey = 'Gi34r3qwbTT5UvHYzhYiEmhFs66aRUuzzyZnu29QmSs';
const searchForm =document.getElementById('Search-form');
const searchBox = document.getElementById('Search-box');
const searchResult = document.getElementById('searchResult');
const showMoreBtn = document.getElementById('showMoreBtn');

let keyword = '';
let page = 1;

async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);

    if (page === 1) {
        searchResult.innerHTML = '';
    }
    const results = data.results;

    results.map((result)=>{
        const image = document.createElement('img');
        image.src = result.urls.small;

        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = '_blank';

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    showMoreBtn.style.display = 'block';
}


searchForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    page = 1;
    searchImages();
});

showMoreBtn.addEventListener('click', ()=>{
    page++;
    searchImages();
})