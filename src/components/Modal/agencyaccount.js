import React from 'react';
// import { Link as RouterLink } from 'react-router-dom';
// import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../MainPage/main.css'
import '../../index.css';
import { Button, Modal, Form, Input, Select } from 'antd';

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const AgencyAccountForm = Form.create({ name: 'form_in_modal' })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Create Account - Agency"
          okText="Submit"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="Name">
              {getFieldDecorator('name', {
                rules: [{ required: true, message: 'Please enter your full name.' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Email">
              {getFieldDecorator('email', {
                rules: [{ required: false, message: 'Please enter a valid email address.' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Phone Number">
              {getFieldDecorator('phone Number')(<Input type="textarea" />)}
            </Form.Item>
            <Form.Item label="Street Address">
              {getFieldDecorator('address')(<Input type="textarea" />)}
            </Form.Item>
            <Form.Item label="City">
              {getFieldDecorator('city')(<Input type="textarea" />)}
            </Form.Item>
            <Form layout="inline">
              <Form.Item label="State">
                <div>
                  <Select defaultValue="california" style={{ width: 111 }} onChange={handleChange}>
                    <Option value="alabama">AL</Option>
                    <Option value="alaska">AK</Option>
                    <Option value="arizona">AZ</Option>
                    <Option value="arkansas">AR</Option>
                    <Option value="california">CA</Option>
                    <Option value="colorado">CO</Option>
                    <Option value="connecticut">CT</Option>
                    <Option value="delaware">DE</Option>
                    <Option value="florida">FL</Option>
                    <Option value="georgia">GA</Option>
                    <Option value="hawaii">HI</Option>
                    <Option value="idaho">ID</Option>
                    <Option value="illinois">IL</Option>
                    <Option value="indiana">IN</Option>
                    <Option value="iowa">IA</Option>
                    <Option value="kansas">KS</Option>
                    <Option value="kentucky">KY</Option>
                    <Option value="louisiana">LA</Option>
                    <Option value="maine">ME</Option>
                    <Option value="maryland">MD</Option>
                    <Option value="massachussetts">MA</Option>
                    <Option value="michigan">MI</Option>
                    <Option value="minnesota">MN</Option>
                    <Option value="mississippi">MS</Option>
                    <Option value="Missouri">MO</Option>
                    <Option value="montana">MT</Option>
                    <Option value="nebraska">NE</Option>
                    <Option value="nevada">NV</Option>
                    <Option value="newhampshire">NH</Option>
                    <Option value="newjersey">NJ</Option>
                    <Option value="newmexico">NM</Option>
                    <Option value="newyork">NY</Option>
                    <Option value="northcarolina">NC</Option>
                    <Option value="northdakota">ND</Option>
                    <Option value="ohio">OH</Option>
                    <Option value="oklahoma">OK</Option>
                    <Option value="oregon">OR</Option>
                    <Option value="pennsylvania">PA</Option>
                    <Option value="rhodeisland">RI</Option>
                    <Option value="southcarolina">SC</Option>
                    <Option value="southdakota">SD</Option>
                    <Option value="tennessee">TN</Option>
                    <Option value="texas">TX</Option>
                    <Option value="utah">UT</Option>
                    <Option value="vermont">VT</Option>
                    <Option value="virginia">VA</Option>
                    <Option value="washington">WA</Option>
                    <Option value="westvirgina">WV</Option>
                    <Option value="wisconsin">WI</Option>
                    <Option value="wyoming">WY</Option>
                  </Select>
                </div>
              </Form.Item>
              <Form.Item label="Zip Code" >
                {getFieldDecorator('zip')(<Input type="textarea" />)}
              </Form.Item>
            </Form>
            {/* <Form.Item label="Address">
              {getFieldDecorator('address')(<Input type="textarea" />)}
            </Form.Item>
            <Form.Item label="City">
              {getFieldDecorator('city')(<Input type="textarea" />)}
            </Form.Item>
            <Form.Item label="State">
              {getFieldDecorator('state')(<Input type="textarea" />)}
            </Form.Item>
            <Form.Item label="Zip Code">
              {getFieldDecorator('zip')(<Input type="textarea" />)}
            </Form.Item> */}
            <Form.Item label="Username">
              {getFieldDecorator('username')(<Input type="textarea" />)}
            </Form.Item>
            <Form.Item label="Password">
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
          Create Account
        </Button>
        <AgencyAccountForm
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
