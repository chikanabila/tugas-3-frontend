import React from "react";
import { Navbar } from "../../navbar/navbar"

const home = () => {
  return (
    <div>
        <Navbar />
        <div className="p-5 text-center bg-image rounded-3" style={{backgroundImage: 'url("https://i.pinimg.com/564x/0b/92/3a/0b923aadba61032bfc3048d03f296742.jpg")', height: 400}}>
          <div className="mask" style={{backgroundColor: 'rgba(249, 210, 184, 0.4)'}}>
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1 className="mb-3"> JASA TRANSLATE DOKUMEN</h1>
                <h4>Selamat datang di layanan terjemahan dokumen kami, di mana keahlian bertemu dengan keandalan untuk memenuhi semua kebutuhan terjemahan Anda. Kami adalah mitra terpercaya yang siap membantu Anda mengatasi hambatan bahasa dan memastikan pesan Anda disampaikan dengan tepat dan akurat.</h4>

                <h2>Keunggulan Layanan Kami:</h2>
                <li><b>Profesionalisme Tinggi:</b><br></br>
                Tim terjemahan kami terdiri dari para profesional yang berpengalaman dalam berbagai bidang. Mereka tidak hanya mahir dalam bahasa sumber dan 
                sasaran, tetapi juga memahami konteks dan spesifikasinya.</li>
                <li><b>Ketepatan dan Konsistensi::</b><br></br>
                Kami mengutamakan ketepatan dan konsistensi dalam setiap terjemahan. Setiap kata dan frasa diperlakukan dengan cermat untuk memastikan pesan asli tetap terjaga tanpa kehilangan makna.</li>
                <li><b>Keamanan dan Kerahasiaan:</b><br></br>
                Kami memahami betapa pentingnya keamanan dokumen Anda. Oleh karena itu, kami mengimplementasikan langkah-langkah keamanan yang ketat untuk melindungi kerahasiaan informasi yang kami terjemahkan.</li>
                <li><b>Kemampuan Multibahasa::</b><br></br>
                Layanan kami mencakup berbagai bahasa, memungkinkan Anda berkomunikasi dengan pelanggan global dan mengakses pasar internasional dengan lebih mudah.</li>
                <li><b>Fleksibilitas Waktu:</b><br></br>
                Kami memahami bahwa waktu adalah aspek krusial dalam dunia bisnis dan proyek-proyek pribadi. Oleh karena itu, kami berkomitmen untuk memberikan terjemahan tepat waktu tanpa mengorbankan kualitas.</li>
                <li><b>Harga yang Bersaing:</b><br></br>
                Kami menawarkan layanan terjemahan dengan harga yang kompetitif. Kami percaya bahwa kualitas tinggi tidak harus datang dengan biaya yang tinggi.</li>
                <li><b>Konsultasi dan Dukungan Pelanggan:</b><br></br>
                Tim dukungan pelanggan kami siap membantu Anda dalam setiap tahap proses terjemahan. Kami memberikan konsultasi yang ramah dan responsif untuk memastikan kepuasan pelanggan.</li>

                <h4>Dengan menggunakan layanan terjemahan dokumen kami, Anda dapat yakin bahwa pesan Anda akan diterjemahkan dengan tepat, mengatasi hambatan bahasa, dan mencapai audiens global Anda dengan efektif. Hubungi kami hari ini untuk mendiskusikan kebutuhan terjemahan Anda dan temukan solusi yang paling sesuai untuk Anda.</h4> 
                </div></div></div></div></div>
  );
};

export default home;
