import React from "react";
import { Card, Row, Col, Badge, Button } from "antd"
import ProductFUN from "./ProductsFUN"
import presenter from "../../HOC/presenter";
import * as Actions from './../../Redux/Actions/Products'
import * as MainActions from './../../Redux/Actions/MainRoute'
import "./Product.css"
import { Link } from "react-router-dom";

const ProductList = props => {
    const {

        pm: {
            state: {
                mainUserData: {
                    userProducts,
                    userProductBaseCount
                }
            },
            addToCartItem
        },
        products,
    } = props;
    return (
        <div>
            <Card className="main-list" loading={products.isLoading}>
                <Row gutter={10}>
                    {products.products.map((item) => (
                        <Col span={4} style={{ margin: "5px 17px" }} key={item.id}>
                            <Card
                                hoverable
                                style={{ width: 220 }}
                                cover={<img alt={item.name} src={item.image} style={{ height: "140px", width: 220 }} />}
                            >
                                <Card.Meta title={
                                    <div>
                                        <span><b>{item.name}</b></span>
                                        <span style={{ float: "right" }}> Rs. <b>{item.price} </b></span>
                                    </div>
                                } description={
                                    userProducts.find(obj => obj.id === item.id) ?
                                        <Link to="/cart">
                                            <Badge count={userProductBaseCount[item.id]} >
                                                <Button>Go To Cart</Button>
                                            </Badge>
                                        </Link>
                                        :
                                        <Button
                                            icon="plus"
                                            onClick={e => { addToCartItem(item) }}
                                            style={{ float: "right" }}
                                            type="primary"
                                        >
                                            Add To Cart
                                            </Button>
                                } />
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Card>
        </div>
    )
}

export default (presenter(({ mainUserData, products }) => ({ mainUserData, products }), {
    ...Actions,
    ...MainActions
})(ProductFUN, ProductList))
