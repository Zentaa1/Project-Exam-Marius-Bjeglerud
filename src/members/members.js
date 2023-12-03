import getDataFromLocalStorage from "../getDataFromLocalStorage.js";
import { showLoading, hideLoading } from "../loader.js";

async function members() {
    showLoading();

    try {
        const memberInfo = document.querySelector('.members');
        const showMoreBtn = document.getElementById('showMoreBtn');
        const itemsToShowInitially = 10;
        let displayedItems = 0;

        const members = await getDataFromLocalStorage();

        const displayMembers = () => {
            const endIndex = Math.min(displayedItems + itemsToShowInitially, members.length);
            for (let i = displayedItems; i < endIndex; i++) {
                const post = members[i];
                const image = post.jetpack_featured_media_url;
                const rawName = post.title.rendered;
                const id = post.id;
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
            cardImage.alt = name
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

                displayedItems++;
            }

            if (displayedItems >= members.length) {
                showMoreBtn.style.display = 'none';
            }
        };

        displayMembers();

        showMoreBtn.addEventListener('click', () => {
            displayMembers();
        });
        hideLoading();
    } catch (error) {
        console.log(error);
        hideLoading();
    }
}

members();
