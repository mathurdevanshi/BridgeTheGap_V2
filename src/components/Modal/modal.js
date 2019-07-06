import React from 'react';
// import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
// import '../../index.css';
import '../MainPage/main.css';
import '../MainPage/fixed.css';
import { Modal, Button } from 'antd';

class ModalTemplate extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Create Account
        </Button>
        <Modal className="container"
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okButtonProps={{ disabled: true }}
          cancelButtonProps={{ disabled: true }}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}

export default ModalTemplate;
// ReactDOM.render(<ModalTemplate />, document.getElementById('container'));
