function Product(props) {
    return (
        <article>
            <span>{props.labelText}</span>
            <img src={props.image} alt=""/>
            <p>{props.bagName}</p>
            <h4>{props.bagPrice}</h4>
        </article>
    )
}

export default Product;