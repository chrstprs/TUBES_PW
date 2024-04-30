import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/sunrise.jpg";
import Img2 from "../../assets/places/benteng.jpg";
import Img3 from "../../assets/places/curug.jpg";
import Img4 from "../../assets/places/sawah.jpg";
import Img5 from "../../assets/places/bung.jpg";
import Img6 from "../../assets/places/jungur.jpg";

const PlacesData = [
  {
    img: Img1,
    title: "Danau Dendam Tak Sudah",
    location: "Kota Bengkulu, Prov. Bengkulu",
    description:`Danau Dendam Tak Sudah, yang terletak di Provinsi Bengkulu, adalah sebuah perairan yang memikat dengan sejarahnya yang kaya dan pemandangan alam yang menakjubkan. 
                Disebut "Dendam Tak Sudah" karena konon terkait dengan legenda tragis yang menyelimuti danau ini. Dikelilingi oleh pegunungan yang hijau, danau ini menawarkan panorama 
                yang menawan bagi para pengunjungnya. Airnya yang tenang menciptakan suasana damai yang cocok untuk bersantai atau menikmati kegiatan air seperti perahu dayung.`,
  },
  {
    img: Img2,
    title: "Benteng Malborough",
    location: "Kota Bengkulu, Prov. Bengkulu",
    description: 'Benteng Marlborough adalah benteng peninggalan Inggris di Provinsi Bengkulu. Dibangun antara 1713-1719 oleh East India Company, benteng ini menghadap Samudera Hindia. Dinamai sesuai komandan militer Inggris, John Churchill, dikenal sebagai “The First Duke of Marlborough”. Terpugar kembali pada 1983-1984 oleh Pemerintah Indonesia, kini dijaga sebagai Situs Warisan Budaya dilindungi oleh undang-undang. Meskipun pernah dibakar, peninggalan sejarah Inggris dan Belanda masih terjaga. Dengan pemandangan lautnya, menjadi tempat tepat untuk santai atau berkeluarga.',
  },
  {
    img: Img3,
  title: "Air Terjun Curug Embun",
  location: "Kepahiang, Prov. Bengkulu",
  description: "Air Terjun Curug Embun adalah destinasi alam menakjubkan di Provinsi Bengkulu, Indonesia. Terletak di Kabupaten Lebong, air terjun ini menampilkan air yang deras mengalir ke dalam kolam jernih. Curug Embun merujuk pada embun yang sering muncul di sekitarnya, memberikan sentuhan mistis. Tersembunyi di hutan, perjalanan menuju air terjun ini adalah petualangan tersendiri. Namun, pemandangannya yang memukau membuat setiap langkah terasa berharga. Curug Embun juga cocok untuk bersantai, berenang, atau sekadar menikmati keindahan alamnya yang menyejukkan."
  },
  {
    img: Img4,
    title: "Persawahan Kemumu",
    location: "Arga Makmur, Kab. Bengkulu Utara",
    description: "Persawahan Kemumu terletak di Kabupaten Rejang Lebong, Provinsi Bengkulu, Indonesia. Kawasan ini menawarkan panorama alam yang memikat, dengan sawah-sawah yang terhampar di tengah-tengah pegunungan hijau. Kabupaten Rejang Lebong sendiri berada di bagian tengah Provinsi Bengkulu, dan Persawahan Kemumu menjadi salah satu daya tarik wisata alam di daerah tersebut. Keindahan alamnya yang mempesona dan suasana pedesaan yang tenang membuat Persawahan Kemumu menjadi destinasi yang menarik bagi para pengunjung yang mencari pengalaman alam yang autentik di Bengkulu.",
  },
  {
    img: Img5,
    title: "Rumah Pengasingan Bung Karno",
    location: "Kota Bengkulu, Prov. Bengkulu",
    description: "Rumah Pengasingan Soekarno ini adalah tempat dimana Presiden Indonesia Pertama Soekarno menjalani masa pengasingannya sebagai tahanan politik (1938-1942) pada masa pemerintah kolonial Belanda. Menurut sejarahnya, rumah dengan luas sekitar 165 m2 yang berarsitektur perpadauan Eropa dan Cina ini dibangun oleh Tjang Tjeng Kwai yang pada saat itu bekerja sebagai penyalur bahan pokok untuk keperluan pemerintah kolonial Belanda di Bengkulu, pada tahun 1918. Tetapi pada saat disewa oleh pemerintah kolonial Belanda. untuk menempatkan Soekarno selama diasingkan di Bengkulu, rumah ini dimiliki oleh seorang pedagang Tionghoa yang bernama Lion Bwe Seng.",
  },
  {
    img: Img6,
    title: "Napal Jungur",
    location: "Lubuk Sandi, Kab. Seluma",
    description: "Napal Jungur, destinasi sungai di Kecamatan Lubuk Sandi, Kabupaten Seluma, Provinsi Bengkulu, menawarkan piknik dan rekreasi alam. Aktivitas seperti berenang, berperahu, dan menikmati pemandangan alam dapat dinikmati di sini. Sungai yang mengalir di Napal Jungur juga memungkinkan pengunjung menjelajahi keindahan alam dengan flora dan fauna yang beragam. Bagi pencinta petualangan alam, Napal Jungur menjadi pilihan menarik. ",

  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Destinasi Favorit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
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

export default Places;