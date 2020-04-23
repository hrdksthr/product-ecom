import React from 'react'
import { Layout, Icon, Button, Row, Col, Badge } from 'antd'
import { Route, Switch, Redirect, Link } from 'react-router-dom'
import * as Actions from './../Redux/Actions/MainRoute';
import * as ProductAction from './../Redux/Actions/Products';

import asyncComponent from '../HOC/asyncRender'
import presenter from '../HOC/presenter'
import ModuleRouteFun from './ModuleRouteFUN'

const { Header, Content } = Layout
const redirect = pathname => () => {
    return <Redirect to={{ pathname }} />
}

const Dashboard = asyncComponent(() =>
    import('./Products/index').then(module => module.default)
)

const Cart = asyncComponent(() =>
    import('./Cart/index').then(module => module.default)
)
const ContentRoute = (props) => {
    return (
        <Switch>
            <Route exact path="/" render={redirect('dashboard')} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/cart" component={Cart} />
        </Switch>
    )
}


class ModuleRoutes extends React.Component {
    componentDidMount() {
        const {
            props: {
                pm: {
                    getBaseData
                }
            }
        } = this;
        getBaseData()
    }

    render() {
        const { props: {
            pm: {
                state: {
                    mainUserData: {
                        user,
                        userProductsCount
                    }
                },
                handleLogout
            }
        } } = this;
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Row>
                            <Col span={15}>
                                <h3> Welcome,
                                    <b> {user.fname} </b>
                                </h3>
                            </Col>
                            <Col span={4}>
                                <Link to="/cart">
                                    <Badge count={userProductsCount}>
                                        <Icon type="shopping-cart" />
                                    </Badge>
                                </Link>
                            </Col>
                            <Col span={5}>
                                <Button onClick={handleLogout}>Logout</Button>
                            </Col>
                        </Row>
                    </Header>
                    <Content style={{ margin: '0 16px', height: "90vh", overflowY: "scroll" }}>
                        <ContentRoute />
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
export default presenter((store) => store, {
    ...Actions,
    ...ProductAction
})(ModuleRouteFun, ModuleRoutes)
