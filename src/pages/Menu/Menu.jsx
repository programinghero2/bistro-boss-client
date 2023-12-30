import Cover from "../../components/Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg"
import SectionTitle from "../../components/Shared/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
import dessertImg from "../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../assets/menu/pizza-bg.jpg"
import saladImg from "../../assets/menu/salad-bg.jpg"
import soupImg from "../../assets/menu/soup-bg.jpg"
import useMenu from "../../components/Shared/Hooks/useMenu";
const Menu = () => {
    const { menu } = useMenu()
    const todaysMenu = menu?.filter(item => item?.category === "offered")
    const dessertMenu = menu?.filter(item => item?.category === "dessert")
    const pizzaMenu = menu?.filter(item => item?.category === "pizza")
    const saladsMenu = menu?.filter(item => item?.category === "salad")
    const soupMenu = menu?.filter(item => item?.category === "soup")
    return (
        <div>
            {/* menu cover */}
            <div>
                <Cover coverheader="our menu" coverDescription="Would you like to try a dish?" bg_img={menuImg}></Cover>
            </div>
            {/* today offer */}
            <div className="my-16">
                <div>
                    <SectionTitle subHeading="Don't miss" heading="TODAY'S OFFER"></SectionTitle>
                </div>
                <MenuCategory coverheader="Offered" menuItem={todaysMenu}></MenuCategory>
            </div>
            {/* dessert menu */}
            <div className="my-16">
                <MenuCategory coverheader="Desserts"  menuItem={dessertMenu} img={dessertImg}></MenuCategory>
            </div>
            {/* pizza menu */}
            <div className="my-16">
                <MenuCategory coverheader="pizza"  menuItem={pizzaMenu} img={pizzaImg}></MenuCategory>
            </div>
            {/* salad menu */}
            <div className="my-16">
                <MenuCategory coverheader="Salads"  menuItem={saladsMenu} img={saladImg}></MenuCategory>
            </div>
            {/* soup menu */}
            <div className="my-16">
                <MenuCategory coverheader="soup"  menuItem={soupMenu} img={soupImg}></MenuCategory>
            </div>
        </div>
    );
};

export default Menu;