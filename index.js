const contenitore1 = document.getElementById("contenitore1");
const contenitore2 = document.getElementById("contenitore2");
const contenitore3 = document.getElementById("contenitore3");

const canzoni = async () => {
  try {
    const res = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=redhotchilipeppers"
    );
    console.log(res);
    const { data: canzoni } = await res.json();
    console.log(canzoni);
    for (let i = 0; i < 4; i++) {
      let songs = canzoni[i];
      contenitore1.innerHTML += `
            <div class="col  m-1">
                <div class="card" style="width: 18rem;" height="150px">
                    <img src="${songs.album.cover_medium}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${songs.title}</h5>
                    <p class="card-text">Artist: ${songs.artist.name}</p>
                    <a href="${songs.link}" class="btn btn-primary">deezer</a>
                </div>
                </div>
            </div> `;
    }
  } catch (error) {
    console.log(error);
  }

  try {
    const res = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=wonderwall"
    );
    console.log(res);
    const { data: canzoni } = await res.json();
    console.log(canzoni);
    for (let i = 0; i < 1; i++) {
      let songs = canzoni[i];
      contenitore2.innerHTML = `
      <div class="col col-6  m-1">
      <div class="card  mb-3 m-3">
    <img src="${songs.album.cover_big}" class="card-img-top w-100" height="400px" alt="...">
    <div class="card-body mycards">
      <h5 class="card-title">${songs.title}</h5>
      <p class="card-text">Artist: ${songs.artist.name}</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
    </div>`;
    }
  } catch (error) {
    console.log(error);
  }
  // fine secondo esercizio
  try {
    const res1 = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=salmo"
    );
    console.log(res1);
    const { data: canzoni1 } = await res1.json();
    console.log(canzoni1);
    const song1 = data.data.find((song1) => song1.title === "playlist");
    // 1
    const res2 = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=caparezza"
    );
    console.log(res2);
    const { data: canzoni2 } = await res2.json();
    console.log(canzoni2);
    const song2 = data.data.find((song2) => song2.title === "museica");
    // 2
    const res3 = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=marracash"
    );
    console.log(res3);
    const { data: canzoni3 } = await res3.json();
    console.log(canzoni3);
    const song3 = data.data.find((song3) => song3.title === "santeria");
    // 3
    //     contenitore3.innerHTML = `<div id="carouselExampleCaptions" class="carousel slide">
    // <div class="carousel-indicators">
    //   <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    //   <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    //   <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    // </div>
    // <div class="carousel-inner">
    //   <div class="carousel-item active">
    //     <img src="${song1.album.cover_medium}" class="d-block w-100" alt="...">
    //     <div class="carousel-caption d-none d-md-block">
    //       <h5>${song1.title}</h5>
    //       <p>artist:  ${song1.artist.name}</p>
    //     </div>
    //   </div>
    //   <div class="carousel-item">
    //     <img src="${song2.album.cover_medium}" class="d-block w-100" alt="...">
    //     <div class="carousel-caption d-none d-md-block">
    //       <h5>${song2.title}</h5>
    //       <p>artist: ${song2.artist.name}</p>
    //     </div>
    //   </div>
    //   <div class="carousel-item">
    //     <img src="${song3.album.cover_medium}" class="d-block w-100" alt="...">
    //     <div class="carousel-caption d-none d-md-block">
    //       <h5>${song3.title}</h5>
    //       <p>artist: ${song3.artist.name}</p>
    //     </div>
    //   </div>
    // </div>
    // <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    //   <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    //   <span class="visually-hidden">Previous</span>
    // </button>
    // <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    //   <span class="carousel-control-next-icon" aria-hidden="true"></span>
    //   <span class="visually-hidden">Next</span>
    // </button>
    // </div>`;
  } catch (error) {
    console.log(error);
  }
};

canzoni();
