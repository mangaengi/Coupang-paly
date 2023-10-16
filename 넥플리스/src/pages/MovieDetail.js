import React, { useState, useEffect} from 'react';
import { Container, Row, Col, Badge} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Video from '../components/Video'

const Moviedetail = () => {
  let [showDetail, setShowDetail] = useState({});
  const API_KEY = process.env.REACT_APP_API_KEY;
  let { id } = useParams();

  const detail = async () => {
    let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;

    let response = await fetch(url);
    let data = await response.json();
    setShowDetail(data);
    console.log(data)
  };

  useEffect(() => {
    detail();
  }, [showDetail]);

  return (
    <Container>
      <Row className='detail_section '>
        <Col lg={6} className="detail_img_card">
          <div
            className="detail-img"
            style={{
              backgroundImage:
                "url(" +
                `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${showDetail?.poster_path}` +
                ")",
            }}
          ></div>
        </Col>

        <Col lg={6} className='detail-info-group'>
            <div className="detail-title">{showDetail?.original_title}</div>
            <div className="detail-tagline">{showDetail?.tagline}</div>
            <hr />
            <div className="detail-overview">{showDetail?.overview}</div>
            <div className="detail-info">
              <span className="detail-vote">{showDetail?.vote_average}</span>
              <div className="detail-adult">
                {showDetail?.adult? "19+":"Under 18"}
              </div>
            </div>
            <hr />
            <div className="detail-info2">
              <div>
                <Badge bg="white" text="dart">Realse Date</Badge>
                {showDetail?.release_date}
              </div>
              <div>
                <Badge bg="white" text="dart">runtime</Badge>
                {showDetail?.runtime}
              </div>
              <div>
                <Badge bg="white" text="dart">language</Badge>
                {showDetail?.original_language}
              </div>
              <div>
                <Badge bg="white" text="dart">popularity</Badge>
                {showDetail?.popularity}
              </div>
            </div>
            <div>
              <Video/>
            </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Moviedetail;

