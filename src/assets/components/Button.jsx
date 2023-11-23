function Button(props) {
    return (
        <button onClick={() => {console.log(props.clickResult)}} disabled={props.isDisabled}>{props.buttonText}</button>
    )
}

export default Button;