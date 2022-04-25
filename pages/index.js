import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Head from 'next/head'

const Home = ({ data }) => {
  const { results: movies } = data;

  return (
    <div>
      <Head>
        <title>Moviewer</title>
      </Head>
      <Header />
      <div className="container">
        <h1 className={styles.movieTitle}>Popular Movies</h1>

        <div className={styles.popularMovies}>
          {
            movies.map((movie) => (
              <div key={movie.id} className={styles.movieCard}>
                <div className={styles.image}>
                  <Image src={"https://www.themoviedb.org/t/p/w220_and_h330_face" + movie.poster_path} alt={movie.title} width={280} height={420} />
                </div>
                <div className={styles.detail}>
                  <h3>{movie.title}</h3>
                  <p>{movie.release_date}</p>
                </div>
                <div className={styles.action}>
                  <Link href={`/${movie.id}`}>
                    <a className="btn">Detail</a>
                  </Link>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=fc68f6cb35bcb4c2ec4f1930c5d3e4ea`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}