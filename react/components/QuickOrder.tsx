import React, { useState, useEffect } from "react"
import { useMutation, useLazyQuery } from "react-apollo"
import UPDATE_CART from "../graphql/updateCart.graphql"
import GET_PRODUCT from "../graphql/getProductBySku.graphql"
import { useCssHandles } from "vtex.css-handles"
import "../css/styles.css"

const QuickOrder = () => {
    const CSS_HANDLES = [
        "containerPrincipal",
        "form",
        "containerTwo",
        "containerQuantity"
    ]
    const handles = useCssHandles(CSS_HANDLES)

    const [inputText, setInputText] = useState({
        text: "",
        quantity: ""
    })
    const [search, setSearch] = useState("")

    const [getProductData, { data: product }] = useLazyQuery(GET_PRODUCT)
    const [addToCart] = useMutation(UPDATE_CART)

    const handleChange = (evt: any) => {
        setInputText({
            ...inputText,
            [evt.target.name]: evt.target.value
        })
    }

    useEffect(() => {
        if (product) {
            let skuId = parseInt(inputText.text)
            let quantityBuy = parseInt(inputText.quantity)
            addToCart({
                variables: {
                    salesChannel: "1",
                    items: [
                        {
                            id: skuId,
                            quantity: quantityBuy,
                            seller: "1"
                        }
                    ]
                }
            })
                .then(() => {
                    window.location.href = "/checkout"
                })
        }
    }, [search, product])

    const addProductToCart = () => {
        getProductData({
            variables: {
                sku: inputText.text
            }
        })
    }

    const searchProduct = (evt: any) => {
        evt.preventDefault()
        if (!inputText.text) {
            alert("Ingrese algo")
        } else {
            setSearch(inputText.text)
            addProductToCart()
        }
    }

    return (
        <div className={`${handles["containerPrincipal"]}`}>
            <h2>Compra Rapida VELEZ</h2>
            <form onSubmit={searchProduct} className={`${handles["form"]}`}>
                <div className={`${handles["containerQuantity"]}`}>
                    <p>Ingresa el numero de SKU:</p>
                    <input id="sku" type="text" value={inputText.text} name="text" onChange={handleChange} />
                </div>
                <div className={`${handles["containerQuantity"]}`}>
                    <p>Ingresa la cantidad:</p>
                    <input type="number" value={inputText.quantity} name="quantity" onChange={handleChange} />
                </div>
                {
                    inputText.text && inputText.quantity && (
                        <input type="submit" value="Añadir al carrito" />
                    )
                }
            </form>
        </div>
    )
}

export default QuickOrder;