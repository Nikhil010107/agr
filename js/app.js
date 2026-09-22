/* =====================================================================
   KRISHIVIDYA — application
   Depends on: data-history.js (T, D helpers), data-knowledge.js,
   data-crops.js, data-animals.js, data-communities.js, data-maharashtra.js
   ===================================================================== */
"use strict";

/* ---------- 1. Interface text (English, Marathi, Hindi) ---------- */
const UI = {
  "nav.home": ["Home", "मुख्यपृष्ठ", "मुखपृष्ठ"], "nav.history": ["History", "इतिहास", "इतिहास"], "nav.texts": ["Texts", "ग्रंथ", "ग्रंथ"],
  "nav.water": ["Water & Rivers", "पाणी व नद्या", "जल व नदियाँ"], "nav.practices": ["Practices", "पद्धती", "पद्धतियाँ"], "nav.crops": ["Crops", "पिके", "फसलें"],
  "nav.animals": ["Animals", "पशुधन", "पशुधन"], "nav.communities": ["Communities", "समुदाय", "समुदाय"], "nav.mh": ["Maharashtra Data", "महाराष्ट्र आकडेवारी", "महाराष्ट्र आँकड़े"],
  "nav.sources": ["Sources", "स्रोत", "स्रोत"], "nav.contribute": ["Contribute", "योगदान द्या", "योगदान दें"],
  "hero.eyebrow": ["An open archive of Indian indigenous knowledge", "भारतीय पारंपरिक ज्ञानाचा मुक्त संग्रह", "भारतीय पारंपरिक ज्ञान का मुक्त संग्रह"],
  "hero.motto": ["Preserving India's indigenous knowledge of land, water and animals — from the Vedas to 2026.", "वेदकाळापासून २०२६ पर्यंत — भारताच्या माती, पाणी आणि पशुधनाविषयीच्या पारंपरिक ज्ञानाचे जतन.", "वेदों से 2026 तक — भारत की मिट्टी, जल और पशुधन से जुड़े पारंपरिक ज्ञान का संरक्षण।"],
  "hero.sub": ["KRISHIVIDYA brings together the farming, animal-husbandry and water wisdom of India's communities, the classical texts that recorded it, and the official data that shows how it is changing. Every entry names its source.", "कृषिविद्या भारतातील समुदायांचे शेती, पशुपालन व जलव्यवस्थापनाचे ज्ञान, ते नोंदवणारे प्राचीन ग्रंथ आणि त्यातील बदल दाखवणारी अधिकृत आकडेवारी एकत्र आणते. प्रत्येक नोंदीसोबत तिचा स्रोत दिला आहे.", "कृषिविद्या भारत के समुदायों के कृषि, पशुपालन और जल ज्ञान, उसे दर्ज करने वाले प्राचीन ग्रंथों और उसमें हो रहे बदलावों को दिखाने वाले आधिकारिक आँकड़ों को एक साथ लाती है। हर प्रविष्टि के साथ उसका स्रोत दिया गया है।"],
  "hero.quote": ["“Play not with dice; cultivate your field.” — Rigveda 10.34.13", "“जुगार खेळू नकोस; शेती कर.” — ऋग्वेद १०.३४.१३", "“जुआ मत खेलो; खेती करो।” — ऋग्वेद 10.34.13"],
  "hero.explore": ["Start exploring", "शोध सुरू करा", "खोज शुरू करें"], "hero.search": ["Search the archive", "संग्रहात शोधा", "संग्रह में खोजें"],
  "stat.records": ["knowledge records", "ज्ञान नोंदी", "ज्ञान प्रविष्टियाँ"], "stat.years": ["years of history", "वर्षांचा इतिहास", "वर्षों का इतिहास"],
  "stat.crops": ["crops and varieties", "पिके व वाण", "फसलें व किस्में"], "stat.animals": ["breeds and helper animals", "जाती व उपयुक्त प्राणी", "नस्लें व सहायक जीव"],
  "stat.comms": ["community profiles", "समुदाय परिचय", "समुदाय परिचय"], "stat.districts": ["districts with official data", "अधिकृत आकडेवारीसह जिल्हे", "आधिकारिक आँकड़ों सहित ज़िले"],
  "about.title": ["Why KRISHIVIDYA exists", "कृषिविद्या का?", "कृषिविद्या क्यों?"],
  "about.p1": ["For thousands of years, Indian farmers, herders and fishers have developed knowledge about seeds, soils, rain, rivers and animals. Most of it was never written down. It passed from parent to child in the field, in songs and in proverbs.", "हजारो वर्षांपासून भारतीय शेतकरी, पशुपालक व मच्छीमारांनी बियाणे, माती, पाऊस, नद्या आणि जनावरांविषयी ज्ञान विकसित केले. त्यातील बहुतांश कधीच लिहिले गेले नाही; ते शेतात, गाण्यांत आणि म्हणींतून पिढ्यान्‌पिढ्या पुढे गेले.", "हज़ारों वर्षों से भारतीय किसानों, पशुपालकों और मछुआरों ने बीज, मिट्टी, वर्षा, नदियों और पशुओं के बारे में ज्ञान विकसित किया है। इसका अधिकांश भाग कभी लिखा नहीं गया; यह खेतों, गीतों और कहावतों के माध्यम से पीढ़ी-दर-पीढ़ी आगे बढ़ा।"],
  "about.p2": ["That knowledge is disappearing quickly. In Maharashtra alone, the area under jowar has fallen by almost three-quarters since 1960, and the number of working bullocks fell by nearly a third between 2012 and 2019. KRISHIVIDYA records what remains, checks it against evidence, and makes it free for everyone to use.", "हे ज्ञान झपाट्याने लोप पावत आहे. केवळ महाराष्ट्रात १९६० पासून ज्वारीचे क्षेत्र जवळपास तीन-चतुर्थांशाने घटले, आणि २०१२ ते २०१९ दरम्यान कामाच्या बैलांची संख्या सुमारे एक-तृतीयांशाने कमी झाली. कृषिविद्या जे शिल्लक आहे त्याची नोंद करते, पुराव्यांशी पडताळते आणि सर्वांसाठी मोफत उपलब्ध करते.", "यह ज्ञान तेज़ी से लुप्त हो रहा है। केवल महाराष्ट्र में 1960 से ज्वार का क्षेत्र लगभग तीन-चौथाई घट गया है, और 2012 से 2019 के बीच काम करने वाले बैलों की संख्या लगभग एक-तिहाई कम हुई। कृषिविद्या जो शेष है उसे दर्ज करती है, प्रमाणों से जाँचती है और सभी के लिए निःशुल्क उपलब्ध कराती है।"],
  "motto.label": ["Our motto", "आमचे ब्रीदवाक्य", "हमारा ध्येय वाक्य"],
  "obj.title": ["Our objectives", "आमची उद्दिष्टे", "हमारे उद्देश्य"],
  "obj.1": ["Preserve the indigenous knowledge of India's farmers, herders, fishers and forest communities before it is lost.", "भारतातील शेतकरी, पशुपालक, मच्छीमार व वनवासी समुदायांचे पारंपरिक ज्ञान लोप पावण्यापूर्वी जतन करणे.", "भारत के किसानों, पशुपालकों, मछुआरों और वनवासी समुदायों के पारंपरिक ज्ञान को लुप्त होने से पहले संरक्षित करना।"],
  "obj.2": ["Trace that knowledge through history, from the Vedas and classical treatises to present-day policy.", "वेद व प्राचीन ग्रंथांपासून आजच्या धोरणांपर्यंत या ज्ञानाचा ऐतिहासिक मागोवा घेणे.", "वेदों और प्राचीन ग्रंथों से लेकर आज की नीतियों तक इस ज्ञान का ऐतिहासिक क्रम प्रस्तुत करना।"],
  "obj.3": ["Separate what tradition records from what science has confirmed, so that users can judge each practice fairly.", "परंपरेतील नोंदी आणि विज्ञानाने सिद्ध केलेल्या गोष्टी वेगळ्या दाखवणे, जेणेकरून प्रत्येक पद्धतीचे योग्य मूल्यमापन करता येईल.", "परंपरा में दर्ज बातों और विज्ञान द्वारा प्रमाणित बातों को अलग दिखाना, ताकि हर पद्धति का उचित मूल्यांकन हो सके।"],
  "obj.4": ["Document every community of Maharashtra as the owner of its knowledge, with consent, credit and benefit sharing.", "महाराष्ट्रातील प्रत्येक समुदायाला त्याच्या ज्ञानाचा मालक मानून, संमती, श्रेय व लाभवाटपासह नोंद करणे.", "महाराष्ट्र के हर समुदाय को उसके ज्ञान का स्वामी मानते हुए सहमति, श्रेय और लाभ-साझेदारी के साथ दर्ज करना।"],
  "obj.5": ["Conserve indigenous crop varieties and animal breeds by showing where they survive and how fast they are declining.", "पारंपरिक पीकवाण व पशुजाती कुठे टिकून आहेत आणि किती वेगाने घटत आहेत हे दाखवून त्यांचे संवर्धन करणे.", "पारंपरिक फसल किस्में और पशु नस्लें कहाँ बची हैं और कितनी तेज़ी से घट रही हैं, यह दिखाकर उनका संरक्षण करना।"],
  "obj.6": ["Give students, researchers and planners one reliable, free and searchable source.", "विद्यार्थी, संशोधक व नियोजनकर्त्यांना एकच विश्वासार्ह, मोफत व शोधता येणारा स्रोत देणे.", "छात्रों, शोधकर्ताओं और योजनाकारों को एक विश्वसनीय, निःशुल्क और खोजने योग्य स्रोत देना।"],
  "obj.7": ["Link traditional knowledge to today's schemes and markets, so that it can support livelihoods.", "पारंपरिक ज्ञानाला आजच्या योजना व बाजारपेठांशी जोडून उपजीविकेला आधार देणे.", "पारंपरिक ज्ञान को आज की योजनाओं और बाज़ारों से जोड़कर आजीविका को सहारा देना।"],
  "obj.8": ["Learn from low-cost, climate-resilient practices that matter most to India's small farmers.", "भारतातील लहान शेतकऱ्यांसाठी महत्त्वाच्या कमी खर्चाच्या व हवामान-सक्षम पद्धतींमधून शिकणे.", "भारत के छोटे किसानों के लिए महत्वपूर्ण कम लागत और जलवायु-सक्षम पद्धतियों से सीखना।"],
  "sec.history": ["Ten thousand years of Indian farming", "भारतीय शेतीची दहा हजार वर्षे", "भारतीय खेती के दस हज़ार वर्ष"],
  "sec.history.sub": ["From the first fields at Mehrgarh to the natural-farming mission of 2024. Each event is tagged by the kind of evidence behind it.", "मेहरगढच्या पहिल्या शेतांपासून २०२४ च्या नैसर्गिक शेती अभियानापर्यंत. प्रत्येक घटनेसोबत तिच्या पुराव्याचा प्रकार दिला आहे.", "मेहरगढ़ के पहले खेतों से 2024 के प्राकृतिक खेती मिशन तक। हर घटना के साथ उसके प्रमाण का प्रकार दिया गया है।"],
  "sec.texts": ["The classical texts", "प्राचीन ग्रंथ", "प्राचीन ग्रंथ"],
  "sec.texts.sub": ["The Vedas, treatises and regional classics that recorded India's knowledge of farming, animals and water.", "भारताचे शेती, पशुधन व पाणी यांविषयीचे ज्ञान नोंदवणारे वेद, शास्त्रग्रंथ आणि प्रादेशिक अभिजात ग्रंथ.", "भारत के कृषि, पशुधन और जल ज्ञान को दर्ज करने वाले वेद, शास्त्र और क्षेत्रीय ग्रंथ।"],
  "sec.water": ["Water and rivers", "पाणी आणि नद्या", "जल और नदियाँ"],
  "sec.water.sub": ["How communities across India captured, shared and lifted water, and what Maharashtra's rivers mean to its farmers.", "भारतभरातील समुदायांनी पाणी कसे साठवले, वाटले व उपसले, आणि महाराष्ट्राच्या नद्यांचे शेतकऱ्यांसाठी महत्त्व.", "भारत भर के समुदायों ने पानी कैसे संग्रहित, साझा और उठाया, और महाराष्ट्र की नदियों का किसानों के लिए महत्व।"],
  "sec.practices": ["Indigenous practices", "पारंपरिक पद्धती", "पारंपरिक पद्धतियाँ"],
  "sec.practices.sub": ["Methods for soil, seed, crops, pests, water, weather and animals, each marked by how far science supports it.", "माती, बियाणे, पिके, कीड, पाणी, हवामान व जनावरे यांसाठीच्या पद्धती — प्रत्येकीला विज्ञानाचा किती आधार आहे हे दर्शवलेले.", "मिट्टी, बीज, फसल, कीट, जल, मौसम और पशुओं से जुड़ी पद्धतियाँ — हर एक पर विज्ञान का कितना समर्थन है, यह दर्शाया गया है।"],
  "sec.calendar": ["The farmer's calendar", "शेतकऱ्याची दिनदर्शिका", "किसान का पंचांग"],
  "sec.crops": ["Crops and varieties", "पिके आणि वाण", "फसलें और किस्में"],
  "sec.crops.sub": ["Cereals, millets, pulses, oilseeds, vegetables, forest greens, fruits and spices, with Maharashtra's landraces and GI-registered produce.", "तृणधान्ये, कडधान्ये, तेलबिया, भाज्या, रानभाज्या, फळे व मसाले — महाराष्ट्रातील गावरान वाण व GI नोंदणीकृत उत्पादनांसह.", "अनाज, मोटे अनाज, दलहन, तिलहन, सब्ज़ियाँ, वन साग, फल और मसाले — महाराष्ट्र की देसी किस्मों और GI पंजीकृत उत्पादों सहित।"],
  "sec.animals": ["Animals of Indian farming", "भारतीय शेतीतील प्राणी", "भारतीय खेती के पशु"],
  "sec.animals.sub": ["Maharashtra's registered breeds, notable breeds from across India, and the dogs, cats, bees, birds and other creatures that help farmers.", "महाराष्ट्रातील नोंदणीकृत जाती, भारतभरातील महत्त्वाच्या जाती, आणि शेतकऱ्यांना मदत करणारे कुत्रे, मांजरी, मधमाश्या, पक्षी व इतर जीव.", "महाराष्ट्र की पंजीकृत नस्लें, भारत भर की प्रमुख नस्लें, और किसानों की मदद करने वाले कुत्ते, बिल्लियाँ, मधुमक्खियाँ, पक्षी व अन्य जीव।"],
  "sec.communities": ["Communities of Maharashtra", "महाराष्ट्रातील समुदाय", "महाराष्ट्र के समुदाय"],
  "sec.communities.sub": ["How each community farms, keeps animals and manages land and water, described in detail and in its own context.", "प्रत्येक समुदाय शेती कशी करतो, जनावरे कशी पाळतो आणि जमीन व पाण्याचे व्यवस्थापन कसे करतो — सविस्तर आणि त्याच्या संदर्भात.", "हर समुदाय कैसे खेती करता है, पशु पालता है और भूमि व जल का प्रबंधन करता है — विस्तार से और उसके संदर्भ में।"],
  "sec.mh": ["Maharashtra in numbers", "आकड्यांतील महाराष्ट्र", "आँकड़ों में महाराष्ट्र"],
  "sec.mh.sub": ["Official livestock, poultry and income data for every district, long-term trends and measured declines.", "प्रत्येक जिल्ह्याची अधिकृत पशुधन, कुक्कुट व उत्पन्न आकडेवारी, दीर्घकालीन कल आणि मोजलेली घट.", "हर ज़िले के आधिकारिक पशुधन, मुर्गी और आय आँकड़े, दीर्घकालिक रुझान और मापी गई गिरावट।"],
  "sec.sources": ["Sources and method", "स्रोत व पद्धत", "स्रोत और पद्धति"],
  "sec.contribute": ["Share what you know", "आपले ज्ञान सांगा", "अपना ज्ञान साझा करें"],
  "ui.all": ["All", "सर्व", "सभी"], "ui.results": ["results", "नोंदी", "परिणाम"], "ui.search": ["Search", "शोधा", "खोजें"], "ui.close": ["Close", "बंद करा", "बंद करें"],
  "ui.mhOnly": ["Maharashtra only", "फक्त महाराष्ट्र", "केवल महाराष्ट्र"], "ui.none": ["Nothing matches your search yet.", "आपल्या शोधाशी जुळणारे काही आढळले नाही.", "आपकी खोज से मेल खाता कुछ नहीं मिला।"],
  "ui.details": ["Read more", "अधिक वाचा", "और पढ़ें"], "ui.open": ["Open source", "स्रोत उघडा", "स्रोत खोलें"], "ui.searchPh": ["Search crops, texts, animals, communities, districts…", "पिके, ग्रंथ, पशू, समुदाय, जिल्हे शोधा…", "फसलें, ग्रंथ, पशु, समुदाय, ज़िले खोजें…"],
  "ui.filterPh": ["Filter this section…", "या विभागात शोधा…", "इस भाग में खोजें…"], "ui.theme": ["Switch theme", "थीम बदला", "थीम बदलें"],
  "ui.englishNote": ["Detailed entries are written in English with Marathi, Hindi and Sanskrit terms. Full translations are in progress.", "सविस्तर नोंदी इंग्रजीत असून त्यांत मराठी, हिंदी व संस्कृत संज्ञा दिल्या आहेत. पूर्ण भाषांतर सुरू आहे.", "विस्तृत प्रविष्टियाँ अंग्रेज़ी में हैं और उनमें मराठी, हिंदी व संस्कृत शब्द दिए गए हैं। पूर्ण अनुवाद जारी है।"],
  "tag.archaeology": ["Archaeology", "पुरातत्त्व", "पुरातत्व"], "tag.text": ["Classical text", "प्राचीन ग्रंथ", "प्राचीन ग्रंथ"], "tag.history": ["Historical record", "ऐतिहासिक नोंद", "ऐतिहासिक अभिलेख"],
  "tag.policy": ["Policy & census", "धोरण व गणना", "नीति व गणना"], "tag.science": ["Science", "विज्ञान", "विज्ञान"],
  "st.validated": ["Supported by research", "संशोधनाने सिद्ध", "शोध से प्रमाणित"], "st.studied": ["Under study", "अभ्यास सुरू", "अध्ययन जारी"], "st.heritage": ["Heritage record", "वारसा नोंद", "विरासत अभिलेख"],
  "an.mh": ["Maharashtra's registered breeds", "महाराष्ट्रातील नोंदणीकृत जाती", "महाराष्ट्र की पंजीकृत नस्लें"], "an.india": ["Breeds across India", "भारतभरातील जाती", "भारत भर की नस्लें"], "an.helpers": ["Farmers' helpers", "शेतकऱ्यांचे मित्र", "किसानों के मित्र"],
  "cal.stars": ["Rain stars (nakshatras)", "पावसाची नक्षत्रे", "वर्षा नक्षत्र"], "cal.seasons": ["The six seasons (ritus)", "सहा ऋतू", "छह ऋतुएँ"], "cal.fest": ["Festivals of the farming year", "शेती वर्षातील सण", "कृषि वर्ष के त्योहार"], "cal.sayings": ["Words of wisdom", "ज्ञानवचने", "ज्ञान वचन"],
  "mh.districts": ["District explorer", "जिल्हा दर्शिका", "ज़िला दर्शिका"], "mh.rank": ["Rank by", "क्रमवारी", "क्रम आधार"], "mh.compare": ["Compare two districts", "दोन जिल्ह्यांची तुलना", "दो ज़िलों की तुलना"],
  "mh.csv": ["Download CSV", "CSV डाउनलोड", "CSV डाउनलोड"], "mh.trends": ["Long-term trends", "दीर्घकालीन कल", "दीर्घकालिक रुझान"], "mh.risk": ["Measured declines", "मोजलेली घट", "मापी गई गिरावट"],
  "mh.facts": ["Key facts, 2024-26", "महत्त्वाची तथ्ये, २०२४-२६", "प्रमुख तथ्य, 2024-26"], "mh.note": ["Livestock figures come from the 20th Livestock Census (2019), the latest published count; results of the 21st census were not yet available. Mumbai City and Suburban are reported together, and Palghar's GDDP is included in Thane's.", "पशुधनाचे आकडे २० व्या पशुगणनेचे (२०१९) — प्रकाशित झालेली नवीनतम गणना; २१ व्या गणनेचे निकाल अद्याप उपलब्ध नाहीत. मुंबई शहर व उपनगराची एकत्रित नोंद आहे आणि पालघरचे GDDP ठाण्यात समाविष्ट आहे.", "पशुधन आँकड़े 20वीं पशुधन गणना (2019) के हैं — नवीनतम प्रकाशित गणना; 21वीं गणना के परिणाम अभी उपलब्ध नहीं हैं। मुंबई शहर व उपनगर संयुक्त दर्ज हैं और पालघर का GDDP ठाणे में शामिल है।"],
  "f.name": ["Your name", "आपले नाव", "आपका नाम"], "f.place": ["Village and district", "गाव व जिल्हा", "गाँव व ज़िला"], "f.topic": ["Topic", "विषय", "विषय"], "f.story": ["Describe the practice, seed, animal or tradition", "पद्धत, बियाणे, जनावर किंवा परंपरेचे वर्णन करा", "पद्धति, बीज, पशु या परंपरा का वर्णन करें"],
  "f.consent": ["I have permission from the knowledge holder to share this, and it may be published with credit.", "ही माहिती देण्यासाठी मला ज्ञानधारकाची परवानगी आहे आणि ती श्रेयासह प्रकाशित करता येईल.", "यह जानकारी साझा करने के लिए मुझे ज्ञान-धारक की अनुमति है और इसे श्रेय सहित प्रकाशित किया जा सकता है।"],
  "f.submit": ["Save contribution", "योगदान जतन करा", "योगदान सहेजें"], "f.ok": ["Thank you. Your contribution has been saved on this device and downloaded as a file you can send to the project team.", "धन्यवाद. आपले योगदान या उपकरणावर जतन झाले असून प्रकल्प चमूला पाठवण्यासाठी फाईल म्हणून डाउनलोड झाले आहे.", "धन्यवाद। आपका योगदान इस उपकरण पर सहेजा गया है और परियोजना दल को भेजने के लिए फ़ाइल के रूप में डाउनलोड हुआ है।"],
  "f.err": ["Please fill in every field and confirm consent.", "कृपया सर्व रकाने भरा व संमतीची खात्री करा.", "कृपया सभी खाने भरें और सहमति की पुष्टि करें।"],
  "foot.line": ["KRISHIVIDYA is an academic research prototype. Knowledge belongs to the communities who hold it.", "कृषिविद्या हा शैक्षणिक संशोधन प्रकल्प आहे. ज्ञान त्या समुदायांचे आहे ज्यांनी ते जपले.", "कृषिविद्या एक शैक्षणिक शोध परियोजना है। ज्ञान उन्हीं समुदायों का है जिन्होंने इसे सहेजा।"],
  "sp.cattle": ["Cattle", "गोवंश", "गोवंश"], "sp.goat": ["Goats", "शेळ्या", "बकरियाँ"], "sp.buffalo": ["Buffalo", "म्हशी", "भैंस"], "sp.sheep": ["Sheep", "मेंढ्या", "भेड़ें"], "sp.pig": ["Pigs", "डुकरे", "सूअर"],
  "crop.jowar": ["Jowar", "ज्वारी", "ज्वार"], "crop.pulses": ["All pulses", "सर्व कडधान्ये", "सभी दलहन"], "crop.cotton": ["Cotton", "कापूस", "कपास"], "crop.bajra": ["Bajra", "बाजरी", "बाजरा"],
  "div.konkan": ["Konkan", "कोकण", "कोंकण"], "div.nashik": ["Nashik", "नाशिक", "नाशिक"], "div.pune": ["Pune", "पुणे", "पुणे"], "div.marathwada": ["Marathwada", "मराठवाडा", "मराठवाड़ा"], "div.amravati": ["Amravati", "अमरावती", "अमरावती"], "div.nagpur": ["Nagpur", "नागपूर", "नागपुर"],
  "dm.livestock": ["Livestock (5 species)", "पशुधन (५ प्रजाती)", "पशुधन (5 प्रजातियाँ)"], "dm.cattle": ["Cattle", "गोवंश", "गोवंश"], "dm.buffalo": ["Buffalo", "म्हशी", "भैंस"], "dm.goat": ["Goats", "शेळ्या", "बकरियाँ"],
  "dm.sheep": ["Sheep", "मेंढ्या", "भेड़ें"], "dm.pig": ["Pigs", "डुकरे", "सूअर"], "dm.poultry": ["Poultry", "कुक्कुट", "मुर्गी"], "dm.dens": ["Livestock per km²", "प्रति चौ.कि.मी. पशुधन", "प्रति वर्ग कि.मी. पशुधन"],
  "dm.per1k": ["Livestock per 1,000 people", "१,००० लोकांमागे पशुधन", "प्रति 1,000 लोगों पर पशुधन"], "dm.milk1k": ["Milch animals per 1,000 people", "१,००० लोकांमागे दुभती जनावरे", "प्रति 1,000 लोगों पर दुधारू पशु"],
  "dm.gddp": ["GDDP 2024-25 (₹ crore)", "GDDP २०२४-२५ (₹ कोटी)", "GDDP 2024-25 (₹ करोड़)"], "dm.pci": ["Per-capita income 2024-25 (₹)", "दरडोई उत्पन्न २०२४-२५ (₹)", "प्रति व्यक्ति आय 2024-25 (₹)"]
};
const LANGS = ["en", "mr", "hi"];
const state = {
  lang: "en", theme: "light", era: "all", mhOnly: false, textTopic: "all", waterScope: "all", pracCat: "all",
  cropCat: "all", cropFlag: "all", cropQ: "", animalTab: "mh", species: "all", helperGroup: "all", commCat: "all", commQ: "",
  dist: { div: "all", sort: "livestock", cmpA: "ahilyanagar", cmpB: "gadchiroli" }
};

/* ---------- 2. Helpers ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = v => String(v ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const tr = v => v == null ? "" : typeof v === "string" ? v : (v[state.lang] || v.en || "");
const t = k => { const e = UI[k]; return e ? (e[LANGS.indexOf(state.lang)] || e[0]) : k; };
const numFmt = (v, d = 0) => Number(v).toLocaleString("en-IN", { minimumFractionDigits: d, maximumFractionDigits: d });
const lower = o => JSON.stringify(o).toLowerCase();
const empty = () => `<p class="empty">🔎 ${esc(t("ui.none"))}</p>`;
function chips(el, items, active, label, onPick) {
  el.innerHTML = items.map(v => `<button type="button" class="chip${v === active ? " on" : ""}" data-v="${esc(v)}" aria-pressed="${v === active}">${esc(label(v))}</button>`).join("");
  el.onclick = e => { const b = e.target.closest(".chip"); if (b) onPick(b.dataset.v); };
}
const count = (arr, fn) => arr.filter(fn).length;
const srcLink = key => SOURCES[key] ? `<a href="${SOURCES[key].url}" target="_blank" rel="noopener noreferrer">${esc(SOURCES[key].label)}</a>` : "";

/* ---------- 3. Modal ---------- */
let lastFocus = null;
function openModal(html) {
  lastFocus = document.activeElement;
  $("#modalBody").innerHTML = html;
  $("#modal").hidden = false; document.body.classList.add("locked");
  $("#modalClose").focus();
}
function closeModal() { $("#modal").hidden = true; document.body.classList.remove("locked"); lastFocus && lastFocus.focus && lastFocus.focus(); }

/* ---------- 4. Section renderers ---------- */
function renderHero() {
  const records = TIMELINE.length + TEXTS.length + WATER.length + RIVERS.length + PRACTICES.length + CROPS.length + INDIA_BREEDS.length + livestockBreeds.length + HELPERS.length + COMMUNITIES.length + DISTRICTS.length;
  const stats = [[records, "stat.records"], [9000, "stat.years"], [CROPS.length, "stat.crops"], [INDIA_BREEDS.length + livestockBreeds.length + HELPERS.length, "stat.animals"], [COMMUNITIES.length, "stat.comms"], [36, "stat.districts"]];
  $("#heroStats").innerHTML = stats.map(([v, k]) => `<div class="hstat"><strong data-count="${v}">${numFmt(v)}${k === "stat.years" ? "+" : ""}</strong><span>${esc(t(k))}</span></div>`).join("");
}
function renderTimeline() {
  chips($("#eraChips"), ["all", ...ERAS.map(e => e.id)], state.era, v => v === "all" ? t("ui.all") : ERAS.find(e => e.id === v).label, v => { state.era = v; renderTimeline(); });
  const list = TIMELINE.filter(e => (state.era === "all" || e.era === state.era) && (!state.mhOnly || e.mh)).sort((a, b) => a.s - b.s);
  $("#tlCount").textContent = `${list.length} ${t("ui.results")}`;
  let lastEra = null;
  $("#timeline").innerHTML = list.length ? list.map(e => {
    const era = ERAS.find(x => x.id === e.era);
    const head = e.era !== lastEra ? `<li class="tl-era"><span>${era.icon}</span><h3>${esc(era.label)}</h3><small>${esc(era.range)}</small></li>` : "";
    lastEra = e.era;
    return head + `<li class="tl-item tag-${e.tag}"><div class="tl-date">${esc(e.y)}</div><article class="tl-card"><div class="tl-tags"><span class="etag etag-${e.tag}">${esc(t("tag." + e.tag))}</span>${e.mh ? `<span class="etag etag-mh">Maharashtra</span>` : ""}</div><h4>${esc(e.title)}</h4><p>${esc(e.text)}</p></article></li>`;
  }).join("") : empty();
}
function renderTexts() {
  const topics = ["all", "farming", "animals", "water"];
  const icons = { farming: "🌾", animals: "🐄", water: "💧" };
  chips($("#textChips"), topics, state.textTopic, v => v === "all" ? t("ui.all") : `${icons[v]} ${v[0].toUpperCase() + v.slice(1)}`, v => { state.textTopic = v; renderTexts(); });
  const list = TEXTS.filter(x => state.textTopic === "all" || x.topics.includes(state.textTopic));
  $("#textGrid").innerHTML = list.map(x => `<article class="text-card${x.mh ? " is-mh" : ""}">
    <p class="text-dev">${esc(x.dev)}</p><h3>${esc(x.name)}</h3>
    <p class="text-meta">${esc(x.date)} · ${esc(x.lang)}</p><p>${esc(x.summary)}</p>
    ${x.refs ? `<p class="text-refs"><strong>Key passages:</strong> ${esc(x.refs)}</p>` : ""}
    <div class="card-foot">${x.topics.map(tp => `<span class="mini">${icons[tp]} ${tp}</span>`).join("")}${x.url ? `<a class="link" href="${x.url}" target="_blank" rel="noopener noreferrer">${esc(t("ui.open"))} ↗</a>` : ""}</div></article>`).join("");
}
function renderWater() {
  $("#riverGrid").innerHTML = RIVERS.map(r => `<article class="river"><h3>${esc(r.name)} <span class="dev">${esc(r.dev)}</span></h3><p class="text-meta">${esc(r.basin)}</p><p>${esc(r.text)}</p></article>`).join("");
  chips($("#waterChips"), ["all", "mh", "india"], state.waterScope, v => v === "all" ? t("ui.all") : v === "mh" ? "Maharashtra" : "Rest of India", v => { state.waterScope = v; renderWater(); });
  const list = WATER.filter(w => state.waterScope === "all" || (state.waterScope === "mh" ? w.mh : !w.mh));
  $("#waterGrid").innerHTML = list.map(w => `<article class="kcard${w.mh ? " is-mh" : ""}"><p class="kc-type">💧 ${esc(w.type)}</p><h3>${esc(w.name)} <span class="dev">${esc(w.dev)}</span></h3><p class="text-meta">📍 ${esc(w.region)}</p><p>${esc(w.text)}</p></article>`).join("");
}
function renderPractices() {
  const cats = { all: t("ui.all"), soil: "🪱 Soil", seed: "🫘 Seed", cropping: "🌾 Cropping", pest: "🐞 Pests", water: "💧 Water & land", weather: "🌦️ Weather", animal: "🐄 Animals" };
  chips($("#pracChips"), Object.keys(cats), state.pracCat, v => cats[v], v => { state.pracCat = v; renderPractices(); });
  const list = PRACTICES.filter(p => state.pracCat === "all" || p.cat === state.pracCat);
  $("#pracGrid").innerHTML = list.map(p => `<article class="kcard st-${p.status}"><div class="kc-head"><span class="status status-${p.status}">${esc(t("st." + p.status))}</span>${p.mh ? `<span class="etag etag-mh">Maharashtra</span>` : ""}</div>
    <h3>${esc(p.name)} <span class="dev">${esc(p.dev)}</span></h3><p>${esc(p.text)}</p></article>`).join("");
  $("#starStrip").innerHTML = NAKSHATRAS.map(([n, dev, d, note], i) => `<li style="--i:${i}"><strong>${esc(n)}</strong><span class="dev">${esc(dev)}</span><em>${esc(d)}</em><p>${esc(note)}</p></li>`).join("");
  $("#seasonTable").innerHTML = `<thead><tr><th scope="col">Ritu</th><th scope="col">Months</th><th scope="col">Work on the farm</th></tr></thead><tbody>${SEASONS.map(([n, dev, en, m, w]) => `<tr><th scope="row">${esc(n)} <span class="dev">${esc(dev)}</span><br><small>${esc(en)}</small></th><td>${esc(m)}</td><td>${esc(w)}</td></tr>`).join("")}</tbody>`;
  $("#festGrid").innerHTML = festivals.map(f => `<article class="kcard"><h3>${esc(tr(f.name))}</h3><p class="text-meta">📅 ${esc(tr(f.when))} · 📍 ${esc(tr(f.region))}</p><p>${esc(tr(f.agri))}.</p><p class="text-meta">🍲 ${esc(tr(f.food))} · ✨ ${esc(tr(f.tradition))}</p></article>`).join("");
  $("#sayings").innerHTML = SAYINGS.map(s => `<figure class="saying"><blockquote>${esc(s.text)}</blockquote><p>${esc(s.tr)}</p><figcaption>— ${esc(s.src)}</figcaption></figure>`).join("");
}
function renderCrops() {
  const cats = ["all", ...Object.keys(CROP_CATS)];
  chips($("#cropChips"), cats, state.cropCat, v => v === "all" ? `${t("ui.all")} (${CROPS.length})` : `${CROP_CATS[v]} (${count(CROPS, c => c.cat === v)})`, v => { state.cropCat = v; renderCrops(); });
  const flags = { all: "Every type", GI: "🏅 GI-registered", land: "🌱 Landraces", wild: "🌿 Wild & forest" };
  chips($("#cropFlags"), Object.keys(flags), state.cropFlag, v => flags[v], v => { state.cropFlag = v; renderCrops(); });
  const q = state.cropQ.trim().toLowerCase();
  const list = CROPS.filter(c => (state.cropCat === "all" || c.cat === state.cropCat) && (state.cropFlag === "all" || c.flags.includes(state.cropFlag)) && (!q || lower(c).includes(q)));
  $("#cropCount").textContent = `${list.length} ${t("ui.results")}`;
  const seasonIcon = { kharif: "🌧️ Kharif", rabi: "❄️ Rabi", summer: "☀️ Summer", perennial: "🔁 Perennial", all: "📅 Year-round" };
  $("#cropGrid").innerHTML = list.length ? list.map(c => `<article class="crop cat-${c.cat}">
    <header><h3>${esc(c.name)}</h3><span class="dev">${esc(c.dev)}</span></header><p class="sci">${esc(c.sci)}</p><p>${esc(c.note)}</p>
    <div class="card-foot"><span class="mini">${esc(CROP_CATS[c.cat])}</span>${c.season.split(" ").map(s => `<span class="mini">${esc(seasonIcon[s] || s)}</span>`).join("")}${c.flags.includes("GI") ? `<span class="mini gi">🏅 GI</span>` : ""}${c.flags.includes("land") ? `<span class="mini land">🌱 Landrace</span>` : ""}</div></article>`).join("") : empty();
}
function renderAnimals() {
  const tabs = { mh: t("an.mh"), india: t("an.india"), helpers: t("an.helpers") };
  chips($("#animalTabs"), Object.keys(tabs), state.animalTab, v => tabs[v], v => { state.animalTab = v; renderAnimals(); });
  const sub = $("#animalSub"), grid = $("#animalGrid");
  if (state.animalTab === "mh") {
    sub.innerHTML = `<p class="note">These 17 breeds are registered by ICAR-NBAGR as native to Maharashtra. Select a breed to read its details and sources.</p>`;
    grid.innerHTML = livestockBreeds.map(b => `<article class="kcard click" tabindex="0" role="button" data-breed="${b.id}"><p class="kc-type">${esc(b.type)}</p><h3>${esc(tr(b.name))}</h3>
      <p class="text-meta">📍 ${esc(tr(b.region))}</p><p>${esc(tr(b.purpose))}</p><div class="card-foot"><span class="mini">🧬 NBAGR</span><span class="link">${esc(t("ui.details"))} →</span></div></article>`).join("");
  } else if (state.animalTab === "india") {
    const sp = ["all", ...new Set(INDIA_BREEDS.map(b => b.species))];
    sub.innerHTML = `<div class="chips" id="speciesChips"></div><p class="note">A selection of notable indigenous breeds. ICAR-NBAGR recognised 219 indigenous breeds of 16 species in 2024.</p>`;
    chips($("#speciesChips"), sp, state.species, v => v === "all" ? t("ui.all") : v[0].toUpperCase() + v.slice(1), v => { state.species = v; renderAnimals(); });
    grid.innerHTML = INDIA_BREEDS.filter(b => state.species === "all" || b.species === state.species).map(b => `<article class="kcard"><p class="kc-type">${esc(b.species)} · ${esc(b.use)}</p><h3>${esc(b.name)}</h3><p class="text-meta">📍 ${esc(b.home)}</p><p>${esc(b.note)}</p></article>`).join("");
  } else {
    const groups = ["all", ...Object.keys(HELPER_GROUPS)];
    sub.innerHTML = `<div class="chips" id="helperChips"></div><p class="note">Many of these animals are protected wildlife. Farmers can help them by keeping trees and hedges, avoiding poisons, and never killing or capturing them.</p>`;
    chips($("#helperChips"), groups, state.helperGroup, v => v === "all" ? t("ui.all") : HELPER_GROUPS[v], v => { state.helperGroup = v; renderAnimals(); });
    grid.innerHTML = HELPERS.filter(h => state.helperGroup === "all" || h.group === state.helperGroup).map(h => `<article class="kcard helper g-${h.group}"><p class="kc-type">${esc(HELPER_GROUPS[h.group])}</p><h3>${esc(h.name)} <span class="dev">${esc(h.dev)}</span></h3><p>${esc(h.role)}</p><p class="care"><strong>How farmers can help:</strong> ${esc(h.care)}</p></article>`).join("");
  }
}
function openBreed(id) {
  const b = livestockBreeds.find(x => x.id === id); if (!b) return;
  const photo = REMOTE_PHOTOS[b.key];
  const rows = [["Region", b.region], ["Purpose", b.purpose], ["Keepers", b.community], ["Characteristics", b.traits], ["Strains", b.strains], ["Key facts", b.facts]].filter(([, v]) => v && tr(v));
  openModal(`${photo ? `<figure class="mfig"><img src="${commonsURL(photo.file)}" alt="${esc(tr(b.name))}" loading="lazy" onerror="this.parentNode.remove()"><figcaption>Photo: ${esc(photo.author || "Wikimedia Commons")}, ${esc(photo.licence)}</figcaption></figure>` : ""}
    <p class="kc-type">${esc(b.type)} · ICAR-NBAGR</p><h2 id="modalTitle">${esc(tr(b.name))}</h2>
    <dl class="dl">${rows.map(([k, v]) => `<div><dt>${k}</dt><dd>${esc(tr(v))}</dd></div>`).join("")}</dl>
    <h3>Sources</h3><ul class="src">${(b.src || []).map(k => `<li>${srcLink(k)}</li>`).join("")}</ul>`);
}
function renderCommunities() {
  const cats = ["all", ...Object.keys(COMM_CATS)];
  chips($("#commChips"), cats, state.commCat, v => v === "all" ? `${t("ui.all")} (${COMMUNITIES.length})` : `${COMM_CATS[v]} (${count(COMMUNITIES, c => c.cat === v)})`, v => { state.commCat = v; renderCommunities(); });
  const q = state.commQ.trim().toLowerCase();
  const list = COMMUNITIES.filter(c => (state.commCat === "all" || c.cat === state.commCat) && (!q || lower(c).includes(q)));
  $("#commCount").textContent = `${list.length} ${t("ui.results")}`;
  $("#commGrid").innerHTML = list.length ? list.map(c => `<article class="comm click" tabindex="0" role="button" data-comm="${c.key}">
    <div class="comm-ico" aria-hidden="true">${c.icon}</div><div><p class="kc-type">${esc(COMM_CATS[c.cat])}${c.status ? ` · ${esc(c.status)}` : ""}</p>
    <h3>${esc(c.name)} <span class="dev">${esc(c.dev)}</span></h3><p class="text-meta">📍 ${esc(c.region)}</p><p class="clamp">${esc(c.overview)}</p>
    <span class="link">${esc(t("ui.details"))} →</span></div></article>`).join("") : empty();
}
const STATUS_TEXT = { ST: "Scheduled Tribe", PVTG: "Particularly Vulnerable Tribal Group", NT: "Nomadic Tribe (state list)", DNT: "Denotified Tribe", VJ: "Vimukta Jati (Denotified Tribe, state list)" };
function openCommunity(key) {
  const c = COMMUNITIES.find(x => x.key === key); if (!c) return;
  const list = arr => `<ul class="bul">${arr.filter(x => x && x !== "—").map(x => `<li>${esc(x)}</li>`).join("")}</ul>`;
  const row = (k, v) => v && v !== "—" ? `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>` : "";
  openModal(`<p class="kc-type">${esc(COMM_CATS[c.cat])}${c.status ? ` · ${esc(STATUS_TEXT[c.status])}` : ""}</p>
    <h2 id="modalTitle">${c.icon} ${esc(c.name)} <span class="dev">${esc(c.dev)}</span></h2><p class="text-meta">📍 ${esc(c.region)}</p>
    <p class="lead">${esc(c.overview)}</p>
    <div class="twocol"><section><h3>🌾 Agricultural practices</h3>${list(c.agri)}</section><section><h3>🐄 Animal husbandry</h3>${list(c.ah)}</section></div>
    <dl class="dl">${row("Crops", c.crops)}${row("Animals", c.animals)}${row("Tools & equipment", c.tools)}${row("Festivals & rituals", c.festivals)}${row("Food traditions", c.food)}${row("Knowledge & heritage", c.knowledge)}${row("Changes today", c.today)}</dl>
    <p class="note">🤝 This profile describes traditional livelihoods; every community today is diverse. It was compiled from published research and should be reviewed with community members before any wider use.</p>`);
}

/* ---- Maharashtra data ---- */
const DMF = { gddp: v => v == null ? "—" : "₹" + numFmt(v), pci: v => v == null ? "—" : "₹" + numFmt(v) };
const dmFmt = (k, v) => (DMF[k] || numFmt)(v);
function rankOf(key, m) { const s = DISTRICTS.filter(d => d[m] != null).sort((a, b) => b[m] - a[m]); const i = s.findIndex(d => d.key === key); return i < 0 ? null : `${i + 1} / ${s.length}`; }
function renderDistricts() {
  const f = state.dist;
  chips($("#divChips"), ["all", "konkan", "nashik", "pune", "marathwada", "amravati", "nagpur"], f.div, v => v === "all" ? `${t("ui.all")} (${DISTRICTS.length})` : t("div." + v), v => { f.div = v; renderDistricts(); });
  $("#distSort").innerHTML = DIST_METRICS.map(m => `<option value="${m}"${m === f.sort ? " selected" : ""}>${esc(t("dm." + m))}</option>`).join("");
  const list = DISTRICTS.filter(d => f.div === "all" || d.div === f.div).filter(d => d[f.sort] != null).sort((a, b) => b[f.sort] - a[f.sort]);
  const max = Math.max(...list.map(d => d[f.sort]), 1);
  $("#distRank").innerHTML = list.map((d, i) => `<button type="button" class="rrow" data-dist="${d.key}"><span class="rk">${i + 1}</span><span class="rn">${esc(tr(d.name).replace(/ \(.+\)/, ""))}</span><span class="rt"><i class="dv-${d.div}" style="width:${(d[f.sort] / max * 100).toFixed(1)}%"></i></span><strong>${esc(dmFmt(f.sort, d[f.sort]))}</strong></button>`).join("");
  const opts = DISTRICTS.slice().sort((a, b) => tr(a.name).localeCompare(tr(b.name))).map(d => `<option value="${d.key}">${esc(tr(d.name))}</option>`).join("");
  $("#cmpA").innerHTML = opts; $("#cmpB").innerHTML = opts; $("#cmpA").value = f.cmpA; $("#cmpB").value = f.cmpB;
  renderCompare();
}
function renderCompare() {
  const a = DISTRICTS.find(d => d.key === state.dist.cmpA), b = DISTRICTS.find(d => d.key === state.dist.cmpB);
  $("#cmpTable").innerHTML = `<thead><tr><th scope="col">Indicator</th><th scope="col">${esc(tr(a.name))}</th><th scope="col">${esc(tr(b.name))}</th></tr></thead><tbody>${DIST_METRICS.map(k => {
    const w = a[k] != null && b[k] != null && a[k] !== b[k] ? (a[k] > b[k] ? "a" : "b") : "";
    return `<tr><th scope="row">${esc(t("dm." + k))}</th><td class="${w === "a" ? "hi" : ""}">${esc(dmFmt(k, a[k]))}</td><td class="${w === "b" ? "hi" : ""}">${esc(dmFmt(k, b[k]))}</td></tr>`;
  }).join("")}</tbody>`;
}
function openDistrict(key) {
  const d = DISTRICTS.find(x => x.key === key); if (!d) return;
  const tot = k => DISTRICTS.reduce((s, x) => s + (x[k] || 0), 0);
  const share = ["livestock", "cattle", "buffalo", "goat", "sheep", "pig", "poultry"];
  openModal(`<p class="kc-type">${esc(t("div." + d.div))} division</p><h2 id="modalTitle">📍 ${esc(tr(d.name))}</h2><p class="lead">${esc(tr(d.note))}</p>
    <div class="tablewrap"><table class="table"><thead><tr><th scope="col">Indicator</th><th scope="col">Value</th><th scope="col">State rank</th></tr></thead><tbody>
    ${DIST_METRICS.map(k => `<tr><th scope="row">${esc(t("dm." + k))}</th><td><strong>${esc(dmFmt(k, d[k]))}</strong>${share.includes(k) ? ` <small>(${(d[k] / tot(k) * 100).toFixed(1)}% of state)</small>` : ""}</td><td>${rankOf(key, k) || "—"}</td></tr>`).join("")}
    <tr><th scope="row">Commercial poultry</th><td>${numFmt(d.commPoultry)}</td><td></td></tr><tr><th scope="row">Backyard poultry</th><td>${numFmt(d.backPoultry)}</td><td></td></tr></tbody></table></div>
    <h3>Sources</h3><ul class="src"><li>${srcLink("lc2019")}</li><li>${srcLink("esm2526")}</li></ul><p class="note">${esc(t("mh.note"))}</p>`);
}
function lineSVG(years, series) {
  const W = 640, H = 290, L = 44, R = 30, Tp = 12, B = 40;
  const max = Math.ceil(Math.max(...series.flatMap(s => s.values)) / 20) * 20;
  const x = i => L + i * (W - L - R) / (years.length - 1), y = v => Tp + (1 - v / max) * (H - Tp - B);
  const grid = [0, .25, .5, .75, 1].map(f => `<line class="gl" x1="${L}" x2="${W - R}" y1="${y(max * f)}" y2="${y(max * f)}"/><text class="ax" x="${L - 6}" y="${y(max * f) + 4}" text-anchor="end">${numFmt(max * f)}</text>`).join("");
  const xl = years.map((yr, i) => (years.length <= 8 || i % 2 === 0 || i === years.length - 1) ? `<text class="ax" x="${x(i)}" y="${H - B + 18}" text-anchor="${i === years.length - 1 ? "end" : "middle"}">${yr}</text>` : "").join("");
  const lines = series.map(s => `<polyline class="ln c-${s.cls}" points="${s.values.map((v, i) => `${x(i)},${y(v)}`).join(" ")}"/>${s.values.map((v, i) => `<circle class="pt c-${s.cls}" cx="${x(i)}" cy="${y(v)}" r="3.5"><title>${esc(t(s.key))} ${years[i]}: ${numFmt(v, 2)}</title></circle>`).join("")}`).join("");
  return `<svg viewBox="0 0 ${W} ${H}" class="lchart" role="img" aria-label="${esc(series.map(s => `${t(s.key)} ${numFmt(s.values[0], 1)} to ${numFmt(s.values.at(-1), 1)}`).join("; "))}">${grid}${xl}${lines}</svg>
    <ul class="legend">${series.map(s => `<li><i class="c-${s.cls}"></i>${esc(t(s.key))}: ${numFmt(s.values[0], 1)} → <strong>${numFmt(s.values.at(-1), 1)}</strong></li>`).join("")}</ul>`;
}
function barsHTML(pairs, suffix = "") {
  const max = Math.max(...pairs.map(p => p[1]));
  return `<div class="bars">${pairs.map(([k, v]) => `<div class="cbar"><span style="height:${(v / max * 100).toFixed(1)}%"><b>${numFmt(v, v < 10 ? 2 : 1)}${suffix}</b></span><small>${esc(k)}</small></div>`).join("")}</div>`;
}
function renderStats() {
  $("#chartLivestock").innerHTML = lineSVG(STATS.livestockYears, STATS.livestock) + `<p class="src-line">📚 ${srcLink("lc2019")}</p>`;
  $("#chartArea").innerHTML = lineSVG(STATS.areaYears, STATS.area) + `<p class="src-line">📚 ${srcLink("esm2526")}</p>`;
  $("#chartHolding").innerHTML = barsHTML(STATS.holding) + `<p class="src-line">📚 Agriculture Censuses, via ${srcLink("esm2526")}</p>`;
  $("#chartShare").innerHTML = barsHTML(STATS.share, "%") + `<p class="src-line">📚 ${srcLink("esm2526")}</p>`;
  $("#factTable").innerHTML = `<tbody>${FACTS.map(([k, v, s]) => `<tr><th scope="row">${esc(tr(k))}</th><td><strong>${esc(v)}</strong></td><td><small>${srcLink(s)}</small></td></tr>`).join("")}</tbody>`;
  $("#findings").innerHTML = FINDINGS.map(f => `<li>${esc(tr(f))}</li>`).join("");
  $("#riskGrid").innerHTML = heritageRecords.map(r => {
    if (r.from == null) return `<article class="kcard risk"><h3>${esc(tr(r.name))}</h3><p>${esc(tr(r.note))}</p><p class="text-meta">🔎 Not yet measured — documentation needed.</p></article>`;
    const ch = (r.to - r.from) / r.from * 100, d = r.from < 100 ? 2 : 0;
    return `<article class="kcard risk"><h3>${esc(tr(r.name))}</h3><p class="big">${numFmt(r.from, d)} → ${numFmt(r.to, d)} <small>${esc(tr(r.unit))}</small></p>
      <div class="meter"><i style="width:${Math.min(100, Math.abs(ch)).toFixed(1)}%"></i></div><p class="text-meta"><strong class="neg">${ch.toFixed(1)}%</strong> · ${esc(r.span)}</p><p>${esc(tr(r.note))}</p><p class="src-line">📚 ${srcLink(r.src)}</p></article>`;
  }).join("");
}
function renderSources() {
  $("#sourceList").innerHTML = Object.values(SOURCES).map(s => `<li><a href="${s.url}" target="_blank" rel="noopener noreferrer">${esc(s.label)}</a></li>`).join("") +
    TEXTS.filter(x => x.url).map(x => `<li><a href="${x.url}" target="_blank" rel="noopener noreferrer">${esc(x.name)} — English translation (sacred-texts.com)</a></li>`).join("");
  const seen = new Map(); Object.values(REMOTE_PHOTOS).forEach(p => seen.set(p.file, p));
  $("#creditList").innerHTML = [...seen.values()].map(p => `<li><a href="${commonsPage(p.file)}" target="_blank" rel="noopener noreferrer">${esc(p.file.replace(/_/g, " "))}</a> — ${esc(p.author ? p.author + ", " : "")}Wikimedia Commons, ${esc(p.licence)}</li>`).join("");
}
function downloadCSV() {
  const head = ["District", "Division", "Cattle", "Buffalo", "Sheep", "Goat", "Pig", "Poultry_commercial", "Poultry_backyard", "Poultry_total", "Livestock_per_sqkm", "Livestock_per_1000_people", "Milch_per_1000_people", "GDDP_2024_25_Rs_crore", "PerCapita_NDDP_2024_25_Rs"];
  const rows = DISTRICTS.map(d => [d.name.en, d.div, d.cattle, d.buffalo, d.sheep, d.goat, d.pig, d.commPoultry, d.backPoultry, d.poultry, d.dens, d.per1k, d.milk1k, d.gddp ?? "", d.pci ?? ""]);
  save("\uFEFF# Sources: 20th Livestock Census 2019 (Maharashtra); Economic Survey of Maharashtra 2025-26\n" + [head, ...rows].map(r => r.map(v => `"${String(v).replace(/"/g, '""')}"`).join(",")).join("\n"), "krishividya_maharashtra_districts.csv", "text/csv");
}
function save(text, name, type) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([text], { type: type + ";charset=utf-8" })); a.download = name;
  document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 1500);
}

/* ---------- 5. Global search ---------- */
function searchAll(q) {
  q = q.trim().toLowerCase(); if (q.length < 2) return [];
  const R = [], re = new RegExp("(^|[^a-z\u0900-\u097F])" + q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
  const add = (group, title, sub, go) => R.push({ group, title, sub, go, top: re.test(title) || String(title).toLowerCase().includes(q) });
  const vals = o => o == null ? "" : typeof o === "object" ? Object.values(o).map(vals).join(" ") : String(o);
  const hit = o => { const v = vals(o); return re.test(v) || (/[\u0900-\u097F]/.test(q) && v.toLowerCase().includes(q)); };
  TIMELINE.forEach(e => hit(e) && add("History", e.title, e.y, () => jump("#history")));
  TEXTS.forEach(x => hit(x) && add("Texts", x.name, x.date, () => jump("#texts")));
  [...WATER, ...RIVERS].forEach(w => hit(w) && add("Water", w.name, w.region || w.basin, () => jump("#water")));
  PRACTICES.forEach(p => hit(p) && add("Practices", p.name, t("st." + p.status), () => jump("#practices")));
  CROPS.forEach(c => hit(c) && add("Crops", c.name, c.dev, () => { state.cropQ = c.name; $("#cropSearch").value = c.name; state.cropCat = "all"; state.cropFlag = "all"; renderCrops(); jump("#crops"); }));
  livestockBreeds.forEach(b => hit(b) && add("Animals", tr(b.name), "Maharashtra breed", () => openBreed(b.id)));
  INDIA_BREEDS.forEach(b => hit(b) && add("Animals", b.name, b.home, () => { state.animalTab = "india"; state.species = b.species; renderAnimals(); jump("#animals"); }));
  HELPERS.forEach(h => hit(h) && add("Animals", h.name, HELPER_GROUPS[h.group], () => { state.animalTab = "helpers"; state.helperGroup = h.group; renderAnimals(); jump("#animals"); }));
  COMMUNITIES.forEach(c => hit(c) && add("Communities", c.name, c.region, () => openCommunity(c.key)));
  DISTRICTS.forEach(d => hit(d.name) || hit(d.note) ? add("Districts", tr(d.name), t("div." + d.div), () => openDistrict(d.key)) : 0);
  return R.sort((x, y) => y.top - x.top);
}
let searchHits = [];
function renderSearch() {
  const q = $("#searchInput").value; searchHits = searchAll(q);
  const box = $("#searchResults");
  if (q.trim().length < 2) { box.innerHTML = `<p class="note">Try “jowar”, “Warli”, “owl”, “Rigveda”, “phad” or “Gadchiroli”.</p>`; return; }
  if (!searchHits.length) { box.innerHTML = empty(); return; }
  const groups = [...new Set(searchHits.map(h => h.group))];
  box.innerHTML = `<p class="note">${searchHits.length} ${esc(t("ui.results"))}</p>` + groups.map(g => `<h3>${esc(g)}</h3><ul>${searchHits.map((h, i) => h.group === g ? `<li><button type="button" data-hit="${i}"><strong>${esc(h.title)}</strong><small>${esc(h.sub || "")}</small></button></li>` : "").join("")}</ul>`).join("");
}
function openSearch() { $("#search").hidden = false; document.body.classList.add("locked"); $("#searchInput").focus(); renderSearch(); }
function closeSearch() { $("#search").hidden = true; document.body.classList.remove("locked"); }
function jump(sel) { closeSearch(); closeModal(); const el = $(sel); el && el.scrollIntoView({ behavior: "smooth", block: "start" }); }

/* ---------- 6. Language, theme, events ---------- */
function applyLang() {
  document.documentElement.lang = state.lang === "en" ? "en" : state.lang;
  $$("[data-t]").forEach(el => el.textContent = t(el.dataset.t));
  $$("[data-tph]").forEach(el => el.placeholder = t(el.dataset.tph));
  $$(".lang button").forEach(b => b.setAttribute("aria-pressed", b.dataset.lang === state.lang));
  $("#langNote").hidden = state.lang === "en";
}
function setTheme(th) { state.theme = th; document.documentElement.dataset.theme = th; try { localStorage.setItem("kv-theme", th); } catch (e) {} }
function renderAll() { renderHero(); renderTimeline(); renderTexts(); renderWater(); renderPractices(); renderCrops(); renderAnimals(); renderCommunities(); renderDistricts(); renderStats(); renderSources(); }
function bind() {
  $$(".lang button").forEach(b => b.addEventListener("click", () => { state.lang = b.dataset.lang; try { localStorage.setItem("kv-lang", state.lang); } catch (e) {} applyLang(); renderAll(); }));
  $$("#themeBtn, [data-theme-toggle]").forEach(el => el.addEventListener("click", () => setTheme(state.theme === "dark" ? "light" : "dark")));
  $("#menuBtn").addEventListener("click", () => { const open = $("#nav").classList.toggle("open"); $("#menuBtn").setAttribute("aria-expanded", open); });
  $$("#nav a").forEach(a => a.addEventListener("click", () => { $("#nav").classList.remove("open"); $("#menuBtn").setAttribute("aria-expanded", false); }));
  $$("[data-open-search]").forEach(b => b.addEventListener("click", openSearch));
  $("#searchClose").addEventListener("click", closeSearch);
  $("#searchInput").addEventListener("input", renderSearch);
  $("#searchResults").addEventListener("click", e => { const b = e.target.closest("[data-hit]"); if (b) { const h = searchHits[+b.dataset.hit]; closeSearch(); h.go(); } });
  $("#modalClose").addEventListener("click", closeModal);
  $("#modal").addEventListener("click", e => { if (e.target.id === "modal") closeModal(); });
  $("#search").addEventListener("click", e => { if (e.target.id === "search") closeSearch(); });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") { closeModal(); closeSearch(); }
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); openSearch(); }
    if ((e.key === "Enter" || e.key === " ") && e.target.matches && e.target.matches(".click")) { e.preventDefault(); e.target.click(); }
  });
  $("#mhOnly").addEventListener("change", e => { state.mhOnly = e.target.checked; renderTimeline(); });
  $("#cropSearch").addEventListener("input", e => { state.cropQ = e.target.value; renderCrops(); });
  $("#commSearch").addEventListener("input", e => { state.commQ = e.target.value; renderCommunities(); });
  document.addEventListener("click", e => {
    const b = e.target.closest("[data-breed]"); if (b) openBreed(b.dataset.breed);
    const c = e.target.closest("[data-comm]"); if (c) openCommunity(c.dataset.comm);
    const d = e.target.closest("[data-dist]"); if (d) openDistrict(d.dataset.dist);
  });
  $("#distSort").addEventListener("change", e => { state.dist.sort = e.target.value; renderDistricts(); });
  $("#cmpA").addEventListener("change", e => { state.dist.cmpA = e.target.value; renderCompare(); });
  $("#cmpB").addEventListener("change", e => { state.dist.cmpB = e.target.value; renderCompare(); });
  $("#csvBtn").addEventListener("click", downloadCSV);
  $("#toTop").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  window.addEventListener("scroll", () => { $("#toTop").classList.toggle("show", window.scrollY > 800); $(".topbar").classList.toggle("scrolled", window.scrollY > 10); }, { passive: true });
  $("#contribForm").addEventListener("submit", e => {
    e.preventDefault();
    const f = e.target, data = Object.fromEntries(new FormData(f));
    const ok = ["name", "place", "topic", "story"].every(k => (data[k] || "").trim().length > 1) && f.consent.checked;
    const msg = $("#formMsg");
    if (!ok) { msg.textContent = t("f.err"); msg.className = "form-msg bad"; return; }
    data.date = new Date().toISOString();
    try { const all = JSON.parse(localStorage.getItem("kv-contrib") || "[]"); all.push(data); localStorage.setItem("kv-contrib", JSON.stringify(all)); } catch (err) {}
    save(JSON.stringify(data, null, 2), `krishividya_contribution_${Date.now()}.json`, "application/json");
    msg.textContent = t("f.ok"); msg.className = "form-msg good"; f.reset();
  });
  /* highlight current section in navigation */
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) $$("#nav a").forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id)); }), { rootMargin: "-45% 0px -50% 0px" });
    $$("main > section[id]").forEach(s => io.observe(s));
    const rv = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); rv.unobserve(en.target); } }), { threshold: .08 });
    $$(".reveal").forEach(el => rv.observe(el));
  } else $$(".reveal").forEach(el => el.classList.add("in"));
}
document.addEventListener("DOMContentLoaded", () => {
  try { state.lang = localStorage.getItem("kv-lang") || "en"; setTheme(localStorage.getItem("kv-theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")); } catch (e) { setTheme("light"); }
  bind(); applyLang(); renderAll();
});