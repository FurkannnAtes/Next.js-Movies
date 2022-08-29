import Link from "next/link"

const BannerCorousel = () => {
    return (

        <div id="homeCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <Link href="/"><a>
                        <img src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/kaIfm5ryEOwYg8mLbq8HkPuM1Fo.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption   d-none  d-md-block">
                            <h5>Thor:Ragnarok </h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, veniam!</p>
                        </div>
                    </a></Link>
                </div>
                <div className="carousel-item ">
                    <Link href="/"><a>
                        <img src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/wDyM1lIIgK4RIDAgr8iuZe9N1cf.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption   d-none  d-md-block">
                            <h5>Day Shift</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </a></Link>
                </div>
                <div className="carousel-item ">
                    <Link href="/"><a>
                        <img src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/vIgyYkXkg6NC2whRbYjBD7eb3Er.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption   d-none  d-md-block">
                            <h5>Venom</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </a></Link>
                </div>

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    )
}

export default BannerCorousel
