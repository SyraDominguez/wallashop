document.addEventListener('DOMContentLoaded', function () {
  const overlay = document.querySelector('.overlay');
  const zoomedImage = document.querySelector('.zoomed-image');
  const image = document.querySelector('.advertisement-list');

  image.addEventListener('click', function (event) {
    if (event.target.tagName === 'IMG') {
      const src = event.target.getAttribute('src');
      zoomedImage.innerHTML = `<img src="${src}" alt="Zoomed Image">`;
      overlay.style.display = 'block';
      zoomedImage.style.display = 'block';
    }
  });

  overlay.addEventListener('click', function () {
    overlay.style.display = 'none';
    zoomedImage.style.display = 'none';
  });
});
