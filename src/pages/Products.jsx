import PropTypes from "prop-types"
import ProductList from "../components/ProductList"
import ProductsPanel from "../components/ProductsPanel"
import "../styles/pages/Products.scss"

export default function Products ({
    label
}) {

    return (
        <div className="products">
            <div>
                <p className="products__label">{label}</p>
            </div>
            <ProductsPanel />
            <ProductList />
        </div>
    )
}

Products.propTypes = {
    label : PropTypes.string.isRequired,
}

