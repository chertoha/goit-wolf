export function createGAlleryMarkup(list) {
  return list.map(createGalleryMarkup).join('');
}

function createGalleryMarkup({
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
  webformatURL,
}) {
  return `
  <div class="photo-card">
    <a class="photo-card__link" href="${largeImageURL}">
        <img class="photo-card__img" src="${webformatURL}" alt="${tags}" loading="lazy" />
    </a>    
    <div class="info">
        <p class="info-item">
            <b>Likes</b><span>${likes}</span>
        </p>
        <p class="info-item">
            <b>Views</b><span>${views}</span>
        </p>
        <p class="info-item">
            <b>Comments</b><span>${comments}</span>
        </p>
        <p class="info-item">
            <b>Downloads</b><span>${downloads}</span>
        </p>
    </div>
</div>`;
}
