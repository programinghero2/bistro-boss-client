import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import OnlineOrder from "../OnlineOrder/OnlineOrder";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            {/* banner */}
            <div>
                <Banner></Banner>
            </div>
            <div className="my-16">
                <OnlineOrder></OnlineOrder>
            </div>
            <div className="my-16">
                <PopularMenu></PopularMenu>
            </div>
            <div className="my-16">
                <Featured></Featured>
            </div>
            <div className="my-16">
                <Testimonials></Testimonials>
            </div>
        </div>
    );
};

export default Home;