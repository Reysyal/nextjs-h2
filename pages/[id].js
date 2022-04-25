import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Head from 'next/head'

const Movie = ({ movie }) => {
  return (
    <div>
      <Head>
        <title>Moviewer</title>
      </Head>
      <Header />
      <div className="main">
        <div className="container">
          <div className={styles.movieDetail}>
            <div className={styles.leftColumn}>
              <div className={styles.imageContainer}>
                <Image src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`} width={600} height={900} />
              </div>
            </div>
            <div className={styles.rightColumn}>
              <div className={styles.title}>
                <h1>{movie.title}</h1>
              </div>
              <div className={styles.detail}>
                <p>{movie.overview}</p>
              </div>
              <div className={styles.genres}>
                <p>Genres:</p>
                <div className={styles.genres}>
                  {movie.genres.map((genre) => (
                    <div key={genre.id} className={styles.genreCard}>
                      {genre.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Movie

export async function getServerSideProps(context) {
  // Get id from param
  const params = context.params

  // Fetch movie from external API
  const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=fc68f6cb35bcb4c2ec4f1930c5d3e4ea`)
  const movie = await res.json()

  // Pass movie to the page via props
  return { props: { movie } }
}