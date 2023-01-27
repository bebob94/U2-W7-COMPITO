const contenitore1 = document.getElementById("contenitore1");
const contenitore2 = document.getElementById("contenitore2");

const APIUrl = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

const fetchByQuery = async (query) => {
  const res = await fetch(`${APIUrl}${query}`);
  const { data: songs } = await res.json();
  return songs;
};

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
                <a href="${songs.link}">
                    <div class="card text-bg-dark text-light " style="width: 18rem;" height="150px">
                        <img src="${songs.album.cover_medium}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${songs.title}</h5><hr />
                            <p class="card-text">${songs.artist.name}</p>
                        </div>
                    </div>
                </a>
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
    <div class="col">
        <a href="${songs.link}">
            <div class="card text-bg-dark text-light mb-3" ">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${songs.album.cover_big}" class="img-fluid rounded-start h-100" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body position-absolute bottom-0 ">
                            <h5 class="card-title mb-3">${songs.title}</h5> <hr />
                            <p class="card-text mb-2">${songs.artist.name}</p>
                        </div>
                    </div>
            </div>
        </a>
    </div>`;
    }
  } catch (error) {
    console.log(error);
  }
  // fine secondo esercizio
};

async function favouriteAlbum() {
  try {
    const arrayDiQuery = ["Playlist salmo", "prisoner 709", "caos fibra"];
    for (let i = 0; i < arrayDiQuery.length; i++) {
      const singolaQuery = arrayDiQuery[i];
      let [canzone] = await fetchByQuery(singolaQuery);
      const sezione = document.querySelector(".carousel-inner");
      sezione.innerHTML += ` 
        <div class="carousel-item ${i == 0 ? "active" : " "} rounded-4">
        <img src="${
          canzone.album.cover_medium
        }" class="d-block w-100" alt="..." />
          </div>`;
    }
  } catch (error) {
    console.log(error);
  }
}
canzoni();
favouriteAlbum();
