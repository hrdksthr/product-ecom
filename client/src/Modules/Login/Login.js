import React from 'react'
import presenter from './../../HOC/presenter'
import { Form, Icon, Input, Button } from 'antd'
import * as Actions from './../../Redux/Actions/login'
import './Login.css'
import loginFUN from './LoginFUN'
import { Link } from 'react-router-dom'
const FormItem = Form.Item

const Login = props => {
  const { getFieldDecorator } = props.form
  return (
    <Form onSubmit={props.pm.handleSubmit} className="login-form">
      <FormItem>
        {getFieldDecorator('email', {
          rules: [{ required: true, message: 'Please input your username!' }]
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
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />
        )}
      </FormItem>
      <Button 
        type="primary" 
        htmlType="submit" 
        className="login-form-button"
        loading={props.isLoading} 
        disabled={props.isLoading}
      >
        Log in
      </Button>
      <Link to="/register" >
        <Button type="primary" disabled={props.isLoading} className="login-register-button">
          Register
      </Button>
      </Link>
    </Form>
  )
}

export default Form.create()(presenter(({ login }) => login, Actions)(loginFUN, Login))
