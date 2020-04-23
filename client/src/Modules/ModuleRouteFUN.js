class ModuleRouteFun {
    constructor(props) {
        this.props = props;
        console.log("props",props)
        this.state = {
            login: props.login,
            mainUserData: props.mainUserData,
            products: props.products,
        }
    }
    
    getBaseData = async () => {
        if(localStorage.getItem("email")) {
            await this.props.mainUserInfo({
                email: localStorage.getItem("email")
            })
            await this.props.productList()
        }
    }

    handleLogout = () => {
        localStorage.clear();
        this.props.history.push('/login')
    } 
}

export default ModuleRouteFun