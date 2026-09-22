/* =====================================================================
   KRISHIVIDYA — animals of Indian farming
   INDIA_BREEDS: a selection of notable indigenous breeds from across India
   (Maharashtra's 17 registered breeds are in data-maharashtra.js).
   ICAR-NBAGR recognised 219 indigenous breeds of 16 species when the
   21st Livestock Census began in 2024.
   HELPERS: animals that help farmers — guarding, pest control,
   pollination, soil building, transport and livelihoods.
   Wild species are protected by law; never capture or harm them.
   ===================================================================== */
const Br = (name, species, home, use, note) => ({ name, species, home, use, note });
const INDIA_BREEDS = [
  Br("Gir", "cattle", "Gujarat (Saurashtra)", "Milk", "Recognised by its domed forehead and long, pendulous ears. Gir cattle have been exported to Brazil, where they formed the basis of large dairy herds."),
  Br("Sahiwal", "cattle", "Punjab", "Milk", "One of India's best indigenous dairy breeds, heat-tolerant and tick-resistant."),
  Br("Red Sindhi", "cattle", "Sindh (now Pakistan); herds in India", "Milk", "A compact, deep-red dairy breed well suited to hot climates."),
  Br("Tharparkar", "cattle", "Rajasthan (Thar desert)", "Milk and draught", "A white-grey breed that thrives on sparse desert grazing."),
  Br("Kankrej", "cattle", "Gujarat and Rajasthan", "Draught and milk", "Powerful and fast, with lyre-shaped horns; known for its swinging gait."),
  Br("Hariana", "cattle", "Haryana", "Draught and milk", "The classic dual-purpose breed of the northern plains."),
  Br("Ongole", "cattle", "Andhra Pradesh", "Draught", "A large white breed that became the foundation of the Nelore breed of Brazil."),
  Br("Hallikar", "cattle", "Karnataka", "Draught", "A fast, hardy draught breed, and an ancestor of the Amrit Mahal."),
  Br("Amrit Mahal", "cattle", "Karnataka", "Draught", "Bred by the rulers of Mysore to haul army transport."),
  Br("Kangayam", "cattle", "Tamil Nadu", "Draught", "A strong breed of the Kongu region, used in the Jallikattu tradition."),
  Br("Krishna Valley", "cattle", "Krishna basin, Karnataka–Maharashtra border", "Draught", "Heavy bullocks for deep black soils, bred along the Krishna and its tributaries."),
  Br("Malnad Gidda", "cattle", "Karnataka (Western Ghats)", "Milk and manure", "A small hill breed that forages in forest and needs very little feed."),
  Br("Vechur", "cattle", "Kerala", "Milk", "Among the smallest cattle in the world. A farmers' and scientists' campaign saved it from extinction in the 1990s."),
  Br("Punganur", "cattle", "Andhra Pradesh", "Milk", "A very small breed with high-fat milk, now the focus of conservation."),
  Br("Badri", "cattle", "Uttarakhand hills", "Milk", "A small, sure-footed breed of the Himalayan slopes."),
  Br("Murrah", "buffalo", "Haryana", "Milk", "The world's best-known dairy buffalo, with tightly curled horns."),
  Br("Jaffarabadi", "buffalo", "Gujarat (Saurashtra)", "Milk", "A very heavy buffalo with drooping horns."),
  Br("Bhadawari", "buffalo", "Uttar Pradesh and Madhya Pradesh", "High-fat milk", "Famous for milk fat that can exceed 10 per cent."),
  Br("Banni", "buffalo", "Kutch, Gujarat", "Milk", "Raised by Maldhari herders on the Banni grasslands; it grazes mainly at night."),
  Br("Toda", "buffalo", "Nilgiris, Tamil Nadu", "Milk", "Central to the life and rituals of the Toda people."),
  Br("Chilika", "buffalo", "Odisha", "Milk", "Grazes in the brackish waters of Chilika lake."),
  Br("Jamunapari", "goat", "Uttar Pradesh", "Milk and meat", "A tall goat with long pendulous ears and a Roman nose."),
  Br("Beetal", "goat", "Punjab", "Milk and meat", "A large dairy goat of the Punjab plains."),
  Br("Black Bengal", "goat", "West Bengal and eastern India", "Meat and skin", "A small, very prolific goat valued for meat and fine skins."),
  Br("Sirohi", "goat", "Rajasthan", "Meat and milk", "A hardy desert goat that does well under stall feeding."),
  Br("Changthangi", "goat", "Ladakh", "Pashmina fibre", "Produces the fine undercoat spun into pashmina."),
  Br("Nellore", "sheep", "Andhra Pradesh", "Meat", "A tall, hair-coated sheep with no wool."),
  Br("Marwari", "sheep", "Rajasthan", "Carpet wool", "Thrives in the desert on long migrations."),
  Br("Chokla", "sheep", "Rajasthan", "Fine carpet wool", "Yields some of the finest carpet wool in India."),
  Br("Garole", "sheep", "Sundarbans, West Bengal", "Meat", "A small sheep that often bears twins; its prolificacy gene is studied worldwide."),
  Br("Marwari horse", "horse", "Rajasthan", "Riding", "Known for ears that curve inward until their tips touch."),
  Br("Kathiawari", "horse", "Gujarat", "Riding", "A hardy desert horse with inward-curving ears."),
  Br("Manipuri pony", "horse", "Manipur", "Riding and polo", "The pony on which modern polo was played in Manipur."),
  Br("Spiti and Zanskari", "horse", "Himachal Pradesh and Ladakh", "Pack and riding", "Sure-footed mountain ponies that carry loads at high altitude."),
  Br("Kharai camel", "camel", "Kutch, Gujarat", "Milk", "A camel that swims to feed on mangroves in the Gulf of Kutch."),
  Br("Bikaneri", "camel", "Rajasthan", "Draught and riding", "The heaviest Indian camel breed."),
  Br("Halari donkey", "donkey", "Gujarat", "Pack", "A white donkey of the Jamnagar region, now rare."),
  Br("Spiti donkey", "donkey", "Himachal Pradesh", "Pack", "A small, strong donkey of the cold desert."),
  Br("Arunachali yak", "yak", "Arunachal Pradesh", "Milk, fibre and pack", "Kept by Monpa and Sherdukpen herders at high altitude."),
  Br("Mithun", "mithun", "Arunachal Pradesh, Nagaland, Manipur, Mizoram", "Meat and ritual", "A semi-wild forest bovine, the state animal of Arunachal Pradesh and Nagaland."),
  Br("Ghungroo", "pig", "West Bengal", "Meat", "A black pig with a bulldog-like face, reared by small farmers."),
  Br("Niang Megha", "pig", "Meghalaya", "Meat", "A hardy hill pig of the north-east."),
  Br("Kadaknath", "poultry", "Jhabua, Madhya Pradesh", "Meat", "A chicken with black feathers, skin and meat, traditionally raised by Bhil and Bhilala families. It is GI-registered to Madhya Pradesh and is also reared in Maharashtra."),
  Br("Aseel", "poultry", "Andhra Pradesh, Odisha, Chhattisgarh", "Meat and game", "A tall, muscular fowl with great stamina."),
  Br("Pati duck", "duck", "Assam", "Eggs and meat", "Foraged in paddy fields and wetlands.")
];

const HELPER_GROUPS = {
  guard: "Guarding & herding", pest: "Natural pest control", pollinator: "Pollinators", soil: "Soil builders",
  livelihood: "Products & livelihoods", transport: "Draught & transport", cleaner: "Nature's cleaners"
};
const Hp = (name, dev, group, role, care) => ({ name, dev, group, role, care });
const HELPERS = [
  /* guarding & herding */
  Hp("Indian pariah dog (INDog)", "देशी कुत्रा", "guard", "India's native free-ranging dog, one of the oldest dog populations in the world. On farms it guards houses, cattle sheds and stored grain, raises the alarm against intruders and wild animals, and needs very little care.", "Vaccinate against rabies, deworm regularly and provide shade and water. Local dogs are hardier in Indian conditions than most imported breeds."),
  Hp("Mudhol hound (Caravan hound)", "मुधोळ / कारवान", "guard", "A slender sighthound of the Deccan, bred around Mudhol on the Karnataka–Maharashtra border and long kept by rural families of both states. It is fast, alert and loyal, and has been trained by the Indian Army.", "It needs space to run and a protein-rich diet; it tolerates heat but not cold."),
  Hp("Pashmi hound", "पश्मी", "guard", "A Deccan sighthound close to the Caravan hound, with a silky coat, kept in villages of Maharashtra and north Karnataka for hunting and guarding.", "The same care as the Mudhol hound; the population is small and deserves conservation."),
  Hp("Shepherd dogs of the Dhangars", "धनगरी कुत्री", "guard", "Dhangar and other herders travel with sturdy local dogs that guard their flocks at night against wolves, jackals and thieves.", "Herders value the dogs' loyalty; rabies vaccination protects both dogs and flocks."),
  Hp("Rajapalayam, Chippiparai and Kombai", "राजपाळयम, चिप्पिपारै, कोंबई", "guard", "Native breeds of Tamil Nadu used for hunting and guarding farms and homes.", "They are strong, heat-adapted and loyal to their families."),
  Hp("Gaddi and Bakharwal dogs", "गद्दी व बकरवाल कुत्रा", "guard", "Large mountain guardian dogs of Himachal Pradesh and Jammu & Kashmir that protect flocks from leopards and bears.", "They are adapted to cold climates and follow seasonal migrations."),
  /* pest control */
  Hp("Domestic cat", "मांजर", "pest", "Cats have been kept near grain stores for thousands of years because they hunt rats and mice, which eat and spoil stored grain and spread disease. A cat in the house or barn is one of the cheapest forms of rodent control.", "Provide clean water, vaccination and a safe place to sleep. Never use rat poison where cats hunt, because poisoned rodents also kill cats."),
  Hp("Barn owl", "गव्हाणी घुबड", "pest", "A single barn owl family eats a very large number of rats and field mice in a year, making it one of the best natural rodent controllers. Farmers in several countries, including India, install nest boxes to attract them.", "Protect nesting sites in old trees and buildings, avoid rodent poisons, and discourage the superstition that owls are unlucky."),
  Hp("Spotted owlet", "पिंगळा", "pest", "A small owl of villages and orchards that hunts insects, mice and lizards at dusk.", "Leave old trees with hollows standing."),
  Hp("Black drongo", "कोतवाल", "pest", "Called kotwal (the watchman) in Marathi, this glossy black bird perches in fields and catches grasshoppers, caterpillars and moths. It also drives away crows and hawks from other birds' nests.", "Place bird perches in fields and keep hedgerows and bund trees."),
  Hp("Cattle egret", "गाय बगळा", "pest", "Follows ploughs and grazing cattle to catch the insects they disturb, and removes ticks from animals.", "Protect heronries in village trees and wetlands."),
  Hp("Indian myna and other birds", "साळुंकी", "pest", "Mynas, bulbuls, babblers and rollers eat large numbers of crop pests, especially caterpillars.", "Reduce pesticide use and leave some trees and hedges."),
  Hp("Indian rat snake (dhaman)", "धामण", "pest", "A large, non-venomous snake that eats rats in fields and granaries. It is often killed out of fear, which only helps the rodents.", "Learn to tell it apart from venomous snakes, and call a trained rescuer instead of killing snakes. It is protected wildlife."),
  Hp("Frogs and toads", "बेडूक", "pest", "Paddy-field frogs and toads eat insects, snails and mosquito larvae every monsoon night.", "Avoid heavy pesticide use in paddy and keep some water bodies."),
  Hp("Insect-eating bats", "वटवाघूळ", "pest", "Small bats eat thousands of flying insects, including crop moths, each night. Fruit bats pollinate and spread the seeds of trees.", "Protect roosts in old buildings and trees. Bats are protected."),
  Hp("Indian grey mongoose", "मुंगूस", "pest", "Hunts rats, snakes and insects around farms and villages.", "It is protected wildlife and must not be caught or kept."),
  Hp("Bengal monitor lizard (ghorpad)", "घोरपड", "pest", "Eats rodents, insects and carrion around fields.", "It is a protected species; hunting it is illegal."),
  Hp("Ladybird beetles", "ढालकिडा", "pest", "Adults and larvae eat aphids, mealybugs and other soft-bodied pests.", "Avoid broad-spectrum insecticides and grow flowering border plants."),
  Hp("Spiders", "कोळी", "pest", "Paddy and cotton fields hold thousands of spiders that trap and eat pests.", "Spare spiders and their webs; they are among the farmer's best allies."),
  Hp("Trichogramma wasps", "ट्रायकोग्रामा", "pest", "Tiny wasps that lay their eggs inside the eggs of moth pests. They are mass-reared and released by agricultural universities as biocontrol.", "Obtain cards from Krishi Vigyan Kendras and avoid spraying after release."),
  Hp("Dragonflies and lacewings", "चतुर", "pest", "Dragonflies catch mosquitoes and flying pests; lacewing larvae eat aphids.", "Keep ponds and flowering plants near fields."),
  /* pollinators */
  Hp("Indian honey bee", "सातेरी मधमाशी", "pollinator", "Apis cerana indica nests in cavities and can be kept in wooden boxes. Its pollination raises the yield of crops such as sunflower, mustard, niger and many fruits. Manghar near Mahabaleshwar was declared Maharashtra's first 'honey village'.", "Keep boxes near flowering crops, avoid spraying during flowering, and learn beekeeping through the Khadi and Village Industries Board."),
  Hp("Rock bee", "आग्या मधमाशी", "pollinator", "Apis dorsata builds huge open combs on cliffs and tall trees. Katkari, Thakar and other forest communities have harvested its wild honey for generations.", "Sustainable harvesting leaves part of the comb and the brood intact."),
  Hp("Dwarf bee and stingless bee", "फुलोरी व डंखरहित मधमाशी", "pollinator", "Small native bees that pollinate vegetables and wild plants. Stingless bees are now kept for their medicinal honey.", "Leave wild corners and hedges where they can nest."),
  Hp("Butterflies, moths and beetles", "फुलपाखरे", "pollinator", "Many crops and wild plants depend on insects other than bees for pollination.", "Grow native flowering plants on bunds and avoid unnecessary spraying."),
  /* soil builders */
  Hp("Earthworms", "गांडूळ", "soil", "Called the farmer's friend, earthworms tunnel through soil, letting in air and water, and turn crop waste into rich castings. Vermicompost is made by feeding waste to earthworms.", "Add organic matter, keep the soil moist and covered, and reduce chemical inputs."),
  Hp("Dung beetles", "शेणकिडा", "soil", "Bury dung, returning nutrients to the soil, and break the life cycles of flies and parasites.", "Some deworming drugs harm dung beetles; follow veterinary advice on timing."),
  Hp("Ants and termites", "मुंग्या व वाळवी", "soil", "They mix and aerate soil and break down dead wood. Termites can also damage crops, so their role is mixed.", "Manage termites in crops without destroying all soil life."),
  /* livelihoods */
  Hp("Mulberry silkworm", "तुती रेशीम कीटक", "livelihood", "Sericulture has spread across Marathwada and western Maharashtra, giving farmers a monthly income from cocoons.", "Needs clean rearing houses and pesticide-free mulberry."),
  Hp("Tasar silkworm", "टसर रेशीम कीटक", "livelihood", "Wild tasar silk is reared on ain and arjun trees in the forests of Bhandara, Gondia, Chandrapur and Gadchiroli, largely by Dhiwar (Dhimar) families.", "Depends on healthy forests and protection from birds and wasps."),
  Hp("Lac insect", "लाख कीटक", "livelihood", "Kerria lacca is cultivated on palas, ber and kusum trees. Its resin, lac, is used in bangles, varnish and food glazing.", "A forest-based income that also keeps host trees standing."),
  Hp("Fish in tanks and paddies", "मासे", "livelihood", "Malgujari tanks and village ponds support carp fisheries run by Dhiwar and Bhoi communities. In rice–fish farming, fish eat weeds and pests and fertilise the paddy.", "Keep tanks free of pollution and stock native species."),
  Hp("Ducks in paddy", "बदके", "livelihood", "Ducks let into paddy fields eat weeds, snails and insects and add manure.", "Release them after the rice plants are established."),
  Hp("Backyard poultry", "गावठी कोंबडी", "livelihood", "Village hens forage on insects and grain waste and give eggs and meat. In Gadchiroli and Palghar most poultry is backyard poultry.", "Vaccinate against Ranikhet disease and provide safe night shelter."),
  /* draught & transport */
  Hp("Working bullocks", "बैल", "transport", "For thousands of years bullocks have ploughed, sown, weeded, threshed, lifted water and hauled carts. Maharashtra's male indigenous cattle fell from 67.8 to 47.7 lakh between 2012 and 2019.", "Rest them during heat, care for their hooves and necks, and honour them on Bail Pola."),
  Hp("He-buffalo (redya)", "रेडा", "transport", "Used to puddle and plough flooded paddy fields in Konkan and eastern Vidarbha, where bullocks tire quickly in mud.", "Buffaloes need water or mud to wallow in to keep cool."),
  Hp("Donkeys and mules", "गाढव व खेचर", "transport", "Carry clay, bricks, stone and loads on hill paths. Maharashtra's donkeys fell by 39.7% between 2012 and 2019.", "Donkeys at brick kilns often suffer overwork; welfare groups provide care camps."),
  Hp("Elephants", "हत्ती", "transport", "Once used for logging and forest work. Kamlapur in Gadchiroli has Maharashtra's elephant camp, and Palakapya's Hastyayurveda records ancient elephant medicine.", "Wild elephants are protected; captive elephants need expert care."),
  /* cleaners */
  Hp("Vultures", "गिधाड", "cleaner", "Vultures cleaned carcasses from villages within hours, preventing disease. India's vultures declined by more than 95 per cent after cattle were treated with the painkiller diclofenac, which poisons vultures; veterinary use of diclofenac was banned in 2006.", "Use only vulture-safe veterinary painkillers and support vulture restaurants and breeding programmes."),
  Hp("Crows and kites", "कावळा व घार", "cleaner", "Scavenge waste and dead animals around villages.", "They are part of the village ecosystem and do not need feeding.")
];