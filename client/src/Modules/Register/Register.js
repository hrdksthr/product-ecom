import React from 'react'
import presenter from '../../HOC/presenter'
import { Col, Row, Form, Icon, Input, Button } from 'antd'
import * as Actions from '../../Redux/Actions/register'
import "./Register.css"
import registerPM from './RegisterPM'
import { Link } from 'react-router-dom'
const FormItem = Form.Item

const Register = props => {
  const { getFieldDecorator } = props.form
  return (
    <Form onSubmit={props.pm.handleSubmit} className="login-form">
      <Row gutter={10}>
        <Col span={12}>
          <FormItem>
            {getFieldDecorator('fname', {
              rules: [
                {
                  required: true,
                  message: 'Please input your first name!'
                }
              ]
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="First Name"
              />
            )}
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem>
            {getFieldDecorator('lname', {
              rules: [
                {
                  required: true,
                  message: 'Please input your last name!'
                }
              ]
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Last Name"
              />
            )}
          </FormItem>
        </Col>
      </Row>
      <FormItem>
        {getFieldDecorator('email', {
          rules: [
            {
              required: true,
              message: 'Please input your username!'
            },
            {
              type: 'email',
              message: "please enter proper email"
            }
          ]
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Email"
          />
        )}
      </FormItem>
      <FormItem>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your Password!' }]
        })(
          <Input.Password
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Password"
          />
        )}
      </FormItem>
      <Button type="primary" htmlType="submit" className="login-form-button">
        Register
      </Button>
      <Link to="/login" >
        <Button type="primary" className="login-register-button">
          Back to Login
      </Button>
      </Link>
    </Form>
  )
}

export default Form.create()(presenter(({register}) => register, Actions)(registerPM, Register))
