import React from "react";
import { useEffect, useState } from "react";
import Library from "./Library";
import "./Player.css";
import Search from "./Search";
import Playlist from "./PlayList";
import Home from "./Home";
import Navbar from "./Navbar";
import { Routes, Route, useNavigate } from "react-router-dom";
import Player from "./Player";

function App() {
  const navigator = useNavigate();
  const [songs, setSongs] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);
  const [playlist, setPlaylist] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [playlistName, setPlaylistName] = useState("");
  const [playsong, setPlaysong] = useState([]);
  const [playlistId, setPlaylistid] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  useEffect(() => {
    fetch("http://localhost:3000/song")
      .then((res) => res.json())
      .then((songs) => setSongs(songs));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/playlists")
      .then((res) => res.json())
      .then((collection) => setPlaylist(collection));
  }, []);

  function handleSelection(selected) {
    setSelectedGenre(selected);
  }

  function addPlaylistname(obj) {
    setPlaylist([...playlist, obj]);
  }

  function handleSelectedPlaylist(id) {
    playlist.map((item) => {
      if (item.id === id) {
        setPlaylistName(item.name);
        setPlaysong(item.songs);
        setPlaylistid(item.id);
        navigator("/playlist");
      }
    });
  }

  function OnclickedInAdd(id) {
    setCurrentSongIndex(() => id - 1);
  }

  function handleAddNewSong(song) {
    setPlaysong([...playsong, song]);
  }

  return (
    <div className="App">
      <Navbar playlist={playlist} selectedPlaylist={handleSelectedPlaylist} />
      <Routes>
        <Route
          path="/"
          element={<Home songs={songs} onSelection={handleSelection} />}
        ></Route>
        <Route
          path="/library"
          element={
            <Library
              playlists={playlist}
              selectedPlaylist={handleSelectedPlaylist}
            />
          }
        ></Route>
        <Route
          path="/playlist"
          element={
            <Playlist
              songs={songs}
              selected={selectedGenre}
              onAddPlaylist={addPlaylistname}
              playlistTitle={playlistName}
              playsong={playsong}
              playlistId={playlistId}
              clickedInAdd={OnclickedInAdd}
              playlist={playlist}
              addNewSong={handleAddNewSong}
              setSearch={setSearch}
              search={search}
            />
          }
        ></Route>
        <Route
          path="/player"
          element={
            <Player
              currentSongIndex={currentSongIndex}
              setCurrentSongIndex={setCurrentSongIndex}
              nextSongIndex={nextSongIndex}
              songs={songs}
            />
          }
        ></Route>
        <Route
          path="/search"
          element={
            <Search
              songs={songs}
              search={search}
              setSearch={setSearch}
              clickedInAdd={OnclickedInAdd}
            ></Search>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
