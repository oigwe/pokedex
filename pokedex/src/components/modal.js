import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios'
import '../assets/css/modal.css'
import Image from 'react-bootstrap/Image'


class ModalExample extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
  
        modal: false,
        name: '',
        type: '',
        power:0,
        pp: 0,
        image: [],
      };
  
      this.toggle = this.toggle.bind(this);
    }
  
  
    toggle( url) {
      let img = [];

  
      if(this.state.modal === false){
        axios.get(`${url}`).then((response)=>{
          // console.log('toggle axios data: ', response)
          // console.log(url)
          this.setState({
              modal: !this.state.modal,
              name: response.data.name,
              type: response.data.type.name,
              power:response.data.power,
              pp: response.data.pp
            
  
            })
        }).then( ()=> {
          const api_key = "4cf6bqA5DWvW9gTFDkVySuna4eWIRhDq";

          return axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${this.props.pokeName}&g='5'`)
            .then(response => {
              const {data} = response; 
              return data.data.map(currentGif => { 
                      return currentGif.images.original.url;
                    }); 
              })
            .then(gifysUrl => {
              img = gifysUrl;
              this.setState({
                image: (this.image || []).concat(img)
              })
              // console.log('stateofModal: ', this.state)
            })

        }).catch(
          e=>console.log(e)
        )}
      
      else{
          this.setState({
              modal: false,
          })
      }
    }
  
  
  
  
    render() {

        return (
<>
        <Button color='danger' className='profile' onClick={e=>this.toggle(this.props.url)}>{this.props.name}</Button> 
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}> 
          <ModalHeader toggle={this.toggle}></ModalHeader>
          <ModalBody>
              <h2 className="edit">{this.state.name}</h2>
              <h2 className="edit">type : {this.state.type}</h2>
              <h2 className="edit">power: {this.state.power}</h2>
              <h2 className="edit">pp   :{this.state.pp}</h2>
              <Image className="imgModal" src={this.state.image[Math.floor((Math.random() * this.state.image.length-1))]} fluid/>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </Modal>
        </>
    );
}
}


export default ModalExample;