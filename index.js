const contenitore1 = document.getElementById("contenitore1");
const contenitore2 = document.getElementById("contenitore2");
const contenitore3 = document.getElementById("contenitore3");

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
                <div class="card text-bg-success text-dark " style="width: 18rem;" height="150px">
                    <img src="${songs.album.cover_medium}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${songs.title}</h5>
                    <p class="card-text">Artist:  ${songs.artist.name}</p>
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
        <div class="card-body ">
            <h5 class="card-title">${songs.title}</h5>
            <p class="card-text">Artist: ${songs.artist.name}</p>
            <a href="${songs.link}" class="btn btn-primary">deezer</a>
        </div>
    </div>`;
    }
  } catch (error) {
    console.log(error);
  }
  // fine secondo esercizio
};

async function favouriteAlbum() {
  try {
    const arrayDiQuery = ["nonostante tutto", "eclissi gemitaiz", "ali iltre"];
    for (let i = 0; i < arrayDiQuery.length; i++) {
      const singolaQuery = arrayDiQuery[i];
      let [canzone] = await fetchByQuery(singolaQuery);
      const sezione = document.querySelector(".carousel-inner");
      sezione.innerHTML += ` 
        <div class="carousel-item ${i == 0 ? "active" : " "}">
        <img src="${
          canzone.album.cover_medium
        }" class="d-block w-100" alt="..." />
          </div>;`;
    }
  } catch (error) {
    console.log(error);
  }
}
favouriteAlbum();
canzoni();
