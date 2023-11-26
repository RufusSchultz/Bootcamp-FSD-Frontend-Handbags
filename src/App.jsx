import './App.css'
import Button from "./assets/components/Button.jsx";
import Product from "./assets/components/Product.jsx";
import Tile from "./assets/components/Tile.jsx";
import bag_1 from "./assets/bag_1.png";
import bag_2 from "./assets/bag_2.png";
import bag_3 from "./assets/bag_3.png";
import bag_4 from "./assets/bag_4.png";
import brand from "./assets/brand.png";
import our_story from "./assets/our_story.png";

function App() {
    return (
        <>
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
            <main>
                <Product
                    labelText="Best seller"
                    image={bag_1}
                    bagName="The handy bag"
                    bagPrice="€400,-"
                />
                <Product
                    labelText="Best seller"
                    image={bag_2}
                    bagName="The stylish bag"
                    bagPrice="€250,-"
                />
                <Product
                    labelText="New collection"
                    image={bag_3}
                    bagName="The simple bag"
                    bagPrice="€300,-"
                />
                <Product
                    labelText="New collection"
                    image={bag_4}
                    bagName="The trendy bag"
                    bagPrice="€150,-"
                />
            </main>
            <footer>
                <Tile
                    title="The brand"
                    textOne="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus eligendi in molestiae odio perferendis possimus quae voluptatum! Aut, excepturi, voluptatum. Cumque error odit rerum tempore."
                    textTwo="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores eligendi minima necessitatibus quod, voluptate?"
                />
                <Tile
                    image={brand}
                />
                <Tile
                    image={our_story}
                />
                <Tile
                    title="Our story"
                    textOne="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam eius officiis suscipit! Ea eum officiis pariatur recusandae rerum veritatis vitae! Non omnis repudiandae sed voluptas."
                />
            </footer>
        </>
    )
}
export default App
