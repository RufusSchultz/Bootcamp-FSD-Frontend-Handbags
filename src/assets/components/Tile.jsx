function Tile(props) {
    return (
        <section>
            <img src={props.image} alt=""/>
            <h2>{props.title}</h2>
            <p>{props.textOne}</p>
            <p>{props.textTwo}</p>
        </section>
    )
}

export default Tile;