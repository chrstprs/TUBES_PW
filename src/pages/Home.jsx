import React from "react";
import NatureVid from "../assets/video/wonderful.mp4";
import BlogsComp from "../components/Blogs/BlogsComp";
import Places from "../components/Places/Places";
import Product from "../components/Product/Product"
import OrderPopup from "../components/OrderPopup/OrderPopup";

const Home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup= () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <>
      <div>
        <div className="h-[1000px] relative">
          <video
            autoPlay
            loop
            muted
            className="absolute right-0 top-0 h-[1000px] w-full object-cover z-[-1]"
          >
            <source src={NatureVid} type="video/mp4" />
          </video>
        </div>
        <Places/>
        <BlogsComp />
        <Product />
        <OrderPopup />
      </div>
    </>
  );
};

export default Home;