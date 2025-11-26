// import React from "react";

export default function Testingone() {
  return (
    <div className="min-h-screen bg-[#f7f0e6] flex justify-center py-10 px-4">
      <div className="w-full max-w-4xl bg-[#fdf7ef] border border-[#d8c7a3] shadow-lg p-8 rounded-md text-[#5a4a3b]">
        <h3 className="text-center text-sm tracking-wide mb-1">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْم</h3>
        <p className="text-center text-xs mb-4">IN THE NAME OF ALLAH, THE BENEFICENT, THE MERCIFUL</p>

        <h1 className="text-center text-2xl font-bold mb-1">MUT'AH MARRIAGE CONTRACT</h1>
        <p className="text-center text-sm mb-8">(TEMPORARY MARRIAGE AGREEMENT)</p>

        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="font-semibold text-sm">Name of Male</label>
            <input type="text" className="w-full border border-gray-300 p-2 rounded mt-1" placeholder="Enter full legal name of male" />
          </div>
          <div>
            <label className="font-semibold text-sm">Name of Female</label>
            <input type="text" className="w-full border border-gray-300 p-2 rounded mt-1" placeholder="Enter full legal name of female" />
          </div>
        </div>

        {/* Mehr + Duration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="font-semibold text-sm">Mehr / Dowry Amount</label>
            <input type="text" className="w-full border border-gray-300 p-2 rounded mt-1" placeholder="e.g., 500 CAD, gold, etc." />
          </div>
          <div>
            <label className="font-semibold text-sm">Agreed Period of Marriage</label>
            <input type="text" className="w-full border border-gray-300 p-2 rounded mt-1" placeholder="e.g., 1 month, 6 months, 1 year" />
          </div>
        </div>

        {/* Recital Box */}
        <div className="mb-6">
          <label className="font-semibold text-sm block mb-2 text-center">RECITAL TEXT</label>
          <div className="border border-gray-300 bg-white p-4 rounded text-center text-sm leading-6">
            <p>زوَّجتُكَ نَفْسي في المُدّةِ المَعلُومةِ على المَهرِ المَعلُوم.</p>
            <p className="italic mt-2 text-xs">Zawwajtuka nafsi fi al-muddatil al-ma’lumah ‘ala al-mahr al-ma’lum.</p>
            <p className="mt-2 text-xs">“I marry myself to you for the agreed duration and the agreed dowry.”<br />The male responds: <strong>“Qabiltu”</strong> – “I accept.”</p>
          </div>
        </div>

        {/* Additional Conditions */}
        <div className="mb-8">
          <label className="font-semibold text-sm">Additional Conditions (Optional)</label>
          <textarea className="w-full border border-gray-300 p-3 rounded mt-1" placeholder="Enter any mutually agreed conditions (e.g., housing, financial support, rights, etc.)"></textarea>
        </div>

        {/* Declaration */}
        <h2 className="text-center font-semibold mb-4">DECLARATION</h2>
        <p className="text-sm mb-6 text-center">
          The above-named individuals willingly and knowingly enter into this Mut'ah marriage agreement in accordance with Islamic principles and
          mutual consent, having understood the terms, the duration, and the agreed Mehr.
        </p>

        {/* Signatures */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="font-semibold text-sm">Signature of Male</label>
            <input type="text" className="w-full border border-gray-300 p-2 rounded mt-1" placeholder="Sign or type full name" />
          </div>
          <div>
            <label className="font-semibold text-sm">Signature of Female</label>
            <input type="text" className="w-full border border-gray-300 p-2 rounded mt-1" placeholder="Sign or type full name" />
          </div>
        </div>

        {/* Date + Location */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="font-semibold text-sm">Date</label>
            <input type="text" className="w-full border border-gray-300 p-2 rounded mt-1" placeholder="YYYY/MM/DD" />
          </div>
          <div>
            <label className="font-semibold text-sm">Location</label>
            <input type="text" className="w-full border border-gray-300 p-2 rounded mt-1" placeholder="City / Country" />
          </div>
        </div>

        {/* Witnesses */}
        <h3 className="text-sm font-semibold mb-2">Witnesses (Recommended, Optional)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-2">
          <input type="text" className="border border-gray-300 p-2 rounded" placeholder="Name of Witness 1 (Optional)" />
          <input type="text" className="border border-gray-300 p-2 rounded" placeholder="Name of Witness 2 (Optional)" />
        </div>
        <p className="text-xs text-center mt-2">
          While not required in many juristic opinions for the validity of Mut'ah, witnesses are recommended for clarity and record.
        </p>
      </div>
    </div>
  );
}
