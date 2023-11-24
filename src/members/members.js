import getDataFromLocalStorage from "../getDataFromLocalStorage.js";

async function members() {

    try {
        const memberInfo = document.querySelector('.members')

        const members = getDataFromLocalStorage();

        console.log(members);

        members.forEach(post => {
            const image = post.jetpack_featured_media_url;
            const rawName = post.excerpt.rendered;
            const id = post.id
            const name = rawName.replace(/<\/?[^>]+(>|$)/g, "");

            const memberDiv = document.createElement('div');
            memberDiv.classList.add('memberDiv');
            memberInfo.appendChild(memberDiv);
        
            const memberLink = document.createElement('a');
            memberLink.setAttribute('href', `member.html?id=${id}`);
            memberLink.setAttribute('post-id', id)
            memberDiv.appendChild(memberLink)

            const imageOverlay = document.createElement('div');
            imageOverlay.classList.add('imageOverlay');
            memberLink.appendChild(imageOverlay);
            
            const cardImage = document.createElement('img');
            cardImage.src = image;
            imageOverlay.appendChild(cardImage);
        
            const cardName = document.createElement('h2');
            cardName.textContent = name;
            memberDiv.appendChild(cardName);

            memberDiv.addEventListener('mouseover', () => {
                cardImage.classList.add('memHoverShadow');
                memberDiv.classList.add('memHoverScale')
              });
            
            memberDiv.addEventListener('mouseleave', () => {
                cardImage.classList.remove('memHoverShadow');
                memberDiv.classList.remove('memHoverScale')
            })
              

        })
    } catch (error) {
        console.log(error)
    }
};

members();