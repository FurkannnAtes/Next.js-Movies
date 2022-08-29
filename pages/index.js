
import BannerCorousel from '../components/BannerCorousel';
import Footer from '../components/Footer'
import MovieList from '../components/MovieList'


export default function Home({ movies }) {

  return (
    <div className='wrapper'>
      <BannerCorousel />
      <MovieList
        movies={movies}
      />

      <Footer />
    </div>
  )
}
export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:3002/movies/`);
  const movies = await res.json();

  return {
    props: {
      movies,

    }
  }
}
