import { Link } from "react-router-dom";
import Cover from "../../../components/Shared/Cover/Cover";
import MenuItem from "../../../components/Shared/MenuItem/MenuItem";

const MenuCategory = ({ coverheader, coverDescription, menuItem, img }) => {
    return (
        <div>
            <div>
                {
                    coverheader && <Cover coverheader={coverheader} coverDescription="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." bg_img={img}></Cover>
                }
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
                {
                    menuItem?.map(item => <MenuItem key={item?._id} menu={item}></MenuItem>)
                }
            </div>
            <div className="text-center">
                <Link to={`/order/${coverheader}`} className='btn btn-outline border-0 border-b-4'>ORDER YOUR FAVOURITE FOOD</Link>
            </div>
        </div>
    );
};

export default MenuCategory;