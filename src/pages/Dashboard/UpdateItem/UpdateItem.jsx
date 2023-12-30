
import { useParams } from "react-router-dom";
import SectionTitle from "../../../components/Shared/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../components/Shared/Hooks/useAxiosPublic";
import { useState } from "react";
import useMenu from "../../../components/Shared/Hooks/useMenu";
import useAxios from "../../../components/Shared/Hooks/useAxios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaUtensils } from "react-icons/fa";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const UpdateItem = () => {
    const { register, handleSubmit, reset } = useForm();
    const { id } = useParams()
    const axiosPublic = useAxiosPublic()
    const [item, setItem] = useState([])
    const axiosSecure = useAxios()
    const { refetch } = useMenu()
    // get specific menu item api
    axiosPublic.get(`/menu/${id}`)
        .then(res => {
            setItem(res.data)
        })
        .catch(error => {
            console.log(error.message)
        })
    // update api
    const onSubmit =  async(data) => {
        const imageFile = {image:data.image[0]}
        const res = await axiosPublic.post(image_hosting_api,imageFile,{
            headers:{
                "content-type":"multipart/form-data"
            }
        })
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                category: data.category,
                recipe: data.recipe,
                price: +data.price,
                image: res.data.display_url
            }
            const updateMenu = await axiosSecure.patch(`/menu/${id}`, menuItem)
            if (updateMenu.data.modifiedCount) {
                toast.success("Item Update successfully")
                reset()
            }
        }
    };
    return (
        <div>
            <SectionTitle subHeading={`upadate ${item?.name}`} heading="Update Item"></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="w-full">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Recipe name*</span>
                            </div>
                            <input {...register("name", { required: true })} type="text" placeholder="Recipe name" className="input input-bordered w-full border mb-2" />
                        </label>
                    </div>
                    <div className="flex items-center w-full gap-2">
                        {/* category */}
                        <div className="w-full">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Category*</span>
                                </div>
                            </label>
                            <select defaultValue="default" {...register("category")} className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">pizza</option>
                                <option value="soup">soups</option>
                                <option value="dessert">desserts</option>
                                <option value="drinks">drinks</option>
                                <option value="offered">offered</option>
                            </select>
                        </div>
                        <div className="w-full">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Price*</span>
                                </div>
                                <input {...register("price", { required: true })} type="number" placeholder="Price" className="input input-bordered w-full border " />
                            </label>
                        </div>
                    </div>
                    {/* reciple details */}
                    <div className="w-full my-2">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Recipe Details*</span>
                            </div>
                        </label>
                        <textarea {...register("recipe", { required: true })} placeholder="Recipe Details" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                    </div>
                    {/* file input */}
                    <div className="my-4">
                        <input {...register("image", { required: true })} type="file" className="file-input w-full  max-w-xs" />
                    </div>

                    <button className="btn bg-[#D1A054] hover:bg-[#c29045] text-white" >Add Item <FaUtensils className="ml-1" /> </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;