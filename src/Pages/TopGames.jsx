import React from "react";
import { useState } from "react";
import GamesService from "../Services/GamesService";
import { useEffect } from "react";
import GamesCards from "../Components/GamesCards";
import { Button, Col, Container, Row } from "react-bootstrap";

const TopGames = () => {
  const [games, setGames] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cursor, setCursor] = useState();
  const [search, setSearch] = useState(false);

  const fetchGames = async () => {
    try {
      let response = await GamesService.fetchGames();
      setGames(response.data.data);
      setCursor(response.data.pagination.cursor);
      console.log(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const fetchNextStreams = async () => {
    try {
      let response = await GamesService.fetchAfterGames(cursor);
      setGames(response.data.data);
      setCursor(response.data.pagination.cursor);
      handlePageChange(currentPage + 1)
    } catch (e) {
      console.log(e);
    }
  };

  const fetchPrevStreams = async () => {
    try {
      let response = await GamesService.fetchBeforeGames(cursor);
      setGames(response.data.data);
      setCursor(response.data.pagination.cursor);
      handlePageChange(currentPage - 1)
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  const Search = async () => {
    const inputElement = document.getElementById("input");
    const inputValue = " " + inputElement.value;
    let response;
    try {
       if (inputValue == ' ') {
        response = await GamesService.fetchGames();
        setSearch(false);
        }else{
          response = await GamesService.searchGames(inputValue);
          setSearch(true);
        }
        console.log(response);
        setGames(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
    <input type="text" id="input" onChange={() => Search()} />
      <Container>
        <Row>
          {games.map((game, index) => {
            return (
              <Col>
                <GamesCards
                  title={game.name}
                  image={game.box_art_url}
                  id={game.id}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
      <div>
        <Button
          className="btn-danger"
          onClick={() => fetchPrevStreams()}
          disabled={currentPage === 1}
          hidden={search===true}
        >
          Previous
        </Button>
        <Button className="btn-danger" onClick={() => fetchNextStreams()} hidden={search===true}>
          Next
        </Button>
      </div>
    </>
  );
};

export default TopGames;
