import React, { useState } from "react";
import PlayListDisplay from "./PlayListDisplay";
import PlaylistAdd from "./PlaylistAdd";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function Playlist({
  songs,
  selected,
  onAddPlaylist,
  playlistTitle,
  playsong,
  clickedInAdd,
  playlist,
  addNewSong,
  setSearch,
  search,
}) {
  const navigator = useNavigate();
  const [mySongs, setMySongs] = useState(playsong);
  const [title, setTitle] = useState([]);
  const [show, setShow] = useState(false);
  const [playlistName, setPlaylistName] = useState({
    name: "yes",
    songs: [],
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleAddSong(selectedid) {
    songs.map((song) => {
      if (mySongs.length === 0) {
        if (song.id === selectedid) {
          setMySongs([...mySongs, song]);
          let newSongs = [...mySongs, song];
          //      fetch(`http://localhost:3000/playlists/${song.id}`, {
          //   method:'PATCH',
          //   headers:{
          //     "Content-Type":"application/json",
          //   },
          //   body:JSON.stringify({
          //     songs:newSongs,
          //   })
          // }).then(r=>r.json())
          // .then(item=>console.log(item))
        }
      } else {
        for (let item of mySongs) {
          // console.log(item)
          if (item.id === selectedid) {
            return setMySongs(mySongs);
          } else if (song.id === selectedid) {
            addNewSong(song);
            setMySongs([...mySongs, song]);
          }
        }
      }
    });
  }

  function handleRemoveSong(id) {
    let news = mySongs.filter((song) => song.id !== id);
    setMySongs(news);
  }

  function handleSubmitPlaylist(event) {
    event.preventDefault();
    console.log(playlistName);
    fetch("http://localhost:3000/playlists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(playlistName),
    })
      .then((res) => res.json())
      .then((data) => {
        onAddPlaylist(data);
        navigator("/library");
      });
  }

  function handleAddPlaylist(event) {
    setPlaylistName({ ...playlistName, name: event.target.value });
  }

  function selectPlaylist() {
    navigator("/library");
  }

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  let found = songs.filter((item) => {
    let itemName = item.name.toLocaleLowerCase();
    let itemCategory = item.category.toLocaleLowerCase();
    let itemArtist = item.artist.toLocaleLowerCase();

    if (search === "") {
      return true;
    } else if (
      itemName.includes(search) ||
      itemCategory.includes(search) ||
      itemArtist.includes(search)
    ) {
      return item;
    }
  });

  return (
    <div className=" theme-bg text-light">
      <div className="top-playlist">
        <div
          className="d-md-flex justify-content-start align-items-center px-4"
          style={{ height: "40%" }}
        >
          <div
            className="image-holder p-4"
            style={{ height: "20rem", width: "20rem" }}
          >
            <img
              src="https://images.pexels.com/photos/11115606/pexels-photo-11115606.jpeg?auto=compress&cs=tinysrgb&w=600"
              class="img-fluid"
              alt=""
            />
          </div>
          <div className="text-holder ms-5">
            {playlistTitle.length === 0 ? (
              <div>
                <button className="btn btn-success" onClick={selectPlaylist}>
                  Select a Playlist
                </button>
                <p className="text-center">OR</p>
                <Button variant="warning" onClick={handleShow}>
                  Add Playlist
                </Button>
              </div>
            ) : (
              <div>
                <p>Playlist</p>
                <h2>{playlistTitle}</h2>
                <Button variant="warning" onClick={handleShow}>
                  Add a New Playlist
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} className="text-center">
        <Modal.Header closeButton className="bg-success text-light">
          <Modal.Title>Playlist Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmitPlaylist}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label></Form.Label>
              <Form.Control
                type="text"
                onChange={handleAddPlaylist}
                placeholder="Enter desired name"
              />
            </Form.Group>
            <Button variant="success" type="submit" onClick={handleClose}>
              Create
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <div
        className="px-5"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.1)", opacity: "1" }}
      >
        <div className="selected-playlist">
          {mySongs.length === 0 ? (
            <h5 className="text-center py-4">
              Search any song to add to your playlist
            </h5>
          ) : (
            <table class="table table-borderless text-light">
              <thead>
                <tr className="text-success">
                  <th scope="col">Poster</th>
                  <th scope="col">Title</th>
                  <th scope="col">Artist</th>
                  <th scope="col">Genre</th>
                  <th scope="col">Play</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {mySongs.map((song) => (
                  <PlaylistAdd
                    song={song}
                    onDisplay={handleRemoveSong}
                    clickedInAdd={clickedInAdd}
                  />
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
      {/* search input */}
      <div className="px-5 py-2">
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search for a song"
          className="py-2 px-2"
        />
      </div>
      {/* searched items table */}
      <div className="searched-playlist px-5">
        <table class="table text-light table-borderless">
          <thead className="text-success">
            <tr>
              <th scope="col">Poster</th>
              <th scope="col">Title</th>
              <th scope="col">Artist</th>
              <th scope="col">Genre</th>
              <th scope="col">Play</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {selected.length === 0
              ? found.map((song) => (
                  <PlayListDisplay
                    song={song}
                    addSong={handleAddSong}
                    clickedInAdd={clickedInAdd}
                  />
                ))
              : selected.map((song) => (
                  <PlayListDisplay
                    song={song}
                    addSong={handleAddSong}
                    clickedInAdd={clickedInAdd}
                  />
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Playlist;
