import View from './View.js'
import MovieView from './MovieView.js'
export default class MovieListView extends View {
    constructor(options) {
        super(options);
        this.model.getMovies().then(result => {
            this.movieViews = [];
            this.model.movies.forEach((item)=> {
                this.movieViews.push(new MovieView({
                    model: item,
                    tagName: 'div',
                    className: 'movie-item'
                }))
            })
        })
    }
    render() {
        this.movieViews.forEach(view => {
            this.element.appendChild(view.render().element)
        })
        return this;
    }
}
