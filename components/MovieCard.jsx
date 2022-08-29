import Link from "next/link"




const MovieCard = ({ movie }) => {

    return (
        <div className='col-sm-6 col-md-4 col-lg-3 p-4'>
            <div className="position-relative movie-card">
                <label className="favorite-add-btn position-absolute end-0 top-0"  >
                    <input type="checkbox" /><i className="bi bi-bookmark-plus-fill "></i>
                </label>
                <div className="movie-card-head">
                    <Link href={`/movieDetails/${movie.id}`}><a> <img className="w-100" src={movie.imgURL} alt="...." /></a></Link>
                </div>
                <div className="movie-card-footer p-2">
                    <div className="d-flex justify-content-between">
                        <span className="give-stars">
                            <label>

                                <input type="radio" name={movie.id} />
                                <i className="bi bi-star-fill"></i>
                            </label>
                            <label>

                                <input type="radio" name={movie.id} />
                                <i className="bi bi-star-fill"></i>
                            </label>
                            <label>

                                <input type="radio" name={movie.id} />
                                <i className="bi bi-star-fill"></i>
                            </label>
                            <label>

                                <input type="radio" name={movie.id} />
                                <i className="bi bi-star-fill"></i>
                            </label>
                            <label>

                                <input type="radio" name={movie.id} />
                                <i className="bi bi-star-fill"></i>
                            </label>

                        </span>
                        <span className="rating"><i className="bi bi-star-fill me-1"></i>{movie.rating}</span></div>
                    <div className="card-title my-1">{movie.name}</div>
                    <Link href={`/movieDetails/${movie.id}`}><a><button className="card-details-btn my-1">Details</button></a></Link>
                </div>
            </div>
        </div >
    )
}

export default MovieCard
