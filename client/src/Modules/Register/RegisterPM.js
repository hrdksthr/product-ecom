import { message } from 'antd'

class RegisterPM {
  constructor(props) {
    this.props = props
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        try {
          const res = await this.props.register(values)
          message.success(res.message ,2)
          this.props.history.push('/login')
        } catch (error) {
          message.error(error.message , 3)
        }
      }
    })
  }
}
export default RegisterPM
