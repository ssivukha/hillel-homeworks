import View from './View.js'
export default class MovieView extends View {
    constructor (options) {
        super(options)
    }
    render () {
        this.element.innerHTML = `
        	<a href="#movies/${this.model.id}" class="movie" data-id="${this.model.id}">
        		<img src="${this.model.poster}">
        		<strong class="name" >${this.model.name}</strong>
        	</a>
        	
        `; //set inner html
        return this;
    }
}