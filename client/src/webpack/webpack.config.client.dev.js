import path from 'path'
import devServer from './devServer'
import plugins from './plugins'
import rules from './rules'

const sourcePath = path.join(__dirname, '../../src')

export default {
  entry: {
    vendor: ['react', 'react-dom'],
    main: path.resolve(sourcePath, 'index.js')
  },
  output: {
    path: path.join(__dirname, '../../../dist/'),
    filename: '[name].[hash].js'
  },
  mode: 'development',
  module: {
    rules
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins,
  devServer
}
