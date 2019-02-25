export default {
    getMovies: function () {
        return Promise.resolve(this.movies);
    },
    movies: [
        {
            id: "1",
            name: "Terminator",
            director: "James Cameron",
            year: 1988,
            poster: "https://m.media-amazon.com/images/M/MV5BYTViNzMxZjEtZGEwNy00MDNiLWIzNGQtZDY2MjQ1OWViZjFmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,666,1000_AL_.jpg"
        },
        {
            id: "2",
            name: "Terminator 2",
            director: "James Cameron",
            year: 1992,
            poster: "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY999_CR0,0,672,999_AL_.jpg"
        },
        {
            id: "3",
            name: "Forrest Gump",
            director: "Robert Zemekis",
            year: 1994,
            poster: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
        },
        {
            id: "4",
            name: "The Green Mile",
            director: "Frank Darabont",
            year: 1999,
            poster: "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_.jpg"
        },
        {
            id: "5",
            name: "Pulp Fiction",
            director: "Quentin Tarantino",
            year: 1994,
            poster: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,686,1000_AL_.jpg"
        },
        {
            id: "6",
            name: "The Shawshank Redemption",
            director: "Frank Darabont",
            year: 1994,
            poster: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
        }

    ]
}