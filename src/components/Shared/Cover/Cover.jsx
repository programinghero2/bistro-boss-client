import { Parallax, Background } from 'react-parallax';
const Cover = ({ bg_img, coverheader, coverDescription }) => {
    return (
        <div>
            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={bg_img}
                bgImageAlt="the dog"
                strength={-200}
            >
                <div className="hero h-[70vh]">
                    {/* <div className="hero-overlay bg-opacity-60"></div> */}
                    <div className=" w-3/4 mx-auto text-center text-neutral-content bg-black bg-opacity-60 ">
                        <div className="py-16 px-5">
                            <h1 className="mb-5 text-5xl font-bold uppercase">{coverheader}</h1>
                            <p className="mb-5">{coverDescription}</p>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div >
    );
};

export default Cover;