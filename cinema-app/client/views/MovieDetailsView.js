import View from './View.js'
export default class MovieDetailsView extends View {
    constructor (options) {
        super(options);
    }

    setMovie(movie) {
        this.model = movie;
        return this.render();
    }
    render () {
        const {name, director, year, description} = this.model;
        //const name = this.movie.name; const director = this.movie.directore; const year = this.movie.year;
        let movie = document.createElement('div');
        movie.classList.add('movie-detail');
        movie.innerHTML = `
            <div class="back-link"><a href='#movies'>Back to List</a></div>
            <div class="movie-detail-block">
                <div class="image-area">
                    <img src="${this.model.poster}">
                </div>
                <div class="text-area">
                    <ul>
                        <li><strong>Title</strong>: ${name}</li>
                        <li><strong>Year</strong>: ${year}</li>
                        <li><strong>Direcior</strong>: ${director}</li>
                    </ul>
                    <p>${description}</p>
                </div>
            </div>
        `;
        this.clear();
        this.element.appendChild(movie);
        return this;
    }
}