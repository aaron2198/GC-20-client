import React from 'react';

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ModalBody from 'react-bootstrap/ModalBody';

class ConfigModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            deviceConfig: {...props.deviceConfig}
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps != this.props){
            this.setState({
                deviceConfig: {...this.props.deviceConfig}
              })
        }
      }

    render(){
        return(
            <Modal show={this.props.show} onHide={this.props.close}>
            <Modal.Header closeButton>
              <Modal.Title>Device Configuration</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId={'conversionFactor'}>
                        <Form.Label>Conversion Factor</Form.Label>
                        <Form.Control readOnly={true} type="text" value={this.props.deviceConfig.conversionFactor} />
                    </Form.Group>
                    <Form.Group controlId={'doseUnits'}>
                        <Form.Label>Dose Units</Form.Label>
                        <Form.Control readOnly={true} type="text" value={this.props.deviceConfig.doseUnits} />
                    </Form.Group>
                    <Form.Group controlId={'isLogging'}>
                        <Form.Label>Logging</Form.Label>
                        <Form.Control readOnly={true} type="text" value={this.props.deviceConfig.isLogging} />
                    </Form.Group>
                    <Form.Group controlId={'deviceMode'}>
                        <Form.Label>Device Mode</Form.Label>
                        <Form.Control readOnly={true} type="text" value={this.props.deviceConfig.deviceMode} />
                    </Form.Group>
                    <Form.Group controlId={'channelAPIkey'}>
                        <Form.Label>API Key</Form.Label>
                        <Form.Control readOnly={true} type="text" value={this.props.deviceConfig.channelAPIkey} />
                    </Form.Group>
                    <Form.Group controlId={'addr'}>
                        <Form.Label>Log Address</Form.Label>
                        <Form.Control readOnly={true} type="text" value={this.props.deviceConfig.addr} />
                    </Form.Group>
                    <Form.Group controlId={'ssid'}>
                        <Form.Label>Network Name</Form.Label>
                        <Form.Control readOnly={true} type="text" value={this.props.deviceConfig.ssid} />
                    </Form.Group>
                    <Form.Group controlId={'password'}>
                        <Form.Label>Network Password</Form.Label>
                        <Form.Control readOnly={true} type="text" value={this.props.deviceConfig.password} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.close} variant="secondary">Close</Button>
            </Modal.Footer>
            </Modal>
        )
    }
}

export default ConfigModal;