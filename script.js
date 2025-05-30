const gallery = [
  { id: 1, name: 'Bruno the Lab', img: 'assets/images/dog1.jpg' },
  { id: 2, name: 'Lucy the Beagle', img: 'assets/images/dog2.jpg' }
];

window.onload = () => {
  const container = document.getElementById('gallery-container');
  if (container) {
    gallery.forEach(pet => {
      container.innerHTML += `
        <div class="col-md-4 mb-3">
          <div class="card">
            <img src="${pet.img}" class="card-img-top" alt="${pet.name}">
            <div class="card-body text-center">
              <h5>${pet.name}</h5>
              <a href="details.html?petId=${pet.id}" class="btn btn-info">View More</a>
            </div>
          </div>
        </div>`;
    });
  }
};
