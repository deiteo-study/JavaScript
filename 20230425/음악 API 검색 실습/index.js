/* 
  아래에 코드를 작성해주세요.
*/
const input=document.querySelector('.search-box__input')
var keyword=''
input.addEventListener('input',()=>{
  keyword=input.value
})

// Enter로 검색 가능하게 하는 방법
input.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) fetchAlbums()
})

const searchBtn = document.querySelector('.search-box__button')
const card_lst=document.querySelector('.search-result')

function fetchAlbums(page = 1,limit=10){
  card_lst.innerHTML=''
  const API = `https://ws.audioscrobbler.com/2.0/?method=album.search&album=${keyword}&api_key=b7945e4e7f09ae1a12fbe9f0c8b64925&format=json&page=${page}&limit=${limit}`
  
  axios.get(API)
    .then(response => {
      console.log(response.data)
      if (response.data.results.albummatches.album.length==0) {
          card_lst.textContent=`${keyword}에 대한 검색 결과가 없습니다.`
      }
      else {
        albums(response)
      }
      
    })
    .catch(()=>{
      alert('잠시 후 다시 시도해주세요')})
  
}
// 검색된 앨범 추가 기능
function albums(response){
  for (albums of response.data.results.albummatches.album) {
    const card=document.createElement('div')
    card.classList.add('search-result__card')
    const cardImg = document.createElement('img')
    
    if (albums.image[1]['#text']) {
      cardImg.src = albums.image[1]['#text']
      
    }
    else {
      cardImg.src = 'https://op-js-music-search.netlify.app/assets/default.png'
      cardImg.style.width = '64px';
      cardImg.style.height = '64px';

    }
    card.appendChild(cardImg)
    const text=document.createElement('div')
    text.classList.add('search-result__text')
    card.appendChild(text)
    const h2 = document.createElement('h2')
    h2.textContent = albums.artist
    text.appendChild(h2)
    const p = document.createElement('p')
    p.textContent = albums.name
    text.appendChild(p)
    card_lst.appendChild(card)
  }
}
searchBtn.addEventListener('click',fetchAlbums)

