import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import SectionTitle from '../../../component/SectionTitle/SectionTitle';
import 'swiper/css';
import 'swiper/css/pagination';

import silder1 from '../../../assets/home/slide1.jpg'
import silder2 from '../../../assets/home/slide2.jpg'
import silder3 from '../../../assets/home/slide3.jpg'
import silder4 from '../../../assets/home/slide4.jpg'
import silder5 from '../../../assets/home/slide5.jpg'


const Category = () => {
    return (
        <section className='text-center'> 
          <SectionTitle
          subHeading={"From 11:00am to 10:00pm"}
          heading={"ORDER ONLINE"}
          ></SectionTitle>
          <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-6 mb-16"
      >
        <SwiperSlide className='text-center'>
          <img src={silder1} alt="" />
          <h3 className='uppercase text-3xl text-center text-white -mt-10'>Salad</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={silder2} alt="" />
          <h3 className='uppercase text-4xl text-center text-white -mt-10'>Pizza</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={silder3} alt="" />
          <h3 className='uppercase text-4xl text-center text-white -mt-10'>Soup</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={silder4} alt="" />
          <h3 className='uppercase text-4xl text-center text-white -mt-10'>Cake</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={silder5} alt="" />
          <h3 className='uppercase text-4xl text-center text-white -mt-10'>Salad</h3>
        </SwiperSlide>
        
      </Swiper>
        </section>
    );
};

export default Category;