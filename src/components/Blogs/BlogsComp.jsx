import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/tabut.jpg";
import Img2 from "../../assets/places/selatan.jpg";
import Img3 from "../../assets/places/besurek.jpg";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Tradisi Tabut dalam Penyambutan Tahun Baru Islam di Bengkulu",
    description:
      "Pada 1 Muharram pada penanggalan Islam, di kota Bengkulu ada yang tradisi yang biasa di kenal dengan tabot. Keberadaan Tabot sendiri sangat erat kaitannya dengan perkembangan Islam di Bengkulu. Tradisi Tabot dibawa oleh pekerja Islam Syiah dari Madras dan Bengali di India Selatan. Mereka ikut bersama tentara Inggris ke Bengkulu untuk membangun Benteng Marlborough pada 1713. Tradisi Tabot bisa dilihat dari dua tujuan, untuk ritual dan non ritual. Aspek ritual masih dijalankan hanya oleh keturunan keluarga Tabot. Sementara untuk tujuan non ritual dilakukan untuk melestarikan kesenian tradisional Bengkulu yang sudah ada sejak ribuan tahun yang lalu. Tabot menjadi unsur penting dalam Tradisi Tabot yang diadakan selama 10 hari pertama di bulan Muharram. Saking menariknya, tradisi tersebut kemudian dijadikan sebuah festival oleh pemerintah setempat karena dianggap bisa menarik minat wisatawan dan menjadi pilihan untuk wisata budaya di Bengkulu.",
    author: "Admin",
    date: "Agustus 7, 2023",
  },
  {
    id: 1,
    image: Img2,
    title: "Pawai Ogoh-Ogoh Sambut Hari Raya Nyepi",
    description:
      "Pawai Ogoh-ogoh ini merupakan salah satu tradisi masyarakat Bali di Bengkulu Utara dalam rangka menyambut perayaan Hari Raya Suci Nyepi. Pendamping Pemangku Banjar Adat Dharma Santi mengatakan Pawai Ogoh-ogoh ini merupakan bentuk pemaknaan atau simbolis bhuta kala yang melambangkan kekuatan buruk, ketidakmurnian, ketidaksadaran yang dapat mempengaruhi hidup manusia. Tak hanya itu, dijelaskannya juga bahwa Ogoh-Ogoh ini diarak atau diparadekan mengelilingi wewidangan desa untuk mengusir butha kala yang dilakukan pada menjelang malam hari, sehari sebelum Hari Suci Nyepi. Pelaksanaan mengarak Ogoh-Ogoh ini menyampaikan sebuah pesan jika manusia harus saling menjaga alam dan sumber daya untuk tidak merusak lingkungan sekitarnya. Setelah diarak, Ogoh-Ogoh yang merupakan simbol-simbol jahat tersebut dibakar hingga habis dan disaksikan oleh para pemangku adat. Pemaknaannya adalah pada Hari Suci Nyepi 11 Maret 2024 tahun ini umat Hindu Bali bisa menjalankan ibadah Nyepi dengan khusyuk.",
    author: "Admin",
    date: "Maret 21, 2023",
  },
  {
    id: 1,
    image: Img3,
    title: "Karnaval Batik Besurek",
    description:
      "Dalam rangka memperingati HUT Kota Bengkulu, digelar Karnaval Batik Besurek. Dengan adanya karnaval Batik Besurek ini sebagai salah satu bentuk promosi agar batik besurek kebanggaan warga Bengkulu menjadi terkenal. Menurut sejarahnya, dikatakan bahwa kain besurek di Bengkulu berawal sejak hijrahnya pahlawan Pangeran Sentot Alibasyah beserta keluarga dan pengikut-pengikutnya ke Bengkulu. Hal ini berasal dari para pemakai dan pengrajin kain khas ini yang sebagian besar berasal dari keturunan Pangeran Sentot Alibasyah. Batik Bengkulu asli memiliki motif khas dinamai Besurek. Batik Besurek sendiri merupakan perpaduan antara pedagang Arab dan pekerja asal India di abad ke-17, sehingga seiring waktu terciptalah warisan kebudayaan khas Bengkulu yang juga memiliki ciri khas kebudayaan Indonesia.",
    author: "Admin",
    date: "Maret 11, 2023",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Event Tahunan
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
