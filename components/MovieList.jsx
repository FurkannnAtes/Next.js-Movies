
import MovieCard from './MovieCard'

const MovieList = ({ movies }) => {
    return (
        <div className='movie-list-container'>
            <div className="row px-5">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    )
}

export default MovieList
