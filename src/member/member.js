import fetchApi from "../fetchApi.js";

async function memberPage() {

    try {
        const url = 'https://cms-ca.bjeglerud.com/wp-json/wp/v2/posts/?per_page=30';
        const data = await fetchApi(url);

        const memberDiv = document.querySelector('.memberInfo');

        const queryString = document.location.search;
        const params = new URLSearchParams(queryString);
        const id = params.get('id');

        const post = data.find((post) => post.id == id);

        console.log(post);

        const memberData = post.content.rendered;
        const memberName = post.title.rendered;

        memberDiv.innerHTML = `${memberData}`;
    


    } catch (error) {
        console.log(error);
        window.alert('Something went wrong. Please try again later.')
    }
}

memberPage();