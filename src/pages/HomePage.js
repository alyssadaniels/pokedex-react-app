import List from "../components/List.js"

const HomePage = () => {
    return (
        <>
            <h1>POKEDEX</h1>
            <a href="https://github.com/alyssadaniels/pokedex-react-app" target="_blank">Source Code</a>
            <List limit={150} />
        </>
    )
}

export default HomePage;