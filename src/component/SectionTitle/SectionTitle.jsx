

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-5/12 mx-auto text-center my-4  font-bold">
            <p className="mb-2  text-orange-600">{subHeading}</p>
            <h3 className="text-2xl border-y-4 py-2 text-black">{heading}</h3>
        </div>
    );
};

export default SectionTitle;