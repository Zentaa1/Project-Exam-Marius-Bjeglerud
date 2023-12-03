const loaderDiv = document.querySelector('.loaderDiv');

export function showLoading() {
    document.body.appendChild(loaderDiv);
}

export function hideLoading() {
    document.body.removeChild(loaderDiv);
}
