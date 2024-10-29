import { useEffect, useState } from "react";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import CardItem from "../../shared/CardItem/CardItem";


const Card = () => {
    const [item, setItem] = useState([]);
    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
       
        .then(data => {
             const itemData = data.filter(item => item.name === 'Roast Duck Breast')
             setItem(itemData)
        })
    },[])
    return (
        <div className="">
            <SectionTitle 
            subHeading='Should Try'
            heading='CHEF RECOMMENDS'
            >
            </SectionTitle>
            <div className=" mt-10 mb-10 grid md:grid-cols-2 items-center sm:grid-cols-1 gap-10">
            {
                item.map(item => <CardItem key={item._id} items={item}></CardItem>)
            }
            </div>
        </div>
    );
};

export default Card;