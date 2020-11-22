import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";

chai.use(sinonChai);
global.fetch = require("node-fetch");

import {
  procurarGenerico,
  procurarAlbuns,
  procurarArtistas,
  procurarTracks,
  procurarPlaylists,
} from "../src/spotify_wrapper";

describe("Spotify Wrapper", () => {
  let TIPOS;
  let stubedFetch;
  let promise;
  let BANDA;

  before(() => {
    TIPOS = {
      ARTISTA: "artist",
      ALBUM: "album",
      TRACK: "track",
      PLAY_LISTS: "playlists",
    };
  });

  beforeEach(() => {
    BANDA = "OneRepublic";
    stubedFetch = sinon.stub(global, "fetch");
    promise = stubedFetch.resolves({ json: () => ({ album: "name" }) });
  });

  afterEach(() => {
    stubedFetch.restore();
  });

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

  describe("procurarGenerico", () => {
    it("Deve chamar função fetch", () => {
      procurarGenerico();

      expect(stubedFetch).to.have.been.calledOnce;
    });

    context("Pesquisa com tipos", () => {
      it("Deve receber a url correta quando passado UM tipo", () => {
        procurarGenerico(BANDA, TIPOS.ARTISTA);
        expect(stubedFetch).to.have.been.calledWith(
          `https://api.spotify.com/v1/search?q=${BANDA}&type=${TIPOS.ARTISTA}`
        );

        procurarGenerico(BANDA, TIPOS.ALBUM);
        expect(stubedFetch).to.have.been.calledWith(`https://api.spotify.com/v1/search?q=${BANDA}&type=${TIPOS.ALBUM}`);
      });

      it("Deve receber a url correta quando passado VÁRIOS tipos", () => {
        procurarGenerico(BANDA, [TIPOS.ARTISTA, TIPOS.ALBUM]);

        expect(stubedFetch).to.have.been.calledWith(
          `https://api.spotify.com/v1/search?q=${BANDA}&type=${TIPOS.ARTISTA},${TIPOS.ALBUM}`
        );
      });
    });
  });

  describe("procurarArtistas", () => {
    it("Deve chamar função fetch de 'procurarArtistas'", () => {
      procurarArtistas(BANDA);

      expect(stubedFetch).to.have.been.calledOnce;
    });

    it("Deve chamar coma a url correta", () => {
      procurarArtistas(BANDA);

      expect(stubedFetch).to.be.have.calledWith(`https://api.spotify.com/v1/search?q=${BANDA}&type=${TIPOS.ARTISTA}`);
    });
  });

  describe("procurarAlbuns", () => {
    it("Deve chamar função fetch de 'procurarAlbuns'", () => {
      procurarAlbuns(BANDA);

      expect(stubedFetch).to.have.been.calledOnce;
    });

    it("Deve chamar coma a url correta", () => {
      procurarAlbuns(BANDA);

      expect(stubedFetch).to.be.have.calledWith(`https://api.spotify.com/v1/search?q=${BANDA}&type=${TIPOS.ALBUM}`);
    });
  });

  describe("procurarTracks", () => {
    it("Deve chamar função fetch de 'procurarTracks'", () => {
      procurarTracks(BANDA);

      expect(stubedFetch).to.have.been.calledOnce;
    });

    it("Deve chamar coma a url correta", () => {
      procurarTracks(BANDA);

      expect(stubedFetch).to.be.have.calledWith(`https://api.spotify.com/v1/search?q=${BANDA}&type=${TIPOS.TRACK}`);
    });
  });

  describe("procurarPlaylists", () => {
    it("Deve chamar função fetch de 'procurarPlaylists'", () => {
      procurarPlaylists(BANDA);

      expect(stubedFetch).to.have.been.calledOnce;
    });

    it("Deve chamar coma a url correta", () => {
      procurarPlaylists(BANDA);

      expect(stubedFetch).to.be.have.calledWith(
        `https://api.spotify.com/v1/search?q=${BANDA}&type=${TIPOS.PLAY_LISTS}`
      );
    });
  });
});
