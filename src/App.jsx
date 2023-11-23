import './App.css'
import Button from "./assets/components/Button.jsx";

function App() {
    return (
        <header>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button
                    clickResult="to the collection"
                    buttonText="to the collection"
                    isDisabled={false}
                />
                <Button
                    clickResult="shop all bags"
                    buttonText="shop all bags"
                    isDisabled={false}
                />
                <Button
                    clickResult="pre-orders"
                    buttonText="pre-orders"
                    isDisabled={true}
                />
            </nav>
        </header>
    )
}

export default App
