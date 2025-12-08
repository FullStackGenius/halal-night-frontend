import { Link } from "react-router-dom";
import MainLayout from '../layouts/MainLayout'
import PrayerDevotionalComponent from "../components/PrayerDevotionalComponent";

const Prayers = () => {

  const absoluteFullStyle: any = {
    position: "absolute",
    height: "100%",
    width: "100%",
    inset: 0,
    color: "transparent"
  };

  const PrayerDevotionalData: any = [
    {
      "data1": "Du‘ā For Purity (الطُّهْر)",
      "data2": "اَللّٰهُمَّ اجْعَلْ هٰذَا الْعَقْدَ بَرَكَةً وَرَحْمَةً، وَارْزُقْنَا فِيهِ الْمَوَدَّةَ وَالرَّحْمَةَ وَالطُّهْرَ",
      "data3": "AllāHumma Ij‘Al HāDhā Al‑‘Aqda Barakatan Wa RaḥMatan, Wa Rzuqnā FīHi Al‑Mawaddata Wa Al‑RaḥMata Wa Aṭ‑ṬUhr",
      "data4": "O Allah, Make This Contract A Source Of Blessing And Mercy, And Grant Us Affection, Compassion, And Purity Within It.",
    },
    {
      "data1": "Du‘ā For Purity (الطُّهْر)",
      "data2": "اَللّٰهُمَّ اجْعَلْ هٰذَا الْعَقْدَ بَرَكَةً وَرَحْمَةً، وَارْزُقْنَا فِيهِ الْمَوَدَّةَ وَالرَّحْمَةَ وَالطُّهْرَ",
      "data3": "AllāHumma Ij‘Al HāDhā Al‑‘Aqda Barakatan Wa RaḥMatan, Wa Rzuqnā FīHi Al‑Mawaddata Wa Al‑RaḥMata Wa Aṭ‑ṬUhr",
      "data4": "O Allah, Make This Contract A Source Of Blessing And Mercy, And Grant Us Affection, Compassion, And Purity Within It.",
    },
    {
      "data1": "Du‘ā For Purity (الطُّهْر)",
      "data2": "اَللّٰهُمَّ اجْعَلْ هٰذَا الْعَقْدَ بَرَكَةً وَرَحْمَةً، وَارْزُقْنَا فِيهِ الْمَوَدَّةَ وَالرَّحْمَةَ وَالطُّهْرَ",
      "data3": "AllāHumma Ij‘Al HāDhā Al‑‘Aqda Barakatan Wa RaḥMatan, Wa Rzuqnā FīHi Al‑Mawaddata Wa Al‑RaḥMata Wa Aṭ‑ṬUhr",
      "data4": "O Allah, Make This Contract A Source Of Blessing And Mercy, And Grant Us Affection, Compassion, And Purity Within It.",
    },
    {
      "data1": "Du‘ā For Purity (الطُّهْر)",
      "data2": "اَللّٰهُمَّ اجْعَلْ هٰذَا الْعَقْدَ بَرَكَةً وَرَحْمَةً، وَارْزُقْنَا فِيهِ الْمَوَدَّةَ وَالرَّحْمَةَ وَالطُّهْرَ",
      "data3": "AllāHumma Ij‘Al HāDhā Al‑‘Aqda Barakatan Wa RaḥMatan, Wa Rzuqnā FīHi Al‑Mawaddata Wa Al‑RaḥMata Wa Aṭ‑ṬUhr",
      "data4": "O Allah, Make This Contract A Source Of Blessing And Mercy, And Grant Us Affection, Compassion, And Purity Within It.",
    }

  ];
  return (
    <MainLayout>

      <main>

        <section className="inner-section bg-[#F1F3F5] h-[400px] lg:h-[450px] px-5 relative">
          <div className="absolute bottom-0 left-0">
            <img className="max-w-[160px] sm:max-w-full" src="/images/title-shape-left.png" />
          </div>
          <div className="max-w-[900px] mx-auto flex items-center justify-center w-full h-full flex-col gap-[20px]">
            <h2 className="text-[40px] leading-[60px] lg:text-[50px] lg:leading-[70px] xl:text-[70px] xl:leading-[90px] text-black font-[berlin-sans-fb-demi] text-center">Prayers & <span className="text-[#BD8928]">Text</span></h2>

            <div className="flex items-center justify-center gap-[15px] xl:gap-[15px]">
              <a className="font-[poppins-medium] text-[18px] leading-7 text-black" href="#"><span className="text-[#BD8928]">Home</span></a>
              <span className=""><img src="/images/right-b-arrow.png" /></span>
              <h3 className="font-[poppins-medium] text-[18px] leading-7 text-black">Steps</h3>
            </div>

          </div>
          <div className="absolute top-0 right-0">
            <img className="max-w-[160px] sm:max-w-full" src="/images/title-shape-right.png" />
          </div>

        </section>


        <section className="bg-[#fff] px-5 py-12 lg:py-24 relative">
          <div className="max-w-[1500px] mx-auto">
            <div className="flex gap-5 justify-between items-center flex-col">

              <div className="p-[20px] md:p-[47px] shadow-[0px_2px_12px_2px_#0400341A] flex w-full gap-[20px] md:gap-[30px] lg:gap-[80px] items-center justify-center flex-col md:flex-row">

                <div className="w-[349px] max-w-full">
                  <img className="w-full rounded-full" src="/images/bound-img.png" />
                </div>

                <div className="w-[615px] lg:w-[958px] max-w-full">
                  <h5 className="text-[#BD8928] font-[poppins-medium] text-[18px] leading-[27px] uppercase pl-[35px] relative"><span className="absolute left-0 top-[14px] w-[29px] h-[2px] bg-[#BD8928] rounded-full w-[29px] h-[2px]"></span>Texts & Prayers — Arabic • Transliteration • English</h5>
                  <h2 className="font-[berlin-sans-fb-demi] text-[34px] leading-12 xl:text-[46px] xl:leading-[60px] text-black">Recitations For Nikāḥ Al‑Mut‘ah</h2>
                  <p className="font-[poppins-regular] text-[18px] leading-10 text-black pt-4 pb-7">Begin With Sincere Niyyah (Intention), Recite With Understanding, And Maintain Adab (Etiquette).  Where Appropriate, Consult A Qualified Scholar For Personal Rulings.</p>
                </div>

              </div>

              <div className="w-full flex justify-center items-center pt-[30px] md:pt-[83px] gap-[30px] md:gap-[40px] lg:gap-[71px] flex-col lg:flex-row">

                <div className="flex flex-col w-full md:w-[678px]">
                  <h5 className="text-[#BD8928] font-[poppins-medium] text-[18px] leading-10 uppercase flex items-center gap-2.5 pb-3 before:bg-[#BD8928] before:w-[30px] before:h-0.5 before:inline-flex before:rounded-2xl text-left">Introduction</h5>
                  <h2 className="font-[berlin-sans-fb-demi] text-[34px] leading-12 xl:text-[46px] xl:leading-[60px] text-black text-left pr-[20px]">Introduction — Purpose Of These Prayers</h2>
                  <p className="font-[poppins-regular] text-[18px] leading-10 text-black pt-2 text-left">These Selections Support The Religious Spirit Of Nikāḥ Al‑Mut‘ah: To Seek The Pleasure Of Allah, Uphold Consent And Clarity, And Begin  With Remembrance. The Arabic Is Paired With Clear Transliteration And A  Faithful English Rendering.</p>

                </div>

                <div className="flex flex-col w-full md:w-[751px]">
                  <h5 className="text-[#BD8928] font-[poppins-medium] text-[18px] leading-10 uppercase flex items-center gap-2.5 pb-3 before:bg-[#BD8928] before:w-[30px] before:h-0.5 before:inline-flex before:rounded-2xl text-left">The Intention</h5>
                  <h2 className="font-[berlin-sans-fb-demi] text-[34px] leading-12 xl:text-[46px] xl:leading-[60px] text-black text-left">An‑Niyyah — The Intention (النية)</h2>
                  <p className="font-[poppins-bold] font-bold text-[20px] leading-[28px] sm:text-[24px] sm:leading-[34px] text-black pt-[10px] text-left">نَوَيْتُ نِكَاحَ الْمُتْعَةِ قُرْبَةً إِلَى اللّٰهِ تَعَالَى</p>
                  <p className="italic text-left text-[#BD8928] font-[poppins-regular] text-[16px] leading-[28px] sm:text-[18px] sm:leading-[30px] pt-3">Nawaytu Nikāḥ Al‑Mut‘Ah Qurbatan Ilā AllāHi Ta‘āLā</p>
                  <p className="text-left text-[#000] font-[poppins-regular] text-[16px] leading-[28px] sm:text-[18px] sm:leading-[30px]">I Intend To Enter Into A Mut‘Ah Marriage Seeking Nearness To Allah, The Most High.</p>
                  <a href="#" className="mt-[20px] lg:mt-[24px] group w-max transition-all duration-300 bg-[#BD8928] text-white capitalize flex justify-center items-center lg:gap-[9px] gap-1.5 font-[poppins-medium] p-2.5 text-[14px] lg:text-[16px] xl:text-[18px] leading-7 lg:px-5 lg:py-3.5  xl:px-[30px] xl:py-[15px] border border-[#BD8928] rounded-[10px] hover:bg-transparent hover:text-[#BD8928]">Begin The Contract<img className="invert brightness-0 transition-all duration-300 group-hover:invert-0 group-hover:brightness-100" src="/images/arrow-gold.svg" /></a>
                </div>

              </div>



            </div>
          </div>
        </section>



        <section className=" pt-[60px] pb-[60px] px-[20px] sm:pt-[80px] sm:pb-[80px] sm:px-[20px] lg:pt-[80px] lg:pb-[100px] lg:px-[20px] relative w-full">
          <div className="absolute top-0 left-0 bottom-0 right-0 z-0"><img alt="" loading="lazy" decoding="async" data-nimg="fill" className="object-cover w-full h-full" style={absoluteFullStyle} src="/images/offer-img-2.png" /></div>

          <div className="max-w-[1500px] mx-auto z-1 relative">

            <div className="flex justify-center items-center flex-col">
              <h5 className="text-[#BD8928] font-[poppins-medium] text-[18px] leading-10 uppercase flex items-center gap-2.5 pb-3 before:bg-[#BD8928] before:w-[30px] before:h-0.5 before:inline-flex before:rounded-2xl">Offer And Acceptance </h5>
              <h2 className="font-[berlin-sans-fb-demi] text-[34px] leading-12 xl:text-[46px] xl:leading-[60px] text-[#fff] text-center">Ijāb Wa‑Qubūl — Offer And Acceptance <br />(الإيجاب والقبول)</h2>
            </div>



            <div className="w-full flex items-center pb-[24px] pt-[20px] md:pt-[28px] gap-[30px] md:gap-[30px] lg:gap-[40px] flex-col lg:flex-row">



              <div className="flex flex-col w-full md:w-[730px] bg-[#FFFFFF] rounded-[20px] p-[20px] sm:p-[25px] lg:p-[33px]">
                <p className="font-[berlin-sans-fb-demi] text-[22px] leading-[28px] sm:text-[24px] sm:leading-[34px] text-black text-left">Ijāb — Offer (الإيجاب)</p>
                <p className="font-[poppins-regular] text-[20px] leading-[28px] sm:text-[24px] sm:leading-[34px] text-black pt-[10px] text-left">زَوَّجْتُكَ نَفْسِي نِكَاحَ الْمُتْعَةِ عَلَى الْمَهْرِ الْمَعْلُومِ وَالْمُدَّةِ الْمَعْلُومَةِ</p>
                <p className="italic text-left text-[#BD8928] font-[poppins-regular] text-[16px] leading-[28px] sm:text-[18px] sm:leading-[30px] pt-3">Zawwajtuka Nafsī Nikāḥ Al‑Mut‘Ah ‘Alā Al‑Mahr Al‑Ma‘LūM Wa Al‑Mudda Al‑Ma‘LūMah</p>
                <p className="text-left text-[#000] font-[poppins-regular] text-[16px] leading-[28px] sm:text-[18px] sm:leading-[30px]">I Have Married Myself To You In Mut‘Ah For The Agreed Dower And Defined Term.</p>
              </div>

              <div className="flex flex-col w-full md:w-[730px] bg-[#FFFFFF] rounded-[20px] p-[20px] sm:p-[25px] lg:p-[33px]">
                <p className="font-[berlin-sans-fb-demi] text-[22px] leading-[28px] sm:text-[24px] sm:leading-[34px] text-black text-left">Qubūl — Acceptance (القبول)</p>
                <p className="font-[poppins-regular] text-[20px] leading-[28px] sm:text-[24px] sm:leading-[34px] text-black pt-[10px] text-left">قَبِلْتُ النِّكَاحَ كَمَا زَوَّجْتِنِي عَلَى الْمَهْرِ وَالْمُدَّةِ الْمَعْلُومَيْنِ</p>
                <p className="italic text-left text-[#BD8928] font-[poppins-regular] text-[16px] leading-[28px] sm:text-[18px] sm:leading-[30px] pt-3">Qabiltu An‑Nikāḥ Kamā ZawwajtīNī ‘Alā Al‑Mahr Wa Al‑Mudda Al‑Ma‘LūMayn</p>
                <p className="text-left text-[#000] font-[poppins-regular] text-[16px] leading-[28px] sm:text-[18px] sm:leading-[30px]">I Accept The Marriage As You Have Offered, For The Agreed Dower And Term.</p>
              </div>

            </div>

            <p className="text-center text-[#fff] font-[poppins-regular] text-[16px] leading-[28px] sm:text-[18px] sm:leading-[30px]">Ensure Both Parties Understand The Meaning And Recite Without Interruption.</p>

          </div>
        </section>


        <section className="bg-[#fff] px-5 pt-[78px] pb-[78px] relative">
          <div className="max-w-[1500px] mx-auto">
            <div className="flex gap-5 justify-between items-center flex-col">
              <div className="w-full flex justify-center items-center gap-[30px] md:gap-[40px] lg:gap-[100px] relative pt-[25px] pb-[25px] flex-col lg:flex-row">
                <div className="flex flex-col w-full md:w-[700px]">
                  <h2 className="font-[berlin-sans-fb-demi] text-[34px] leading-12 xl:text-[40px] xl:leading-[54px] text-black text-left">Before The Contract — Supplication</h2>
                  <p className="font-[poppins-regular] text-[20px] leading-[28px] sm:text-[24px] sm:leading-[34px] text-black pt-[10px] text-left">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيم، اَللّٰهُمَّ بَارِكْ لَنَا فِي نِيَّتِنَا وَطَهِّرْ قُلُوبَنَا مِنَ الرِّيَاءِ</p>
                  <p className="italic text-left text-[#BD8928] font-[poppins-regular] text-[16px] leading-[28px] sm:text-[18px] sm:leading-[30px] pt-3">BismillāH Ar‑RaḥMāN Ar‑RaḥīM, AllāHumma BāRik Lanā Fī Niyyatinā Wa ṬAhhir QulūBanā Mina Ar‑Riyā’</p>
                  <p className="text-left text-[#000] font-[poppins-regular] text-[16px] leading-[28px] sm:text-[18px] sm:leading-[30px]">In The Name Of Allah, The Most Merciful, The Compassionate. O Allah, Bless Our Intention And Purify Our Hearts From Insincerity.</p>
                </div>
                <div className="absolute top-0 bottom-0 my-auto left-1/2 -translate-x-1/2 w-full h-[1px] lg:w-[1px] lg:h-full bg-[#E0E0E0]"></div>
                <div className="flex flex-col w-full md:w-[700px]">
                  <h2 className="font-[berlin-sans-fb-demi] text-[34px] leading-12 xl:text-[40px] xl:leading-[54px] text-black text-left">After The Contract — Supplication</h2>
                  <p className="font-[poppins-regular] text-[20px] leading-[28px] sm:text-[24px] sm:leading-[34px] text-black pt-[10px] text-left">اَللّٰهُمَّ اجْعَلْ هٰذَا الْعَقْدَ بَرَكَةً وَرَحْمَةً، وَارْزُقْنَا فِيهِ الْمَوَدَّةَ وَالرَّحْمَةَ وَالطُّهْرَ</p>
                  <p className="italic text-left text-[#BD8928] font-[poppins-regular] text-[16px] leading-[28px] sm:text-[18px] sm:leading-[30px] pt-3">AllāHumma Ij‘Al HāDhā Al‑‘Aqda Barakatan Wa RaḥMatan, Wa Rzuqnā FīHi Al‑Mawaddata Wa Al‑RaḥMata Wa Aṭ‑ṬUhr</p>
                  <p className="text-left text-[#000] font-[poppins-regular] text-[16px] leading-[28px] sm:text-[18px] sm:leading-[30px]">O Allah, Make This Contract A Source Of Blessing And Mercy, And Grant Us Affection, Compassion, And Purity Within It.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-5 py-12 lg:py-24 bg-[#F1F3F5]">
          <div className="max-w-[1500px] mx-auto">
            <div className="flex flex-col gap-[20px] md:gap-[60px]">
              <div className="flex gap-[20px] md:gap-[20px] xl:gap-[105px] justify-between items-center flex-col-reverse md:flex-row">
                <div className="w-[548px] max-w-full">
                  <h5 className="text-[#BD8928] font-[poppins-medium] text-[18px] leading-10 uppercase flex items-center gap-2.5 pb-3 before:bg-[#BD8928] before:w-[30px] before:h-0.5 before:inline-flex before:rounded-2xl">Qur’anic Union</h5>
                  <h2 className="font-[berlin-sans-fb-demi] text-[34px] leading-12 xl:text-[46px] xl:leading-[60px] text-black">A Qur’anic Reflection On Marriage</h2>
                  <div className="bg-[#E7EAED] rounded-[20px] p-[20px] mt-[12px] mb-[24px]">
                    <p className="font-[poppins-regular] text-[20px] leading-[28px] sm:text-[24px] sm:leading-[34px] text-black pt-[10px] text-left">وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا</p>
                    <p className="font-[poppins-regular] text-[18px] leading-10 text-black pt-4">“And Among His Signs Is That He Created For You Mates From Among Yourselves.” (Qur’an 30:21)</p>
                  </div>
                  <div className="mobile_banner_btn flex items-center gap-2.5 lg:gap-4">
                    <a href="#" className="group transition-all duration-300 bg-[#BD8928] text-white capitalize flex justify-center items-center lg:gap-[9px] gap-1.5 font-[poppins-medium] p-2.5 text-[14px] lg:text-[16px] xl:text-[18px] leading-7 lg:px-5 lg:py-3.5  xl:px-[30px] xl:py-[15px] border border-[#BD8928] rounded-[10px] hover:bg-transparent hover:text-[#BD8928]">Begin The Contract <img className="invert brightness-0 transition-all duration-300 group-hover:invert-0 group-hover:brightness-100" src="/images/arrow-gold.svg" /></a>
                  </div>
                </div>
                <div className="w-[800px] max-w-full">
                  <img className="w-full rounded-[20px]" src="/images/reflection.png" />
                </div>
              </div>

            </div>
          </div>
        </section>
        <section className="py-16 px-4 bg-white ">
          <div className="max-w-[1504px] mx-auto text-center">
            <div className="flex justify-center items-center flex-col">
              <h5 className="text-[#BD8928] font-[poppins-medium] text-[18px] leading-10 uppercase flex items-center gap-2.5 before:bg-[#BD8928] before:w-[30px] before:h-0.5 before:inline-flex before:rounded-2xl pb-[10px]">Supplemental Du‘ā</h5>
              <h2 className="font-[berlin-sans-fb-demi] text-[34px] leading-12 xl:text-[46px] xl:leading-[60px] text-black">Additional Devotional Du‘ā</h2>
            </div>
            <div className="sm:mt-[40px] sm:mb-[20px] lg:mt-[27px] lg:mb-[27px] mt-[20px] flex flex-col w-full relative">
              <div className="flex flex-col gap-[30px] max-lg:gap-[20px] z-[1] justify-center items-center">
                {
                  PrayerDevotionalData.map((readData: any) => {
                    return <PrayerDevotionalComponent data1={readData.data1} data2={readData.data2} data3={readData.data3} data4={readData.data4} />
                  })
                }
                <div className="w-full max-w-[1092px] mx-auto">
                  <h3 className="text-center text-[#000] font-[poppins-semi-bold] text-[16px] leading-[28px] sm:text-[24px] sm:leading-[40px]">These Texts Are Provided For Devotional Use. Juristic Wording Varies; Follow Your Marja‘ And Local Law.</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  )
}

export default Prayers