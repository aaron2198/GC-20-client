import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import axios from 'axios';

import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import ConfigModal from './components/ConfigModal';
import Graph from './components/graphs/Graph';


class App extends React.Component {
  constructor(props){
    super(props);

    this.setIP = this.setIP.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleGetConfig = this.handleGetConfig.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.state = {
      deviceIP: '',
      ipField: '',
      dataData: [],
      deviceConfig: {
        "My": "Config"
      },
      configModal: false
    }
  }

  onChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  setIP() {
    var newIP = this.state.ipField;
    this.setState({
      deviceIP: newIP
    });
  }

  handleGetConfig() {
    this.getDeviceConfig();
  }

  getDeviceConfig() {
    axios.get('http://' + this.state.deviceIP + '/config', {mode:'cors'})
    .then(res => {
      this.setState({
        deviceConfig: {...res.data},
        configModal: true
      });
    })
    .catch(err => {
      console.log("Error: " + err);
    });
  }

  closeModal(type) {
    if (type === "config") {
      this.setState({
        configModal: false
      })
    }
  }


  render(){
    return (
      <div className="App">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand>GC-20 Client</Navbar.Brand>
          <Form inline>
            <Form.Group controlId="ipField">
              <FormControl type="text" placeholder="Device IP" className="mr-sm-2" onChange={this.onChange} value={this.state.ipField}/>
              <Button onClick={this.setIP} variant="outline-success">Apply</Button>
              <Button onClick={this.handleGetConfig} variant="outline-success">Config</Button>
            </Form.Group>
          </Form>
        </Navbar>
        <ConfigModal show={this.state.configModal} close={() => this.closeModal("config")} deviceConfig={this.state.deviceConfig}/>
        <Graph deviceIP={this.state.deviceIP}/>
      </div>
    );
  }
}

export default App;
