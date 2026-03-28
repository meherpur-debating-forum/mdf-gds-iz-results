const allParticipants = [
    // --- কবিতা লিখন (৫ জন) ---
    { name: "আব্দুর রহমান", phone: "01711111111", institute: "ঢাকা কলেজ", segment: "কবিতা লিখন", mark: "৯৫.৫", position: "১" },
    { name: "ইসতিয়াক আহমেদ", phone: "01644547079", institute: "মেহেরপুর সরকারি কলেজ", segment: "কবিতা লিখন", mark: "৯৫.৫", position: "১" },
    { name: "তানভীর আহমেদ", phone: "01711111112", institute: "রাজশাহী স্কুল", segment: "কবিতা লিখন", mark: "৯৪.২", position: "২" },
    { name: "আরিফ হোসেন", phone: "01700000000", institute: "কুষ্টিয়া সরকারি কলেজ", segment: "কবিতা লিখন", mark: "৯১", position: "৩" },
    { name: "নাসরিন আক্তার", phone: "01300000000", institute: "খুলনা বিশ্ববিদ্যালয়", segment: "কবিতা লিখন", mark: "৯০.৬", position: "৪" },
    
    // --- চিত্রাঙ্কন (৫ জন) ---
    { name: "জান্নাতুল ফেরদৌস", phone: "01822222222", institute: "রাজশাহী স্কুল", segment: "চিত্রাঙ্কন", mark: "৯৪.৮", position: "১" },
    { name: "ইসতিয়াক আহমেদ", phone: "01644547079", institute: "মেহেরপুর সরকারি কলেজ", segment: "চিত্রাঙ্কন", mark: "৬৭", position: "২" },
    { name: "রনি শেখ", phone: "01944444444", institute: "যশোর জিলা স্কুল", segment: "চিত্রাঙ্কন", mark: "৯২.৫", position: "২" },
    { name: "মালিহা রহমান", phone: "01755555555", institute: "বরিশাল ক্যাডেট কলেজ", segment: "চিত্রাঙ্কন", mark: "৯১.৩", position: "৩" },
    { name: "তাহসিন জুবায়ের", phone: "01866666666", institute: "সিলেট এমসি কলেজ", segment: "চিত্রাঙ্কন", mark: "৮৯.৯", position: "৪" },
    
    // --- বারোয়ারী বিতর্ক (৫ জন) ---
    { name: "জারা আহমেদ", phone: "01688888888", institute: "ভিকারুননিসা নূন", segment: "বারোয়ারী বিতর্ক", mark: "৯৩.৫", position: "১" },
    { name: "সাদিয়া ইসলাম", phone: "01511111111", institute: "নটর ডেম কলেজ", segment: "বারোয়ারী বিতর্ক", mark: "৮৮.৪", position: "২" },
    { name: "মাহমুদ হাসান", phone: "01777777777", institute: "কুমিল্লা ভিক্টোরিয়া কলেজ", segment: "বারোয়ারী বিতর্ক", mark: "৮৭.৯", position: "৩" },
    { name: "নাবিল মুরসালিন", phone: "01999999999", institute: "চট্টগ্রাম কলেজ", segment: "বারোয়ারী বিতর্ক", mark: "৮৫", position: "৪" },
    { name: "ফারহান শাহরিয়ার", phone: "01311111111", institute: "রংপুর কারমাইকেল কলেজ", segment: "বারোয়ারী বিতর্ক", mark: "৮২.৬", position: "৫" },
    
    // --- গ্রাফিতি (৫ টি দল) ---
    { name: "মাশরাফি বিন মুর্তজা, মাহমুদউল্লাহ রিয়াদ", phone: "01844444444", institute: "নড়াইল সরকারি কলেজ", segment: "গ্রাফিতি", mark: "৯৫", position: "১" },
    { name: "হাসান মাহমুদ, তামিম ইকবাল", phone: "01522222222", institute: "সরকারি টিচার্স ট্রেনিং কলেজ", segment: "গ্রাফিতি", mark: "৯৪", position: "২" },
    { name: "ফারিয়া সুলতানা, হ্যাবলা, কানচনমালা, আম", phone: "01822222223", institute: "ভিকারুননিসা", segment: "গ্রাফিতি", mark: "৯২.৫", position: "৩" },
    { name: "সাকিব আল হাসান", phone: "01933333333", institute: "আইডিয়াল স্কুল", segment: "গ্রাফিতি", mark: "৯০.৬", position: "৪" },
    { name: "জুবায়ের হোসেন", phone: "01733333333", institute: "মডেল স্কুল", segment: "গ্রাফিতি", mark: "৮৭", position: "৫" }
];