import SectionTitle from "../../../components/Shared/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import './styles.css';
import img1 from "../../../assets/home/slide1.jpg"
import img2 from "../../../assets/home/slide2.jpg"
import img3 from "../../../assets/home/slide3.jpg"
import img4 from "../../../assets/home/slide4.jpg"
import img5 from "../../../assets/home/slide5.jpg"

const OnlineOrder = () => {
    return (
        <div>
            <SectionTitle subHeading={'From 11:00am to 10:00pm'} heading={"order online"}></SectionTitle>
            {/* category */}
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={img1} alt="" />
                    <p className="-mt-20 text-center text-white text-2xl font-bold">Salads</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <p className="-mt-20 text-center text-white text-2xl font-bold">Soups</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                    <p className="-mt-20 text-center text-white text-2xl font-bold">pizzas</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                    <p className="-mt-20 text-center text-white text-2xl font-bold">desserts</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" />
                    <p className="-mt-20 text-center text-white text-2xl font-bold">salads</p>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default OnlineOrder;