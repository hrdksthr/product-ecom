import path from 'path'
import webpack from 'webpack'
import OpenBrowserPlugin from 'open-browser-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin'

const plugins = () => {
  return [
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({ url: 'http://localhost:3002' }),
    new FriendlyErrorsWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../../public/index.html'),
      filename: './index.html'
    })
  ]
}
export default plugins()
