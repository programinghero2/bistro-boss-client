import SectionTitle from "../../../components/Shared/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"
const Featured = () => {
    return (
        <div style={{backgroundImage:`url(${featuredImg})`}} className="py-10 bg-fixed bg-opacity-80">
            <div>
                <SectionTitle subHeading="check it out" heading="From out menu"></SectionTitle>
            </div>
            <div className="w-3/4 flex items-center gap-8 mx-auto">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="text-white">
                    <p>March 20, 2023</p>
                    <h1> WHERE CAN I GET SOME?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 text-white border-b-2 mt-5">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;