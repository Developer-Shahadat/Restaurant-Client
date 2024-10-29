import SectionTitle from "../../../../component/SectionTitle/SectionTitle";
import featuredimg from '../../../../assets/home/featured.jpg'
import './featured.css';

const Featured = () => {
    return (
        <section className="featured-item text-white bg-fixed pt-10 pb-10">
            <SectionTitle
            subHeading='Check it Out'
            heading='FROM OUR MENU'
            ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-400 bg-opacity-30 pb-20 pt-10 px-16">
                <div>
                   <img src={featuredimg} alt="" /> 
                </div>
                <div className="md:ml-12 px-1 py-1 font-bold">
                    <p>30 October 2024</p>
                    <p className="uppercase">Where Can I Get Some ?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Mollitia sunt cum at nisi distinctio eveniet similique aliquid autem,
                        pariatur amet natus atque ducimus voluptatibus nostrum, consequuntur,
                        accusamus dolorem culpa. Harum itaque pariatur nobis ratione dolorem,
                        ab commodi qui hic, reiciendis maiores dignissimos nemo doloribus
                        laudantium rerum quod totam ea laboriosam!</p>
                        <button className=" mt-1 btn btn-outline btn-xs sm:btn-sm md:btn-md border-0 border-b-4  ">Read More</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;