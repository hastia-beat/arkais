// src/app/components/main/Description.js
'use client';

import React from 'react';

const Description = () => {
  return (
    <div className="flex flex-col items-center mt-12 w-full sm:w-[60%] px-4">
      <h2 className="text-3xl font-semibold text-color-primary mb-4 text-center">Tentang Kosakata Arkais</h2>
      <p className="text-lg text-color-primary text-justify leading-relaxed">
        Kosakata arkais adalah kosakata bahasa Indonesia yang sudah tidak digunakan, karena dianggap sudah ketinggalan zaman dan tidak lazim di kalangan masyarakat. Namun, biasanya kosakata arkais digunakan dalam hikayat, puisi, pantun, cerita rakyat, novel. 
        Walaupun sudah jarang digunakan dan banyak orang yang tidak tahu, orang yang memiliki hobi membaca dan menulis hikayat dan sejenisnya masih menggunakan kosakata arkais karena dianggap keren dan masih relevan dalam kegiatan khusus seperti menulis hikayat. 
        Dan juga dalam kurikulum sekolah, para siswa masih diajarkan dalam menganalisis dan belajar membuat hikayat, puisi, dan lain sebagainya. 
        Oleh karena itu, website ini dapat membantu anda untuk mencari kosakata arkais atau pun bagi anda yang belum mengetahui kosakata arkais.
      </p>
    </div>
  );
};

export default Description;
