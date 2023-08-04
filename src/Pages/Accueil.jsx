import React, { useEffect, useState } from "react";
import StreamService from "../Services/StreamService";
import StreamsCards from "../Components/StreamsCards";
import { Button, Col, Container, Row } from "react-bootstrap";;

const Accueil = () => {
  const [streams, setStreams] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cursor, setCursor] = useState();

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    fetchStreams();
  }, []);

  const fetchStreams = async () => {
    try {
      let response = await StreamService.fetchStreams();
      setStreams(response.data.data);
      setCursor(response.data.pagination.cursor);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchNextStreams = async () => {
    try {
      let response = await StreamService.fetchAfterStreams(cursor);
      setStreams(response.data.data);
      setCursor(response.data.pagination.cursor);
      handlePageChange(currentPage + 1)
    } catch (e) {
      console.log(e);
    }
  };

  const fetchPrevStreams = async () => {
    try {
      let response = await StreamService.fetchBeforeStreams(cursor);
      setStreams(response.data.data);
      setCursor(response.data.pagination.cursor);
      handlePageChange(currentPage - 1)
    } catch (e) {
      console.log(e);
    }
  };

  

  return (
    <>
      <Container>
        <Row>
        {console.log(streams)}
          {streams.map((stream, index) => {
            return (
              <Col>
                <StreamsCards
                  title={stream.title}
                  image={
                    stream.thumbnail_url
                  }
                  user={stream.user_login}
                  game={stream.game_name}
                  view={stream.viewer_count}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
      <div>
        <Button className="btn-danger"
          onClick={() => fetchPrevStreams()}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <Button className="btn-danger"
          onClick={() => fetchNextStreams()}
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default Accueil;
