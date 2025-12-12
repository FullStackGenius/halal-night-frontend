import MainLayout from '../layouts/MainLayout'

const Step = () => {
  return (
    <MainLayout>
      <main>

        <section className="inner-section bg-[#F1F3F5] h-[400px] lg:h-[450px] px-5 relative">
          <div className="absolute bottom-0 left-0">
            <img className="max-w-[160px] sm:max-w-full" src="/images/title-shape-left.png" />
          </div>
          <div className="max-w-[900px] mx-auto flex items-center justify-center w-full h-full flex-col gap-[20px]">
            <h2 className="text-[40px] leading-[60px] lg:text-[50px] lg:leading-[70px] xl:text-[70px] xl:leading-[90px] text-black font-[berlin-sans-fb-demi] text-center">Steps</h2>

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


        <section className="py-16 px-4 bg-white ">
          <div className="max-w-[1504px] mx-auto text-center">

            <div className="flex justify-center items-center flex-col">
              <h5 className="text-[#BD8928] font-[poppins-medium] text-[18px] leading-10 uppercase flex items-center gap-2.5 pb-3 before:bg-[#BD8928] before:w-[30px] before:h-0.5 before:inline-flex before:rounded-2xl">Steps To A Valid Nikāḥ Al‑Mutʿah</h5>
              <h2 className="font-[berlin-sans-fb-demi] text-[34px] leading-12 xl:text-[46px] xl:leading-[60px] text-black">A Clear Path With Intention, Consent,<br /> And Clarity</h2>
            </div>

            <div className="sm:mt-[40px] sm:mb-[40px] lg:mt-[100px] lg:mb-[100px] mt-[40px] flex flex-col w-full gap-[30px] md:gap-[40px] lg:gap-[100px] relative">

              <div className="flex flex-col md:flex-row gap-[84px] max-lg:gap-[40px] z-[1] justify-center items-center">

                <div className="w-[150px] flex justify-center items-center">
                  <div className="text-4xl bg-[#F1F3F5] p-6 rounded-[20px] pt-[34px] w-full"><h3 className="font-[poppins-bold] text-[40px] leading-[40px] sm:text-[60px] sm:leading-[60px] lg:text-[80px] lg:leading-[80px] text-[#61768E] text-center">01</h3></div>
                </div>


                <div className="bg-[#F1F3F5] p-6 rounded-[30px] pt-[24px] pb-[26px] px-[35px] w-full max-w-[1266px]">
                  <div className="text-4xl mb-[27px]">
                    <h3 className="font-[berlin-sans-fb-demi] text-[26px] leading-[32px] sm:text-[30px] sm:leading-[30px] lg:text-[40px] lg:leading-[40px] text-[#000] text-left">Establish Intention — An‑Niyyah (النية)</h3>
                    <p className="font-[poppins-regular] text-[18px] leading-[24px] md:leading-[42px] text-black pt-[12px] text-left">
                      Begin With Sincere Intention Seeking Nearness To Allah. Clarify That The Purpose Is A Lawful Temporary Marriage In Accordance With Faith,  Dignity, And Consent.
                    </p>
                  </div>
                  <div className="text-4xl bg-[#E7EAED] rounded-[20px] p-6 px-[35px] pb-[32px]">
                    <h4 className="font-[berlin-sans-fb-demi] text-[24px] leading-[36px] text-[#000] text-left">Recommended Du‘ā</h4>
                    <p className="font-[poppins-regular] text-[20px] leading-[28px] sm:text-[24px] sm:leading-[36px] text-black pt-0.5 text-left">اَللّٰهُمَّ أَخْلِصْ نِيَّاتِنَا لَكَ وَاجْعَلْهَا قُرْبَةً إِلَيْكَ</p>
                    <p className="italic text-left text-[#BD8928] font-[poppins-regular] text-[16px] leading-[28px] sm:text-[18px] sm:leading-[30px] pt-3">AllāHumma Akhliṣ NiyyāTinā Laka Wa‑JʿAlhā Qurbatan Ilayka</p>
                    <p className="text-left text-[#000] font-[poppins-regular] text-[16px] leading-[28px] sm:text-[18px] sm:leading-[30px]">O Allah, Purify Our Intentions For You And Make Them A Means Of Nearness To You.</p>
                  </div>
                </div>
              </div>


              <div className="flex flex-col md:flex-row gap-[84px] max-lg:gap-[40px] z-[1] justify-center items-center">

                <div className="w-[150px] flex justify-center items-center">
                  <div className="text-4xl bg-[#F9F4EC] p-6 rounded-[20px] pt-[34px] w-full"><h3 className="font-[poppins-bold] text-[40px] leading-[40px] sm:text-[60px] sm:leading-[60px] lg:text-[80px] lg:leading-[80px] text-[#BD8928] text-center">02</h3></div>
                </div>


                <div className="bg-[#F8F1E4] p-6 rounded-[30px] pt-[24px] pb-[26px] px-[35px] w-full max-w-[1266px]">
                  <div className="text-4xl mb-[27px]">
                    <h3 className="font-[berlin-sans-fb-demi] text-[26px] leading-[32px] sm:text-[30px] sm:leading-[30px] lg:text-[40px] lg:leading-[40px] text-[#000] text-left">Confirm Mutual Consent — Ar‑Riḍā (الرِّضَا)</h3>
                    <p className="font-[poppins-regular] text-[18px] leading-[24px] md:leading-[42px] text-black pt-[12px] text-left">
                      Both Parties Must Willingly Agree Without Coercion. Verify Understanding Of The Nature Of Mut‘ah, Its Duration, And Its Boundaries.
                    </p>
                  </div>
                  <div className="text-4xl bg-[#F4EFE5] rounded-[20px] p-6 px-[35px] pb-[32px]">
                    <h4 className="font-[berlin-sans-fb-demi] text-[24px] leading-[36px] text-[#000] text-left">Recommended Du‘ā</h4>
                    <p className="font-[poppins-regular] text-[20px] leading-[28px] sm:text-[24px] sm:leading-[36px] text-black pt-0.5 text-left">اَللّٰهُمَّ أَخْلِصْ نِيَّاتِنَا لَكَ وَاجْعَلْهَا قُرْبَةً إِلَيْكَ</p>
                    <p className="italic text-left text-[#BD8928] font-[poppins-regular] text-[16px] leading-[28px] sm:text-[18px] sm:leading-[30px] pt-3">AllāHumma Akhliṣ NiyyāTinā Laka Wa‑JʿAlhā Qurbatan Ilayka</p>
                    <p className="text-left text-[#000] font-[poppins-regular] text-[16px] leading-[28px] sm:text-[18px] sm:leading-[30px]">O Allah, Purify Our Intentions For You And Make Them A Means Of Nearness To You.</p>
                  </div>
                </div>
              </div>


              <div className="flex flex-col md:flex-row gap-[84px] max-lg:gap-[40px] z-[1] justify-center items-center">

                <div className="w-[150px] flex justify-center items-center">
                  <div className="text-4xl bg-[#F1F3F5] p-6 rounded-[20px] pt-[34px] w-full"><h3 className="font-[poppins-bold] text-[40px] leading-[40px] sm:text-[60px] sm:leading-[60px] lg:text-[80px] lg:leading-[80px] text-[#61768E] text-center">03</h3></div>
                </div>


                <div className="bg-[#F1F3F5] p-6 rounded-[30px] pt-[24px] pb-[26px] px-[35px] w-full max-w-[1266px]">
                  <div className="text-4xl mb-[27px]">
                    <h3 className="font-[berlin-sans-fb-demi] text-[26px] leading-[32px] sm:text-[30px] sm:leading-[30px] lg:text-[40px] lg:leading-[40px] text-[#000] text-left">Define Terms — Al‑Mahr Wa Al‑Mudda (المَهْر وَالْمُدَّة)	</h3>
                    <p className="font-[poppins-regular] text-[18px] leading-[24px] md:leading-[42px] text-black pt-[12px] text-left">Both Parties Must Willingly Agree Without Coercion. Verify Understanding Of The Nature Of Mut‘ah, Its Duration, And Its Boundaries.</p>
                  </div>
                  <div className="text-4xl bg-[#E7EAED] rounded-[20px] p-6 px-[35px] pb-[32px]">
                    <h4 className="font-[berlin-sans-fb-demi] text-[24px] leading-[36px] text-[#000] text-left">Recommended Du‘ā</h4>
                    <p className="font-[poppins-regular] text-[20px] leading-[28px] sm:text-[24px] sm:leading-[36px] text-black pt-0.5 text-left">اَللّٰهُمَّ أَخْلِصْ نِيَّاتِنَا لَكَ وَاجْعَلْهَا قُرْبَةً إِلَيْكَ</p>
                    <p className="italic text-left text-[#BD8928] font-[poppins-regular] text-[16px] leading-[28px] sm:text-[18px] sm:leading-[30px] pt-3">AllāHumma Akhliṣ NiyyāTinā Laka Wa‑JʿAlhā Qurbatan Ilayka</p>
                    <p className="text-left text-[#000] font-[poppins-regular] text-[16px] leading-[28px] sm:text-[18px] sm:leading-[30px]">O Allah, Purify Our Intentions For You And Make Them A Means Of Nearness To You.</p>
                  </div>
                </div>
              </div>


              <div className="flex flex-col md:flex-row gap-[84px] max-lg:gap-[40px] z-[1] justify-center items-center">

                <div className="w-[150px] flex justify-center items-center">
                  <div className="text-4xl bg-[#F9F4EC] p-6 rounded-[20px] pt-[34px] w-full"><h3 className="font-[poppins-bold] text-[40px] leading-[40px] sm:text-[60px] sm:leading-[60px] lg:text-[80px] lg:leading-[80px] text-[#BD8928] text-center">04</h3></div>
                </div>


                <div className="bg-[#F8F1E4] p-6 rounded-[30px] pt-[24px] pb-[26px] px-[35px] w-full max-w-[1266px]">
                  <div className="text-4xl mb-[27px]">
                    <h3 className="font-[berlin-sans-fb-demi] text-[26px] leading-[32px] sm:text-[30px] sm:leading-[30px] lg:text-[40px] lg:leading-[40px] text-[#000] text-left">Recite The Contract — Ijāb Wa‑Qubūl (الإيجاب والقبول)</h3>
                    <p className="font-[poppins-regular] text-[18px] leading-[24px] md:leading-[42px] text-black pt-[12px] text-left">
                      Perform The Verbal Offer And Acceptance Correctly. The Woman Recites The Ijāb,  And The Man Recites The Qubūl, Without Interrupting Or Changing The  Meaning.
                    </p>
                  </div>
                  <div className="flex flex-col gap-[20px]">
                  <div className="text-4xl bg-[#F4EFE5] rounded-[20px] p-6 px-[35px] pb-[32px]">
                    <h4 className="font-[berlin-sans-fb-demi] text-[24px] leading-[36px] text-[#000] text-left">Ijāb — Offer (الإيجاب)</h4>
                    <p className="font-[poppins-regular] text-[20px] leading-[28px] sm:text-[24px] sm:leading-[36px] text-black pt-0.5 text-left">زَوَّجْتُكَ نَفْسِي نِكَاحَ الْمُتْعَةِ عَلَى الْمَهْرِ الْمَعْلُومِ وَالْمُدَّةِ الْمَعْلُومَةِ</p>
                    <p className="italic text-left text-[#BD8928] font-[poppins-regular] text-[16px] leading-[28px] sm:text-[18px] sm:leading-[30px] pt-3">Zawwajtuka Nafsī Nikāḥ Al‑MutʿAh ʿAlā Al‑Mahr Al‑MaʿLūM Wa Al‑Mudda Al‑MaʿLūMah</p>
                    <p className="text-left text-[#000] font-[poppins-regular] text-[16px] leading-[28px] sm:text-[18px] sm:leading-[30px]">I Have Married Myself To You In MutʿAh For The Agreed Dower And The Defined Term.</p>
                  </div>
                  <div className="text-4xl bg-[#F4EFE5] rounded-[20px] p-6 px-[35px] pb-[32px]">
                    <h4 className="font-[berlin-sans-fb-demi] text-[24px] leading-[36px] text-[#000] text-left">Qubūl — Acceptance (القبول)</h4>
                    <p className="font-[poppins-regular] text-[20px] leading-[28px] sm:text-[24px] sm:leading-[36px] text-black pt-0.5 text-left">قَبِلْتُ النِّكَاحَ كَمَا زَوَّجْتِنِي عَلَى الْمَهْرِ وَالْمُدَّةِ الْمَعْلُومَيْنِ</p>
                    <p className="italic text-left text-[#BD8928] font-[poppins-regular] text-[16px] leading-[28px] sm:text-[18px] sm:leading-[30px] pt-3">Qabiltu An‑Nikāḥ Kamā ZawwajtīNī ʿAlā Al‑Mahr Wa Al‑Mudda Al‑MaʿLūMayn</p>
                    <p className="text-left text-[#000] font-[poppins-regular] text-[16px] leading-[28px] sm:text-[18px] sm:leading-[30px]">I Accept The Marriage As You Have Offered, For The Agreed Dower And Term.</p>
                  </div>
                  <div className="text-4xl bg-[#F4EFE5] rounded-[20px] p-6 px-[35px] pb-[32px]">
                    <h4 className="font-[berlin-sans-fb-demi] text-[24px] leading-[36px] text-[#000] text-left">Recommended Du‘ā</h4>
                    <p className="font-[poppins-regular] text-[20px] leading-[28px] sm:text-[24px] sm:leading-[36px] text-black pt-0.5 text-left">اَللّٰهُمَّ تَقَبَّلْ مِنَّا هٰذَا الْعَقْدَ وَبَارِكْ فِيهِ</p>
                    <p className="italic text-left text-[#BD8928] font-[poppins-regular] text-[16px] leading-[28px] sm:text-[18px] sm:leading-[30px] pt-3">AllāHumma Taqabbal Minnā HāDhā Al‑ʿAqda Wa‑BāRik FīHi</p>
                    <p className="text-left text-[#000] font-[poppins-regular] text-[16px] leading-[28px] sm:text-[18px] sm:leading-[30px]">O Allah, Accept This Contract From Us And Bless It.</p>
                  </div>
                  </div>
                </div>
              </div>


              <div className="flex flex-col md:flex-row gap-[84px] max-lg:gap-[40px] z-[1] justify-center items-center">

                <div className="w-[150px] flex justify-center items-center">
                  <div className="text-4xl bg-[#F1F3F5] p-6 rounded-[20px] pt-[34px] w-full"><h3 className="font-[poppins-bold] text-[40px] leading-[40px] sm:text-[60px] sm:leading-[60px] lg:text-[80px] lg:leading-[80px] text-[#61768E] text-center">05</h3></div>
                </div>


                <div className="bg-[#F1F3F5] p-6 rounded-[30px] pt-[24px] pb-[26px] px-[35px] w-full max-w-[1266px]">
                  <div className="text-4xl mb-[27px]">
                    <h3 className="font-[berlin-sans-fb-demi] text-[26px] leading-[32px] sm:text-[30px] sm:leading-[30px] lg:text-[40px] lg:leading-[40px] text-[#000] text-left">Observe The Iddah — Al‑ʿIddah (الْعِدَّة)</h3>
                    <p className="font-[poppins-regular] text-[18px] leading-[24px] md:leading-[42px] text-black pt-[12px] text-left">
After The Term Concludes (Or If The Remaining Term Is Gifted Back), The  Woman Observes The Required Waiting Period (ʿIddah) Before Any New  Marriage. Details May Vary; Consult Your Marjaʿ.                    </p>
                  </div>
                  <div className="text-4xl bg-[#E7EAED] rounded-[20px] p-6 px-[35px] pb-[32px]">
                    <h4 className="font-[berlin-sans-fb-demi] text-[24px] leading-[36px] text-[#000] text-left">Recommended Du‘ā</h4>
                    <p className="font-[poppins-regular] text-[20px] leading-[28px] sm:text-[24px] sm:leading-[36px] text-black pt-0.5 text-left">اَللّٰهُمَّ اهْدِنَا لِمَا اخْتَلَفَ فِيهِ مِنَ الْحَقِّ بِإِذْنِكَ</p>
                    <p className="italic text-left text-[#BD8928] font-[poppins-regular] text-[16px] leading-[28px] sm:text-[18px] sm:leading-[30px] pt-3">AllāHumma Ihdinā Limā Ikhtulifa FīHi Mina Al‑ḤAqqi Bi‑Idhnik</p>
                    <p className="text-left text-[#000] font-[poppins-regular] text-[16px] leading-[28px] sm:text-[18px] sm:leading-[30px]">O Allah, Guide Us To The Truth In Matters Where People Differ, By Your Permission.</p>
                  </div>
                </div>
              </div>



              <div className="w-[1px] bg-[#00000033] absolute top-0 left-0 right-0 mx-auto h-full 
            md:left-0 md:ml-[73px] md:right-auto">
              </div>
            </div>
          </div>
        </section>


      </main>

    </MainLayout>
  )
}

export default Step