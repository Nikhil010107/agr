/* =====================================================================
   KRISHIVIDYA — water & rivers, indigenous practices, calendar, sayings
   Evidence status for practices:
     validated — supported by published agricultural research
     studied   — under scientific study; results promising or mixed
     heritage  — recorded as traditional knowledge; not yet tested
   ===================================================================== */

/* ---- Traditional water systems of India ---- */
const WATER = [
  { name: "Phad system", dev: "फड पद्धत", region: "Tapi basin — Dhule and Nashik, Maharashtra", mh: true, type: "Diversion weirs",
    text: "Stone weirs (bandharas) divert river water into canals that serve blocks of fields called phads. The community decides each season which phad grows which crop, so that water is shared fairly. Water users' committees still run many phads on the Panjhara river." },
  { name: "Malgujari tanks", dev: "माजी मालगुजारी तलाव", region: "Bhandara, Gondia, Chandrapur, Gadchiroli, Nagpur", mh: true, type: "Tanks",
    text: "Hundreds of earthen tanks were built by local landholders (malgujars) and farming communities, many of them centuries ago, to store monsoon runoff for paddy. Today they also support fishing, water chestnut (singhada) and groundwater recharge, and several have been restored." },
  { name: "Khar lands and bunds", dev: "खार जमीन", region: "Konkan creeks — Raigad, Ratnagiri, Thane", mh: true, type: "Coastal reclamation",
    text: "Coastal farmers reclaimed tidal land by building earthen bunds with sluice gates that keep out seawater while letting rainwater drain. Salt-tolerant rice varieties are grown on these lands in the monsoon. Maharashtra has a Khar Land Development Board to maintain the bunds." },
  { name: "Bandhara", dev: "बंधारा", region: "Across Maharashtra", mh: true, type: "Check dams",
    text: "A bandhara is a low weir of stone or earth across a stream. It slows the flow, raises nearby well levels and diverts water to fields. Villages have built and rebuilt bandharas for centuries, and they remain central to watershed work today." },
  { name: "Barav (stepwells)", dev: "बारव", region: "Marathwada, western Maharashtra", mh: true, type: "Stepwells",
    text: "Stone stepwells, often built beside temples from the Yadava period onward, gave year-round access to groundwater. Many survive in Marathwada, and restoration campaigns have begun to clean and document them." },
  { name: "Gaal (tank silt) on fields", dev: "गाळ", region: "Across Maharashtra", mh: true, type: "Soil renewal",
    text: "Farmers have long carried the fertile silt from dried tank beds to their fields. The practice both restores tank capacity and improves soil. Maharashtra revived it on a large scale in 2017 through the 'Gaalmukt Dharan, Gaalyukt Shivar' programme." },
  { name: "Mot (leather-bucket lift)", dev: "मोट", region: "Deccan", mh: true, type: "Water lifting",
    text: "A pair of bullocks walking down a ramp pulled a large leather bucket up from the well. It emptied itself into a channel through a flexible spout. The mot was the main source of well irrigation before diesel and electric pumps, and it is now almost extinct." },
  { name: "Araghatta and Persian wheel", dev: "रहाट", region: "North and western India", type: "Water lifting",
    text: "A chain of pots on a wheel, turned by bullocks through wooden gears, lifted water continuously from shallow wells. In Marathi the device is called a rahat." },
  { name: "Kallanai (Grand Anicut)", dev: "कल्लणै", region: "Kaveri river, Tamil Nadu", type: "Diversion weir",
    text: "A stone weir attributed to the Chola king Karikala (2nd century CE). It is among the oldest water-diversion structures still in use anywhere in the world." },
  { name: "Eri tanks", dev: "एरी", region: "Tamil Nadu", type: "Tank cascades",
    text: "Chains of connected tanks pass surplus water from one to the next. Village institutions managed the sluices and appointed water guards, called neerkatti." },
  { name: "Kere tanks", dev: "केरे", region: "Karnataka", type: "Tank cascades",
    text: "Tank systems built by rulers and communities across the Deccan plateau, maintained by village groups and supported by temple grants." },
  { name: "Kakatiya tanks (cheruvu)", dev: "चेरुवु", region: "Telangana", type: "Tank cascades",
    text: "The Kakatiya dynasty (12th–14th century) built thousands of connected tanks. Telangana's Mission Kakatiya, launched in 2015, has desilted and restored many of them." },
  { name: "Ahar-pyne", dev: "आहर-पईन", region: "South Bihar", type: "Floodwater harvesting",
    text: "Channels (pynes) carry floodwater from rivers to embanked catchment basins (ahars), where it is held for paddy. The system suits a gently sloping land with poor groundwater." },
  { name: "Johad", dev: "जोहड़", region: "Rajasthan, Haryana", type: "Earthen check dams",
    text: "Crescent-shaped earthen dams capture runoff and recharge groundwater. Their revival in Alwar district from the 1980s brought several small rivers back to life." },
  { name: "Khadin", dev: "खड़ीन", region: "Jaisalmer, Rajasthan", type: "Runoff farming",
    text: "An earthen embankment across a slope holds runoff so that crops can be sown on the moist bed after the water soaks in. The system is associated with the Paliwal community." },
  { name: "Kund, tanka and beri", dev: "कुंड, टांका", region: "Thar desert", type: "Rainwater harvesting",
    text: "Underground cisterns with a sloping catchment around them collect rainwater for drinking. Beris are shallow wells that tap moisture held in the soil." },
  { name: "Stepwells (vav and baoli)", dev: "बावड़ी", region: "Gujarat, Rajasthan, Delhi", type: "Stepwells",
    text: "Monumental stepwells reached down to groundwater. Rani ki Vav at Patan (11th century) is a UNESCO World Heritage Site." },
  { name: "Kuhl", dev: "कूहल", region: "Himachal Pradesh", type: "Gravity channels",
    text: "Channels diverting glacier and stream water along hillsides to terraced fields, managed by a water master called the kohli." },
  { name: "Zabo", dev: "ज़ाबो", region: "Nagaland", type: "Integrated system",
    text: "Forest, ponds, cattle yards and paddy are arranged down a slope so that rainwater collects nutrients as it flows to the fields. Fish are also raised in the ponds." },
  { name: "Apatani rice–fish farming", dev: "आपतानी", region: "Ziro valley, Arunachal Pradesh", type: "Integrated system",
    text: "Irrigated terraced paddy is combined with fish farming, with water channelled carefully from forest streams and no draught animals or machines used." },
  { name: "Bamboo drip irrigation", dev: "बांस ठिबक", region: "Meghalaya", type: "Drip irrigation",
    text: "Bamboo pipes carry spring water across long distances and deliver it drop by drop to betel and black-pepper plants." },
  { name: "Dongs", dev: "डोंग", region: "Assam (Bodo community)", type: "Community canals",
    text: "Channels dug and maintained by the community divert river water to fields under a shared set of rules." },
  { name: "Surangam", dev: "सुरंगम", region: "Kasaragod, Kerala and Dakshina Kannada", type: "Horizontal wells",
    text: "Tunnels are dug horizontally into laterite hillsides until they reach water, which then flows out steadily by gravity." },
  { name: "Virda", dev: "विरडा", region: "Banni grasslands, Kutch", type: "Shallow wells",
    text: "Maldhari pastoralists dig shallow wells in depressions, where fresh rainwater floats above the saline groundwater." }
];

/* ---- Rivers of Maharashtra and their farming knowledge ---- */
const RIVERS = [
  { name: "Godavari", dev: "गोदावरी", basin: "Rises at Trimbakeshwar (Nashik); flows east through Marathwada and Telangana",
    text: "Called the Dakshina Ganga, the Godavari gave the Deccan its ancient capital at Paithan. Its fertile plains carry sugarcane, jowar, cotton and grapes. The Jayakwadi dam (1976) created one of the state's largest reservoirs." },
  { name: "Krishna", dev: "कृष्णा", basin: "Rises at Mahabaleshwar; flows through Satara, Sangli and into Karnataka",
    text: "The Krishna and its tributaries — the Koyna, Warna and Panchganga — water the sugar belt of western Maharashtra. The Krishna Valley cattle breed takes its name from the region." },
  { name: "Bhima", dev: "भीमा", basin: "Rises at Bhimashankar; flows through Pune and Solapur to the Krishna",
    text: "The Bhima valley gave its name to the Bhimthadi horse and to Bhimthadi jatra traditions. The Varkari pilgrimage ends at Pandharpur on its banks, which the Varkaris call the Chandrabhaga." },
  { name: "Tapi", dev: "तापी", basin: "Flows west through Jalgaon, Dhule and Nandurbar to the Arabian Sea",
    text: "Its deep black soils support banana and cotton, and its tributaries gave rise to the phad irrigation system." },
  { name: "Wainganga and Wardha", dev: "वैनगंगा व वर्धा", basin: "Vidarbha; join to form the Pranhita",
    text: "They water the rice bowl of eastern Vidarbha, where malgujari tanks, paddy, tasar silk and forest produce sustain Gond and other communities." },
  { name: "Konkan rivers", dev: "कोकणातील नद्या", basin: "Short westward rivers such as the Vashishti, Savitri and Ulhas",
    text: "Fast monsoon rivers that end in creeks and mangroves. Their tidal lands were reclaimed as khar lands, and their banks support coconut, areca, mango and paddy." },
  { name: "Riverbed farming", dev: "नदीपात्रातील शेती", basin: "Many rivers after the monsoon",
    text: "As water levels fall after the rains, farmers across India plant melons, cucumbers and vegetables in the moist sand of the riverbed. The practice uses residual moisture and needs little irrigation." }
];

/* ---- Indigenous practices ---- */
const PRACTICES = [
  /* soil */
  { cat: "soil", name: "Shenkhat (farmyard manure)", dev: "शेणखत", status: "validated",
    text: "Cattle dung, urine-soaked bedding and crop waste are rotted in a pit for several months before being spread on fields. Research confirms that well-rotted manure improves soil organic carbon, structure and water-holding capacity." },
  { cat: "soil", name: "Sheep and goat penning", dev: "मेंढ्या बसवणे", status: "validated", mh: true,
    text: "Dhangar herders pen their flocks overnight on harvested fields, and the farmer pays in grain or cash for the manure and urine left behind. Studies of this exchange show that it adds significant nutrients to the soil." },
  { cat: "soil", name: "Green manuring", dev: "हिरवळीचे खत", status: "validated",
    text: "Fast-growing legumes such as sunn hemp (tag) and dhaincha are grown and ploughed back into the soil before they flower. They add nitrogen and organic matter." },
  { cat: "soil", name: "Tank silt application", dev: "गाळ पसरवणे", status: "validated", mh: true,
    text: "Silt from dried tank beds, rich in clay and nutrients, is spread on fields. It improves yields on light soils, particularly in dry regions." },
  { cat: "soil", name: "Rab (burning on nursery beds)", dev: "राब", status: "studied", mh: true,
    text: "Konkan and Sahyadri farmers burn layers of leaves, twigs and dung on rice nursery beds before sowing. Studies show that it controls weeds and releases nutrients, but it also depends on lopping forest trees, so researchers suggest alternatives." },
  { cat: "soil", name: "Kunapajala", dev: "कुणपजल", status: "studied",
    text: "Described in Surapala's Vrikshayurveda, this is a liquid manure made by fermenting animal remains with other materials. Modern trials report that diluted kunapajala can promote plant growth." },
  /* seeds */
  { cat: "seed", name: "Seed selection from the best plants", dev: "बीज निवड", status: "validated",
    text: "Farmers mark the healthiest plants or the fullest earheads in the field and keep their seed separately. This simple selection, repeated for generations, created India's landraces." },
  { cat: "seed", name: "Storage with ash, neem and dung-plastered bins", dev: "कणगी", status: "validated", mh: true,
    text: "Grain and seed are stored in bamboo bins (kanagi) or clay pots plastered with cow dung, often mixed with ash or dry neem leaves. Research confirms that neem leaves and ash reduce damage by storage insects." },
  { cat: "seed", name: "Community seed banks", dev: "बीज बँक", status: "validated", mh: true,
    text: "Villages keep and exchange seed of local varieties. In Akole, Rahibai Popere and the Kalsubai Parisar Biyanee Samvardhan Samiti have revived dozens of landraces of rice, pulses and vegetables." },
  { cat: "seed", name: "Beejamrut (seed treatment)", dev: "बीजामृत", status: "studied",
    text: "A modern natural-farming preparation of cow dung, urine, lime and soil used to coat seed. It is promoted under the National Mission on Natural Farming; research on its effects is ongoing." },
  /* cropping */
  { cat: "cropping", name: "Mixed cropping", dev: "मिश्रपीक", status: "validated", mh: true,
    text: "Two or more crops are sown together, such as jowar with tur or bajra with matki. If one crop fails in a poor monsoon, the other usually survives, and legumes add nitrogen for the cereal." },
  { cat: "cropping", name: "Intercropping in rows", dev: "आंतरपीक", status: "validated",
    text: "Crops are sown in alternating rows, often with the pabhar seed drill. Cotton with tur and soybean with tur are common patterns in Vidarbha and Marathwada." },
  { cat: "cropping", name: "Crop rotation", dev: "फेरपालट", status: "validated",
    text: "A cereal is followed by a legume, or a kharif crop by a rabi one, to maintain soil fertility and break pest cycles." },
  { cat: "cropping", name: "Rabi on residual moisture", dev: "ओलितावरील रब्बी", status: "validated", mh: true,
    text: "On deep black soils, rabi jowar, gram and safflower are sown after the monsoon and grow entirely on moisture stored in the soil. Maldandi jowar of Solapur is the classic example." },
  { cat: "cropping", name: "Relay (utera) cropping", dev: "उतेरा", status: "validated",
    text: "Lathyrus, linseed or gram is broadcast into the standing rice crop before harvest, so that the second crop can use the remaining moisture. The practice is common in eastern Vidarbha and Chhattisgarh." },
  { cat: "cropping", name: "Border and trap crops", dev: "सापळा पीक", status: "validated",
    text: "Rows of marigold, castor, maize or sorghum around the main crop attract pests away from it or act as a barrier." },
  { cat: "cropping", name: "Agroforestry on bunds", dev: "बांधावरील झाडे", status: "validated",
    text: "Trees such as neem, babhul, mango and tamarind are grown along field bunds. They provide fodder, fuel, fruit and shade, and they check erosion." },
  /* pests */
  { cat: "pest", name: "Bird perches", dev: "पक्षी थांबे", status: "validated",
    text: "T-shaped sticks placed in fields let insect-eating birds such as drongos and mynas rest and hunt caterpillars." },
  { cat: "pest", name: "Neem-based sprays", dev: "निंबोळी अर्क", status: "validated",
    text: "Extract of crushed neem seed kernels (nimboli) deters feeding and disrupts the growth of many insects. Neem is now used in approved commercial biopesticides." },
  { cat: "pest", name: "Ash dusting", dev: "राख", status: "studied",
    text: "Wood ash is dusted on vegetables and stored grain to deter aphids and storage insects." },
  { cat: "pest", name: "Dashaparni and agniastra", dev: "दशपर्णी", status: "studied",
    text: "Natural-farming sprays made by fermenting the leaves of several bitter plants. Farmers widely report benefits, but controlled research results are still limited." },
  /* water & land */
  { cat: "water", name: "Field bunding", dev: "बांधबंदिस्ती", status: "validated", mh: true,
    text: "Earthen or stone bunds along field boundaries stop soil from washing away and hold rainwater so that it soaks in." },
  { cat: "water", name: "Mulching", dev: "आच्छादन", status: "validated",
    text: "Crop residue or leaves spread on the soil reduce evaporation, keep the soil cool and suppress weeds." },
  /* weather */
  { cat: "weather", name: "Nakshatra rain calendar", dev: "पावसाची नक्षत्रे", status: "heritage", mh: true,
    text: "Maharashtra's farmers divide the monsoon into rain stars (nakshatras), each lasting about two weeks, and plan sowing and other work around them. The calendar follows the sun's position, so its dates are fixed; it is a planning tool, not a forecast." },
  { cat: "weather", name: "Signs from nature", dev: "निसर्ग संकेत", status: "heritage",
    text: "Farmers read coming rain from the nesting of birds, the flowering of trees such as bahava (Indian laburnum), ant movements and cloud shapes. The Brihat Samhita recorded similar signs fifteen centuries ago. Scientists have begun to study how reliable such indicators are." },
  /* animals */
  { cat: "animal", name: "Stall and shed hygiene", dev: "गोठा", status: "validated",
    text: "Krishi-Parashara advises that cattle sheds be kept clean, dry and smoke-fumigated. Modern veterinary science agrees that clean, dry housing reduces hoof and udder disease." },
  { cat: "animal", name: "Common grazing lands (gairan)", dev: "गायरान", status: "validated", mh: true,
    text: "Each village kept land for its cattle to graze. Where gairans have been protected and managed, fodder supply and groundwater both improve." },
  { cat: "animal", name: "Ethno-veterinary care", dev: "पारंपरिक पशुउपचार", status: "heritage",
    text: "Herders use many plant-based remedies for wounds, bloat and parasites. Some have been validated and many have not. KRISHIVIDYA records them as heritage only: a sick animal should always be seen by a veterinarian." },
  { cat: "animal", name: "Integrated crop–livestock farming", dev: "एकात्मिक शेती", status: "validated",
    text: "Crops feed animals with fodder and residue, and animals return dung, urine and draught power to the farm. This closed cycle is the core of both traditional farming and today's natural farming." }
];

/* ---- Rain stars (approximate dates of the sun's entry; vary by a day) ---- */
const NAKSHATRAS = [
  ["Rohini", "रोहिणी", "c. 25 May", "Pre-monsoon showers; fields are prepared and manure spread."],
  ["Mrig", "मृग", "c. 8 June", "The monsoon traditionally arrives; the main kharif sowing begins."],
  ["Ardra", "आर्द्रा", "c. 22 June", "Steady rain; sowing continues and rice nurseries are raised."],
  ["Punarvasu", "पुनर्वसू", "c. 6 July", "Transplanting of rice in Konkan and the hills."],
  ["Pushya", "पुष्य", "c. 20 July", "Heavy rain; weeding and inter-cultivation."],
  ["Ashlesha", "आश्लेषा", "c. 3 August", "Crops grow fast; the season of Nag Panchami."],
  ["Magha", "मघा", "c. 17 August", "Rain is vital for flowering crops."],
  ["Purva", "पूर्वा", "c. 30 August", "Late rain fills tanks and wells."],
  ["Uttara", "उत्तरा", "c. 13 September", "Early kharif harvests begin."],
  ["Hasta", "हस्त", "c. 27 September", "Rain in Hasta stores moisture in black soils for the rabi crop."],
  ["Chitra", "चित्रा", "c. 10 October", "Rabi sowing of jowar and gram begins."],
  ["Swati", "स्वाती", "c. 24 October", "Rain now is prized: 'If the Swati rains fall, pearls will ripen.'"]
];

const SEASONS = [
  ["Vasanta", "वसंत", "Spring", "Chaitra–Vaishakh (Mar–May)", "Harvest of rabi crops, threshing and the new year of Gudi Padwa."],
  ["Grishma", "ग्रीष्म", "Summer", "Jyeshtha–Ashadh (May–Jul)", "Tilling, bund repair, manuring and seed preparation."],
  ["Varsha", "वर्षा", "Monsoon", "Shravan–Bhadrapad (Jul–Sep)", "Kharif sowing, transplanting, weeding and Bail Pola."],
  ["Sharad", "शरद", "Autumn", "Ashvin–Kartik (Sep–Nov)", "Kharif harvest, Dasara and Diwali, and rabi sowing."],
  ["Hemanta", "हेमंत", "Pre-winter", "Margashirsh–Paush (Nov–Jan)", "Rabi crops grow; hurda (roasted green jowar) season."],
  ["Shishira", "शिशिर", "Winter", "Magh–Phalgun (Jan–Mar)", "Rabi crops ripen; Makar Sankranti and Holi."]
];

const SAYINGS = [
  { text: "अक्षैर्मा दीव्यः कृषिमित्कृषस्व", tr: "“Play not with dice; cultivate your field.”", src: "Rigveda 10.34.13" },
  { text: "वृक्षवल्ली आम्हां सोयरी वनचरें", tr: "“Trees and creepers are our kin, and so are the creatures of the forest.”", src: "Sant Tukaram, abhang" },
  { text: "पडतील स्वाती तर पिकतील मोती", tr: "“If the Swati rains fall, pearls will ripen.”", src: "Marathi farming proverb" },
  { text: "पिकतं तिथं विकत नाही", tr: "“What grows in a place does not sell there” — local produce is seldom valued at home.", src: "Marathi proverb" },
  { text: "जसे पेरावे तसे उगवते", tr: "“As you sow, so it grows.”", src: "Marathi proverb" },
  { text: "उत्तम खेती मध्यम बान, निषिद्ध चाकरी भीख निदान", tr: "“Farming is the best calling, trade the middling one, service is lowly and begging the last resort.”", src: "Attributed to Ghagh, North Indian folk poet" },
  { text: "सावन मास बहे पुरवाई, बैल बेच खरीदो गाई", tr: "“If the east wind blows in Shravan, sell the bullock and buy a cow” — a warning of drought.", src: "Attributed to Ghagh" }
];