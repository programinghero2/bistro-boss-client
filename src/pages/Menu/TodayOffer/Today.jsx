import Cover from "../../../components/Shared/Cover/Cover";
import useMenu from "../../../components/Shared/Hooks/useMenu";
import MenuItem from "../../../components/Shared/MenuItem/MenuItem";
import SectionTitle from "../../../components/Shared/SectionTitle/SectionTitle";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
const Today = () => {
    const { menu } = useMenu()
    const todayMenu = menu?.filter(item => item.category === "offered")
    return (
        <div>
            <div>
                <SectionTitle subHeading="Don't miss" heading="TODAY'S OFFER"></SectionTitle>
            </div>
            {/* today offer */}
                     
            {/* dessert */}
            <div>
                <Cover coverheader="DESSERTS" coverDescription="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." bg_img={dessertImg}></Cover>
            </div>
        </div>
    );
};

export default Today;