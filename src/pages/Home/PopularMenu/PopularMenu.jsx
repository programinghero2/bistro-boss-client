
import SectionTitle from "../../../components/Shared/SectionTitle/SectionTitle";
import MenuItem from "../../../components/Shared/MenuItem/MenuItem";
import useMenu from "../../../components/Shared/Hooks/useMenu";

const PopularMenu = () => {
    const {menu} = useMenu()
    const popularMenu = menu?.filter(item => item.category === "popular")
    return (
        <div>
            <div>
                <SectionTitle subHeading='popular menu' heading='FROM OUR MENU'></SectionTitle>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    popularMenu?.map(item => <MenuItem key={item?._id} menu={item}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;