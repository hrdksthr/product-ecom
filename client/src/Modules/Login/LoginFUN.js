import { message } from "antd";

class LoginPM {
  constructor(props) {
    this.props = props;
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        try {
          const res = await this.props.postLogin(values);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("email", res.data.email);
          this.props.history.push('/dashboard')
        } catch (error) {
          message.error(error.message , 3)
        }
      }
    })
  }
}
export default LoginPM
