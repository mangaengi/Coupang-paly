import React, { useEffect } from 'react'
import Banner from '../components/Banner'
import { useDispatch, useSelector } from 'react-redux'
import { MovieAction } from '../redux/actions/MovieAction'
import Loading from '../components/Loading'
import MoverSlide from '../components/MoverSlide'

const Home = () => {
  const dispatch = useDispatch()
  const {popularMovies,topRatedMovies,upcomingMovies, loading} = useSelector(state=>state.movie)
  //console.log("home", popularMovies)

  useEffect(()=> {
    dispatch(MovieAction.getMovies())
  }, [])

  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <div> 
        <Banner movie={popularMovies.results[14]} />
        <div className='contents'>
          <h2>What's Popular</h2>
          <MoverSlide movie={popularMovies} />
          <h2>Top Rated Movies</h2>
          <MoverSlide movie={topRatedMovies} />
          <h2>Up Coming</h2>
          <MoverSlide movie={upcomingMovies} />
        </div>
    </div> 
  )
}

export default Home