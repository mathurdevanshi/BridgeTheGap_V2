import React from 'react';
// import { Link as RouterLink } from 'react-router-dom';
// import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../MainPage/main.css'
import '../../index.css';
import { Button, Modal, Form, Input, Select, } from 'antd';
// import { FormGroup } from '@material-ui/core';

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const HomelessAccountForm = Form.create({ name: 'form_in_modal' })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Please Sign In"
          okText="Submit"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">

            <br></br>
            <Form.Item label="Username" style={{ width: 408 }}>
              {getFieldDecorator('username')(<Input type="textarea" />)}
            </Form.Item>
            <Form.Item label="Password" style={{ width: 408 }}>
              {getFieldDecorator('password')(<Input type="textarea" />)}
            </Form.Item>

            {/* <Form.Item className="collection-create-form_last-form-item">
              {getFieldDecorator('modifier', {
                initialValue: 'public',
              })(
                <Radio.Group>
                  <Radio value="public">Public</Radio>
                  <Radio value="private">Private</Radio>
                </Radio.Group>,
              )}
            </Form.Item> */}
          </Form>
        </Modal>
      );
    }
  },
);

class ModalTemplate extends React.Component {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = () => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log('Received values of form: ', values);
      form.resetFields();
      this.setState({ visible: false });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Sign In
        </Button>
        <HomelessAccountForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

export default ModalTemplate;
// ReactDOM.render(<CollectionsPage />, document.getElementById('container'));