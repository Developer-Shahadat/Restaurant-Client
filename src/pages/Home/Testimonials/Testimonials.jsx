import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import { BiMessageDots } from "react-icons/bi";

import "@smastrom/react-rating/style.css";

import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="my-20">
      <SectionTitle
        heading="Testimonials"
        subHeading="--What Our Clients Said--"
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className=" flex flex-col items-center ml-20 mr-16 text-center">
            <BiMessageDots className="text-5xl mt-1" />
              <Rating className="pt-2" style={{ maxWidth: 180 }} value={review.rating} readOnly />
              <p className="pt-4"> {review.details}</p>
              <h3 className="text-2xl text-orange-600">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
