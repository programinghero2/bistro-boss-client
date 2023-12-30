import OrderFoodCard from "../OrderFoodCard/OrderFoodCard";

const Food = ({foods}) => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    foods?.map(food => <OrderFoodCard key={food?._id} food={food}></OrderFoodCard>)
                }
            </div>
        </div>
    );
};

export default Food;