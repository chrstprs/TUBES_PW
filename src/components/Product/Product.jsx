import React from "react";
import ProductCard from "./ProductCard";
import Img1 from "../../assets/places/batik besurek.jpeg";
import Img2 from "../../assets/places/lemang tapai.webp";
import Img3 from "../../assets/places/lempuk durian.jpg";
import Img4 from "../../assets/places/pendap.jpg";
import Img5 from "../../assets/places/rebung.jpg";
import Img6 from "../../assets/places/bagar hiu.webp";

const ProductData = [
  {
    img: Img1,
    title: "Batik Besurek",
    description:
      "Batik ini berciri  motif kaligrafi dengan perpaduan bunga Rafflesia yang merupakan simbol  Bengkulu.",
    price: "100.000",
  },
  {
    img: Img2,
    title: "Lemang Tapai",
    description:
      "Lemang terbuat dari beras ketan putih  yang dibungkus oleh daun pisang dan di bakar di dalam bambu. ",
    price: "38.000",
  },
  {
    img: Img3,
    title: "Lempuk Durian",
    description:
      "Lempuk Durian memiliki rasa yang manis legit sedikit gurih dengan tekstur yang kenyal. ",
    price: "28.000",
  },
  {
    img: Img4,
    title: "Pendap",
    description:
      "Pendap berbahan baku daun talas, kelapa parut, dan ikan laut. ",
    price: "30.000",
  },
  {
    img: Img5,
    title: "Rebung Undak Liling",
    description:
      "Rebung Asam Undak Liling berbahan dasar dari rebung dan liling yang di gabungkan dengan rempah-rempah.",
    price: "25.000",
  },
  {
    img: Img6,
    title: "Bagar Hiu",
    description:
      "Bagar hiu terbuat dari daging ikan Hiu dan dimasak seperti rendang. ",
    price: "50.000",
  },
];

const Product = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Produk Lokal
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {ProductData.map((item, index) => (
              <ProductCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Product;