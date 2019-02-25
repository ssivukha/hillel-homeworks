import View from './View.js'
export default class MovieDetailsView extends View {
    constructor (options) {
        super(options);
    }

    setMovie(movie) {
        this.model = movie;
        this.render();
    }
    render () {
        const {name, director, year} = this.model;
        //const name = this.movie.name; const director = this.movie.directore; const year = this.movie.year;
        let movie = document.createElement('div');
        movie.innerHTML = `<div><strong>Title</strong>: ${name}</div>
                           <div><strong>Year</strong>: ${year}</div>
                           <div><strong>Direcior</strong>: ${director}</div>`;
        this.clear();
        this.element.appendChild(movie);
        return this;
    }
}