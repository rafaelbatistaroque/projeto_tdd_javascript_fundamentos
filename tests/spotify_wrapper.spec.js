import { expect } from "chai";
import {
  procurarGenerico,
  procurarAlbuns,
  procurarArtistas,
  procurarTracks,
  procurarPlaylists,
} from "../src/spotify_wrapper";

describe.only("Spotify Wrapper", () => {
  describe("Smoke tests", () => {
    it("Deve importar o bibliteca 'procurarGenerico'", () => {
      expect(procurarGenerico).to.be.exist;
    });
    it("Deve importar o bibliteca 'procurarAlbuns'", () => {
      expect(procurarAlbuns).to.be.exist;
    });
    it("Deve importar o bibliteca 'procurarArtistas'", () => {
      expect(procurarArtistas).to.be.exist;
    });
    it("Deve importar o bibliteca 'procurarTracks'", () => {
      expect(procurarTracks).to.be.exist;
    });
    it("Deve importar o bibliteca 'procurarPlaylists'", () => {
      expect(procurarPlaylists).to.be.exist;
    });
  });
});
