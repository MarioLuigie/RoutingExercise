import PropTypes from "prop-types"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { faShoePrints } from '@fortawesome/free-solid-svg-icons'
import { faBan } from '@fortawesome/free-solid-svg-icons'

import "../styles/components/Product.scss"

export default function Product ({
    product
}) {

    const { type, brand, name, quantity, size, price } = product
    const [image, setImage] = useState(null)

    useEffect(() => {
        switch (type) {
            case "handbags": 
                setImage(<FontAwesomeIcon icon={faBagShopping} />)
                break;
            case "shoes":
                setImage(<FontAwesomeIcon icon={faShoePrints} />)
                break;
            default:
                setImage(<FontAwesomeIcon icon={faBan} />)
        }
    }, [type]);

    return (
        <li className="product">
            <div className="product__header">
                <h4 className="product__brand">{brand}</h4>
                <p className="product__name">{name}</p>
            </div>
            <div className="product__body">
                <div className="product__image">
                    {image}
                </div>
                <div className="product__info">
                    <p>Type: <span className="product__info--xl">{type}</span></p>
                    <p>Quantity: {quantity}</p>
                    <p>Size: {size}</p>
                    <p className="product__price">Price: <span className="product__info--xxl">{price},-</span></p>
                </div>
            </div>
        </li>
    );
}

Product.propTypes = {
    product : PropTypes.object.isRequired,
};
