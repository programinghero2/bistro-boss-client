import Cover from "../../components/Shared/Cover/Cover";
import orderCover from "../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../components/Shared/Hooks/useMenu";
import Food from "./Food/Food";
import { useParams } from "react-router-dom";
import { useState } from "react";
const OrderFood = () => {
    const { menu: food } = useMenu()
    const categories = ["Salads","pizza","soup","Desserts","drinks","Offered"]
    const {category} = useParams()
    const initialTabInded = categories.indexOf(category)
    const [tabIndex,setTabIndex] = useState(initialTabInded)
    const offered = food?.filter(item => item?.category === "offered")
    const dessert = food?.filter(item => item?.category === "dessert")
    const pizza = food?.filter(item => item?.category === "pizza")
    const salads = food?.filter(item => item?.category === "salad")
    const soup = food?.filter(item => item?.category === "soup")
    const drinks = food?.filter(item => item?.category === "drinks")
    console.log(category)
    return (
        <div>
            <div className="mb-16">
                <Cover coverheader="our food" coverDescription="Would you like to try a dish?" bg_img={orderCover}></Cover>
            </div>
            {/* food */}
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESSERTS</Tab>
                    <Tab>DRINKS</Tab>
                    <Tab>OFFERED</Tab>
                </TabList>

                <TabPanel>
                    {
                        <Food foods={salads}></Food>
                    }
                </TabPanel>
                <TabPanel>
                   {
                    <Food foods={pizza}></Food>
                   }
                </TabPanel>
                <TabPanel>
                   {
                    <Food foods={soup}></Food>
                   }
                </TabPanel>
                <TabPanel>
                   {
                    <Food foods={dessert}></Food>
                   }
                </TabPanel>
                <TabPanel>
                   {
                    <Food foods={drinks}></Food>
                   }
                </TabPanel>
                <TabPanel>
                   {
                    <Food foods={offered}></Food>
                   }
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default OrderFood;