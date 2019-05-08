import React, { Component } from 'react';
import Media from 'react-media';

// APIs
import axios from 'axios';

//Components
import Card from './components/cards';
import Pokelist from './services/pokelist';
import Profile from './components/profile';
import Modal from './components/modal';
import Footer from './components/footer';
import Dropdown from './components/dropdown';
import Header from './components/header';
import Buttons from './components/button';

//CSS
import './App.css';
import './assets/device/devices.min.css';






class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pokemon: [],
      view: false,
      pokemonProfile: [],
      pokemonChosenIdx: 0,
      show: false,
      modal: false,
      searchbar: Pokelist,
      display: [],
      load: true,
      inputValue: "",
      windowSize: 0,
    }
  }

  homeLink = () => {
    this.setState({ view: false })
  }

  updateState = (arr) => {

    this.setState({
      pokemon: (this.state.pokemon || []).concat(arr)
    })
  }

  loadMore = () => {
    const soundObject = new Audio(require('./assets/pokemon-gotta-catch-em-all-lyrics-_audiotrimmer.com_.mp3'));
    soundObject.play();


    const next = this.state.pokemon.length;

    return axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${next}&limit=20`)
      .then((response) => {

        const pokeArray = response.data.results;
        const newArr = [];

        pokeArray.map((e, idx) => {

          newArr.push({
            name: e.name,
            icon: `https://img.pokemondb.net/sprites/sun-moon/icon/${e.name}.png`,
            id: next + idx + 1
          })
        })
        this.updateState(newArr)

      })
  }


  pagination() {

    return axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
      .then((response) => {

        const pokeArray = response.data.results;
        const newArr = [];

        pokeArray.map((e, idx) => {

          newArr.push({
            name: e.name,
            icon: `https://img.pokemondb.net/sprites/sun-moon/icon/${e.name}.png`,
            id: idx + 1
          })
        })

        this.updateState(newArr)

      })
  }

  toProfile = (name) => {
    const profileArr = []
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => {
        const pokemonData = response.data

        const spritesKeys = Object.keys(pokemonData.sprites)
        const spritesList = spritesKeys.map((e, i) => {
          return {
            name: `${e}`,
            url: `${response.data.sprites[e]}`
          }

        })
        profileArr.push(
          {
            name: response.data.name,
            id: response.data.id,
            profilePic: `https://img.pokemondb.net/artwork/${name}.jpg`,
            sprites: spritesList,
            types: pokemonData.types.map(e => {
              return e.type.name
            }),
            stats: pokemonData.stats.map(e => {
              return [
                e.stat.name,
                e.base_stat,
              ]
            }),
            moves: pokemonData.moves.map(e => {
              return [
                e.move.name, e.move.url,
              ]
            })
          })
      }).then(() => {
        this.setState({
          view: true,
          pokemonProfile: (this.state.pokemonProfile || []).concat(profileArr),
        }, () => {
          this.setState({
            pokemonChosenIdx: this.state.pokemonProfile.length - 1
          })
        })

      })
  }

  modal = () => {
    this.setState({ modal: true });

  }
  hideModal = () => {
    this.setState({ show: false });
  };


  handletyping = (e) => {
    const type = e.target.value;
    const filterPokeList = (list) => {
      const results = this.state.searchbar.filter(searchbar => searchbar.toLowerCase().includes(list))
      this.setState({ display: results, inputValue: type })
    }
    if (type.length === 0) {
      this.setState({ display: [] })
    }
    else if (isNaN(type)) {
      filterPokeList(type)
    }
    else {
      const index = Number(type) - 1
      const results = [this.state.searchbar[index]]
      this.setState({ display: results })
    }
  }

  handleDropdownClick = (e) => {
    this.toProfile(e.target.innerHTML.toLowerCase());
    this.setState({ inputValue: "" })
  }

  /*handleOnScroll = () => {

    const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight || window.innerHeight;
    const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;


    if (scrolledToBottom && this.state.view === false) {
      setTimeout(this.loadMore(), 3000)
    }
  }*/


  componentDidMount() {
    this.pagination().then(() => {
    });

    /*window.addEventListener('scroll', this.handleOnScroll);*/

  }


  render() {
    return (<>
      <div className="container-fluid font" style={{
        backgroundColor: "#2a2a72",
        backgroundImage: "linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)"
      }}>
      <div className="row pt-5 mb-3"></div>
      <div className="row">
      <div className="col">
        <Media query={{ maxWidth: 1148 }}>
          {matches =>
            matches ? (
              <div className="marvel-device iphone-x">
                <div className="notch">
                  <div className="camera"></div>
                  <div className="speaker"></div>
                </div>
                <div className="top-bar"></div>
                <div className="sleep"></div>
                <div className="bottom-bar"></div>
                <div className="volume"></div>
                <div className="overflow">
                  <div className="shadow shadow--tr"></div>
                  <div className="shadow shadow--tl"></div>
                  <div className="shadow shadow--br"></div>
                  <div className="shadow shadow--bl"></div>
                </div>
                <div className="inner-shadow"></div>
                <div className="screen">
                    <div className="container-fluid backgroundColor">
                      <Header onChange={this.handletyping} inputValue={this.state.inputValue} click={this.handleDropdownClick} />
                      <div className="row">
                        <div className="col">
                          <div className="container">
                            <div className="searchDisplay">
                              {this.state.inputValue === "" ? null : this.state.display.slice(0, 5).map((e, i) => {
                                return <Dropdown click={this.handleDropdownClick} name={e} />
                              })
                              }
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="container" style={{ overflow: "scroll", height: "625px" }}>
                        {this.state.view === false ? this.state.pokemon.map((e, i) => {
                          return <Card key={i} pokeData={e} profile={this.toProfile} />

                        }) : <Profile pokemonClicked={this.state.pokemonProfile[this.state.pokemonChosenIdx]} showState={this.state.show} modal={this.modal} click={this.homeLink} />
                        }
                        {
                          this.state.view === false ? <Buttons loadMorePoke={this.loadMore} /> : null
                        }
                        {
                          this.state.modal ? <Modal /> : null
                        }
                      </div>
                    </div>
                  </div>
                  <div className="home"></div>
                </div>
            ) : (
                <div className="marvel-device ipad silver landscape" style={{ margin: "auto auto" }}>
                  <div className="camera"></div>
                  <div className="screen">
                    <div className="container-fluid backgroundColor">
                      <Header onChange={this.handletyping} inputValue={this.state.inputValue} click={this.handleDropdownClick} />
                      <div className="row">
                        <div className="col">
                          <div className="container">
                            <div className="searchDisplay">
                              {this.state.inputValue === "" ? null : this.state.display.slice(0, 5).map((e, i) => {
                                return <Dropdown click={this.handleDropdownClick} name={e} />
                              })
                              }
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="container" style={{ overflow: "scroll", height: "400px" }}>
                        {this.state.view === false ? this.state.pokemon.map((e, i) => {
                          return <Card key={i} pokeData={e} profile={this.toProfile} />

                        }) : <Profile pokemonClicked={this.state.pokemonProfile[this.state.pokemonChosenIdx]} showState={this.state.show} modal={this.modal} click={this.homeLink} />
                        }
                        {
                          this.state.view === false ? <Buttons loadMorePoke={this.loadMore} /> : null
                        }
                        {
                          this.state.modal ? <Modal /> : null
                        }
                      </div>
                      <Footer />
                    </div>
                  </div>
                  <div className="home"></div>
                </div>
              )
          }
        </Media>
          </div>
        <div className="row py-5"> </div>
        </div>
      </div>
      <Footer/>
      </>
    )
  }
}

export default App;

/*<div className="container-fluid backgroundColor">
          <Header onChange={this.handletyping} />
          <div className="row">
            <div className="col"></div>
            <div className="col my-3">
              <div className="container-fluid searchDisplay" style={{ width: "90%" }}>
                {this.state.display.slice(0, 5).map((e, i) => {
                  return <Dropdown click={this.handleDropdownClick} name={e} />
                })
                }
              </div>
            </div>
            <div className="col"></div>
          </div>
          <div className="container cards">
            {this.state.view === false ? this.state.pokemon.map((e, i) => {
              return <Card key={i} pokeData={e} profile={this.toProfile} />

            }) : <Profile pokemonClicked={this.state.pokemonProfile[this.state.pokemonChosenIdx]} showState={this.state.show} modal={this.modal} click={this.homeLink} />
            }
            {
              this.state.view === false ? <Buttons loadMorePoke={this.loadMore} /> : null
            }
            {
              this.state.modal ? <Modal /> : null
            }
          </div>
          <Footer />
        </div>*/

/*<div className="container searchDisplay">
          {this.state.display.slice(0, 5).map((e, i) => {
            return <Dropdown click={this.handleDropdownClick} name={e} />
          })
          }
        </div>*/