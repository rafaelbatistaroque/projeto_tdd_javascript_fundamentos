const procurarGenerico = (query, type) => {
  fetch(`https://api.spotify.com/v1/search?q=${query}&type=${type}`).then((data) => data.json());
};
const procurarAlbuns = (query) => procurarGenerico(query, "album");
const procurarArtistas = (query) => procurarGenerico(query, "artist");
const procurarTracks = (query) => procurarGenerico(query, "track");
const procurarPlaylists = (query) => procurarGenerico(query, "playlists");

export { procurarGenerico, procurarAlbuns, procurarArtistas, procurarTracks, procurarPlaylists };
