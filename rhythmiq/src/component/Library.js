import React from "react";
import LibraryItem from "./LibraryItem";

const Library = ({ playlists, selectedPlaylist }) => {
  return (
    <div className=" text-light theme-bg">
      <h3 className="py-3 text-center">Playlist</h3>
      <div className="container">
        <div className="row g-3">
          {playlists.length === 0 ? (
            <h1 className="text-center text-warning py-5">
              You have not added <br /> a playlist
            </h1>
          ) : (
            playlists.map((playlist) => (
              <LibraryItem
                key={playlist.id}
                playlist={playlist}
                selectedPlaylist={selectedPlaylist}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Library;
