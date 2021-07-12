import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

const { TextArea } = Input;


function AppContact() {
    return (
        <div id="contact" className="block contactBlock bgGray">
          <div className="container-fluid">
            <div className="titleHolder">
              <h2>Get in Touch</h2>
              <p>Debitis itaque minima dolorum fuga aperiam inventore, quidem enim</p>
            </div>
            <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
    //   onFinish={onFinish}
    >
      <Form.Item
        name="fullname"
        rules={[
          {
            required: true,
            message: 'Please input your Fullname!',
          },
        ]}
      >
        <Input 
        // prefix={<UserOutlined className="site-form-item-icon" />} 
        placeholder="Fullname" />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email Address!',
          },
        ]}
      >
        <Input
        //   prefix={<LockOutlined className="site-form-item-icon" />}
          type="email"
          placeholder="Email Address"
        />
      </Form.Item>
      <Form.Item
        name="telephone"
        rules={[
          {
            required: true,
            message: 'Please input your Telephone Number!',
          },
        ]}
      >
        <Input 
        // prefix={<UserOutlined className="site-form-item-icon" />} 
        placeholder="Telephone" />
      </Form.Item>
      <Form.Item
        name="subject"
        rules={[
          {
            required: true,
            message: 'Please input your Subject!',
          },
        ]}
      >
        <Input 
        // prefix={<UserOutlined className="site-form-item-icon" />} 
        placeholder="Subject" />
      </Form.Item>
      <Form.Item
        name="message"
      >
        <TextArea 
        // prefix={<UserOutlined className="site-form-item-icon" />} 
        placeholder="Message" />
      </Form.Item>
      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        
      >
        <Checkbox>
        I agree with terms and conditions.
        </Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Submit
        </Button>
        
      </Form.Item>
    </Form>
          </div>
        </div> 
    )
}

export default AppContact;
