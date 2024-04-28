

const input = document.querySelector('input')
const button = document.querySelector('button')
const wrapper = document.querySelector('.wrapper')
const dataInfo = document.querySelector('.data-info')

button.addEventListener('click', () => {
    const tr = input.value.trim()
    const API = 'https://www.omdbapi.com/?i=tt3896198&apikey=ba7b51f2' + '&t=' + tr
    axios.get(API)
        .then(e => {
            let data = e.data
            if (tr == '') {
                Swal.fire("enter movie name!");
            } else {
                if (data.Response == 'False') {
                    Swal.fire("NO SUCH FILM");
                    wrapper.innerHTML = ''
                } else {
                    wrapper.innerHTML =
                    `
                        <div class="unit d-flex flex-column align-items-center mt-4">
                            <img src="${data.Poster}" alt="" style="width: 280px;">
                            <div class="descr" style="width: 280px;">
                                <h2 class="title">${data.Title}</h2>
                                <div class="rating text-center">
                                    <i class="fa-solid fa-star" style="color: orange"></i>
                                    <span>${data.imdbRating}</span>
                                </div>
                                <div class="film-info mt-2 d-flex justify-content-evenly">
                                    <span class="rated">${data.Rated}</span>
                                    <span class="runtime">${data.Runtime}</span>
                                    <span class="year">${data.Year}</span>
                                </div>
                                <p class="genres text-center mt-3">${data.Genre}</p>
                                <p class="plot"><b>PLOT:</b> ${data.Plot}</p>
                                <p class="actors"><b>ACTORS:</b> ${data.Actors}</p>
                            </div>
                        </div>
                    `
                }
            }
        })
})