import React from 'react'
import { Card, List, Avatar, Button, Row, Col } from 'antd'
import ProductFUN from './../Products/ProductsFUN'
import presenter from '../../HOC/presenter'
import * as Actions from '../../Redux/Actions/Products'
import * as MainActions from '../../Redux/Actions/MainRoute'
import './Cart.css'
import { Link } from 'react-router-dom'

const CartList = props => {
    const {

        pm: {
            state: {
                mainUserData: {
                    userProducts,
                    userProductBaseCount,
                    totalPrice
                }
            },
            addToCartItem,
            removeToCartItem
        },
    } = props
    return (
        <div>
            <Card>

                <List
                    className="demo-loadmore-list"
                    itemLayout="horizontal"
                    dataSource={userProducts}
                    renderItem={item => (
                        <List.Item
                            actions={[
                                <Button onClick={e => removeToCartItem(item)} key="minus" icon={'minus'} />,
                                <span key="coutn">{userProductBaseCount[item.id]} </span>,
                                <Button key="plus" onClick={e => addToCartItem(item)} icon="plus" />,
                            ]}
                        >
                            <List.Item.Meta
                                avatar={
                                    <Avatar src={item.image} />
                                }
                                title={<Link to="/dashboard">{item.name}</Link>}
                            />
                        </List.Item>
                    )}
                />
                <Row>
                    <Col span={20}>
                    </Col>
                    <Col span={4}>
                        Total Price : {totalPrice}
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default (presenter(({ mainUserData, products }) => ({ mainUserData, products }), {
    ...Actions,
    ...MainActions
})(ProductFUN, CartList))
