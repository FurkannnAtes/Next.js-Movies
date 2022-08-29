

const movieDetails = ({ movie }) => {
    return (
        <div className="movie-details-container  " style={{ backgroundImage: `URL(${movie.imgBanner})` }}>
            <div className="movie-details-bg-filter" ></div>
            <div className="movie-details-content h-100">
                <div className="row   h-100">
                    <div className="movie-details-content-left d-none d-lg-flex  d-flex align-items-center pt-5 pt-lg-0 ps-5 col-lg-4">
                        <img className="img-fluid mx-auto mx-lg-0 " src={movie.imgURL} alt="" />
                    </div>
                    <div className=" text-white col-lg-6 d-flex align-items-center ">
                        <div className="d-flex p-5 p-lg-0 flex-column justify-content-between movie-details-content-right  ">
                            <h1 >{movie.name}</h1>
                            <div className="d-flex align-items-center">
                                <span className="details-rating my-5 me-2">{movie.rating} </span>
                                <span>User <br /> Score</span>
                            </div>
                            <div>
                                <h1>Overview</h1>
                                <p className="details-overwiev">{movie.overwiev}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export const getServerSideProps = async (context) => {
    const res = await fetch(`http://localhost:3002/movies/${context.params.id}`)
    const movie = await res.json();

    return {
        props: {
            movie,
        }
    }
}

export default movieDetails