import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p>
          Bengkulu Kito adalah sebuah proyek inovasi yang bertujuan untuk
          memanfaatkan teknologi media komputerisasi guna meningkatkan minat wisata
          dan popularitas produk lokal di Bengkulu. Dalam konteks ini, permasalahan yang
          dihadapi adalah rendahnya eksposur dan kesadaran tentang potensi pariwisata dan
          produk lokal di Bengkulu. Hal ini disebabkan oleh minimnya kampanye promosi
          yang efektif serta terbatasnya akses informasi yang memadai mengenai destinasi
          wisata dan produk-produk unggulan daerah tersebut.
          </p>
          <br />
          <p>
          Kami percaya bahwa kehadiran Bengkulu Kito bukan hanya sekadar sebuah langkah, tetapi juga merupakan peluang besar bagi kemajuan ekonomi lokal.
          Dengan memanfaatkan teknologi dan sumber daya lokal, kami berharap dapat membuka jalan baru bagi pengembangan produk-produk unggulan Bengkulu 
          serta meningkatkan daya tarik destinasi wisata di wilayah tersebut.
          </p>
          <br />
          <p>
          Dengan demikian, Bengkulu Kito bukan hanya sebuah platform, tetapi juga sebuah komitmen untuk turut serta dalam mewujudkan visi Indonesia 
          sebagai negara maju melalui pemanfaatan teknologi secara bijaksana. Mari bersama-sama kita jadikan Bengkulu Kito sebagai wahana untuk memperkuat perekonomian lokal dan mendorong pertumbuhan yang berkelanjutan. 
          </p>
        </div>
      </div>
      <BlogsComp />
    </>
  );
};

export default About;