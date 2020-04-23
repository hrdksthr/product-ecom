// import { message } from "antd";

class ProductsFUN {
    constructor(props) {
        this.props = props;
        this.state = {
            mainUserData: this.props.mainUserData || {}
        }
    }

    shouldComponentUpdate() {
        return true
    }

    addToCartItem = async (item) => {
        item.email = localStorage.getItem("email");
        await this.props.addToCart(item);
        let { mainUserData: { userProducts, userProductBaseCount, totalPrice } } = this.state;
        const mainProduct = userProducts.findIndex(obj => obj.id === item.id);
        
        if (mainProduct > -1) {
            const obj = userProducts[mainProduct];
            obj.count = Number(obj.count || 0) + 1;
            obj.price = Number(parseFloat(obj.count).toFixed(2)) + Number(Number(item.price).toFixed(2));
            userProducts[mainProduct] = obj;
            userProductBaseCount[item.id] =  (userProductBaseCount[item.id] || 0) + 1
            totalPrice += Number(Number(item.price).toFixed())
        } else {
            userProducts = userProducts.push(item);
            totalPrice += Number(Number(item.price).toFixed())

            userProductBaseCount[item.id] =  (userProductBaseCount[item.id] || 0) + 1
        }
        this.state = {
            ...this.state,
            mainUserData: {
                ...this.state.mainUserData,
                userProducts,
                userProductBaseCount,
                totalPrice
            }
        }
        this.props.history.push('/cart')
    }

    removeToCartItem = async(item) => {
        item.email = localStorage.getItem("email");
        await this.props.removeToCart(item);
        let { mainUserData: { userProducts, totalPrice } } = this.state;
        const mainProduct = userProducts.findIndex(obj => obj.id === item.id);
        let userProductBaseCount = this.state.mainUserData.userProductBaseCount;
        if (mainProduct > -1) {
            const obj = userProducts[mainProduct];
            obj.count = Number(obj.count || 0) - 1;
            userProducts[mainProduct] = obj;
            userProductBaseCount[item.id] =  (userProductBaseCount[item.id] || 0) - 1;
            totalPrice -= Number(Number(item.price).toFixed(2))
        } else {
            userProducts.splice(mainProduct, 1)
            totalPrice -= Number(Number(item.price).toFixed(2))
        }
        this.state = {
            ...this.state,
            mainUserData: {
                ...this.state.mainUserData,
                userProducts,
                userProductBaseCount,
                totalPrice
            }
        }
    }
}
export default ProductsFUN
