import fetchApi from "../fetchApi.js";

export default async function carousel() {
  const url = 'https://cms-ca.bjeglerud.com/wp-json/wp/v2/posts/?per_page=30';
  const carouselData = await fetchApi(url);

  const carouselContainer = document.querySelector('.carousel');

  console.log(carouselData)

  let isPaused = false;

  carouselData.forEach(post => {
    const image = post.jetpack_featured_media_url;
    const rawName = post.excerpt.rendered;
    const id = post.id
    const name = rawName.replace(/<\/?[^>]+(>|$)/g, "");

    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carouselItem');

    const carouselLink = document.createElement('a');
    carouselLink.setAttribute('href', `member.html?id=${id}`);
    carouselLink.setAttribute('post-id', id)
    carouselItem.appendChild(carouselLink)
    
    const cardImage = document.createElement('img');
    cardImage.src = image;
    carouselLink.appendChild(cardImage);

    const cardName = document.createElement('h2');
    cardName.textContent = name;
    carouselItem.appendChild(cardName);


    carouselItem.addEventListener('mouseover', () => {
      isPaused = true;
    });

    carouselItem.addEventListener('mouseout', () => {
      isPaused = false;
    });

    carouselContainer.appendChild(carouselItem);
  });

  const items = document.querySelectorAll('.carouselItem');
  const itemsClone = [...items].map(item => item.cloneNode(true));

  itemsClone.forEach(item => {
    carouselContainer.appendChild(item);
  });


  let currentIndex = Math.floor(itemsClone.length / 2);
  let lastTimestamp = 0;
  const animationSpeed = 0.0002;

  function updateCarousel(timestamp) {
    if (!lastTimestamp) lastTimestamp = timestamp;
    const deltaTime = timestamp - lastTimestamp;

    if (!isPaused) {
      const itemWidth = itemsClone[0].offsetWidth;
      currentIndex += animationSpeed * deltaTime;

      const maxIndex = itemsClone.length;
      if (currentIndex >= maxIndex) {
        currentIndex = 0;
      }

      const translateX = -currentIndex * itemWidth;
      carouselContainer.style.transform = `translateX(${translateX}px)`;
    }

    lastTimestamp = timestamp;
    requestAnimationFrame(updateCarousel);
  }

  requestAnimationFrame(updateCarousel);
}