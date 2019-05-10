import React from 'react';
import Media from 'react-media';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Image from 'react-bootstrap/Image'


import axios from 'axios'

//CSS
import './modal.css'


class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      modal: false,
      name: '',
      type: '',
      power: 0,
      pp: 0,
      image: [],
    };

    this.toggle = this.toggle.bind(this);
  }


  toggle(url) {
    let img = [];


    if (this.state.modal === false) {
      axios.get(`${url}`).then((response) => {
        // console.log('toggle axios data: ', response)
        // console.log(url)
        this.setState({
          modal: !this.state.modal,
          name: response.data.name,
          type: response.data.type.name,
          power: response.data.power,
          pp: response.data.pp


        })
      }).then(() => {
        const api_key = "4cf6bqA5DWvW9gTFDkVySuna4eWIRhDq";

        return axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${this.props.pokeName}&g='5'`)
          .then(response => {
            const { data } = response;
            return data.data.map(currentGif => {
              return currentGif.images.original.url;
            });
          })
          .then(gifysUrl => {
            img = gifysUrl;
            this.setState({
              image: (this.image || []).concat(img)
            })
          })

      }).catch(
        e => console.log(e)
      )
    }

    else {
      this.setState({
        modal: false,
      })
    }
  }



  render() {
    return (
      <>
        <Button type="button" color='danger' className='profile btn btn-demo' data-toggle="modal" data-target="#myModal" onClick={e => this.toggle(this.props.url)}>{this.props.name}</Button>
        <Media query={{ maxWidth: 1148 }}>
          {matches =>
            matches ? (
              <Modal size="sm" isOpen={this.state.modal} toggle={this.toggle} className="font pl-5 ml-5 pb-5" style={{ marginRight: "100px", marginBottom: "50px" }}>
                <ModalHeader toggle={this.toggle}></ModalHeader>
                <ModalBody>
                  <h2 className="edit" style={{ fontWeight: "bold" }}>{this.state.name}</h2>
                  <h4 className="edit">type :{this.state.type}</h4>
                  <h4 className="edit">power:{this.state.power}</h4>
                  <h4 className="edit">pp   :{this.state.pp}</h4>
                  <Image className="imgModal" src={this.state.image[Math.floor((Math.random() * this.state.image.length - 1))]} fluid />
                </ModalBody>
                <ModalFooter>
                </ModalFooter>
              </Modal>
            ) : (
                <Modal size="lg" isOpen={this.state.modal} toggle={this.toggle} className="font pl-5 ml-5 pb-5" style={{ marginRight: "150px", marginTop: "250px" }}>
                  <ModalHeader toggle={this.toggle}></ModalHeader>
                  <ModalBody>
                    <h2 className="edit" style={{ fontWeight: "bold" }}>{this.state.name.toUpperCase()}</h2>
                    <h4 className="edit">type : {this.state.type}</h4>
                    <h4 className="edit">power: {this.state.power}</h4>
                    <h4 className="edit">pp   :{this.state.pp}</h4>
                    <Image className="imgModal" src={this.state.image[Math.floor((Math.random() * this.state.image.length - 1))]} fluid />
                  </ModalBody>
                  <ModalFooter>
                  </ModalFooter>
                </Modal>
              )
          }
        </Media>
      </>
    );
  }
}


export default ModalExample;
