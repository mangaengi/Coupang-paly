import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { movieAction } from '../redux/action/movieAction';
import Banner from '../components/Banner';
import Loading from '../components/Loading';
import MovieSlide from '../components/MovieSlide';


const Movies = () => {
  const dispatch = useDispatch();
  const {loading } = useSelector(state=>state.movie);
  //console.log("home", popularMovies)
    
  useEffect(() => {
      dispatch(movieAction.getMovies());
    }, []);

    if (loading) {
      return (
        <Loading />
      )
    }
    const Rest_api_key='2754a87ef5a5eebffb51005c767441ad' //REST API KEY
    const redirect_uri = 'http://localhost:3000/movies' //Redirect URI
    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
    const handleLogin = ()=>{
        window.location.href = kakaoURL
    }


    return(
        <div className='movies'>
          <div className='movies2'>
            <h1>로그인</h1>
            <input type="email" placeholder='이메일' />
            <input type="password" placeholder='비밀번호'/>
            <button>로그인하기</button>
            <button onClick={handleLogin} className='kakao-btn'>카카오 로그인</button>
          </div>
        </div>
      )
  
  
}
export default Movies
