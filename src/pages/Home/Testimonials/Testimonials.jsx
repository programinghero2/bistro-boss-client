import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import SectionTitle from "../../../components/Shared/SectionTitle/SectionTitle";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch("reviews.json")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <div>
                <SectionTitle subHeading='what our client say' heading='Testimonials'></SectionTitle>
            </div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews?.map(review => <SwiperSlide key={review?._id}>
                        <div className="mx-20 my-5 flex flex-col items-center justify-center">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review?.rating}
                                readOnly
                            />
                            <p>{review?.details}</p>
                            <h3 className="text-2xl text-orange-500">{review?.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;