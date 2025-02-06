import DishCard from "./DishCard.jsx"

const MenuLayout = ({menu}) => {
    return (
        <div>
        <h1>Menu</h1>
        <ul>
            <DishCard />
        </ul>
        </div>
    )
}

export default MenuLayout