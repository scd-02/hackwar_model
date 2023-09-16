const imageInput = document.getElementById("imageInput");
// console.log(imageInput);

const outputDiv = document.getElementById("output");

const plantClasses = [
  "Abelmoschus sagittifolius",
  "Abrus precatorius",
  "Abutilon indicum",
  "Acanthus integrifolius",
  "Acorus tatarinowii",
  "Agave americana",
  "Ageratum conyzoides",
  "Allium ramosum",
  "Alocasia macrorrhizos",
  "Aloe vera",
  "Alpinia officinarum",
  "Amomum longiligulare",
  "Ampelopsis cantoniensis",
  "Andrographis paniculata",
  "Angelica dahurica",
  "Ardisia sylvestris",
  "Artemisia vulgaris",
  "Artocarpus altilis",
  "Artocarpus heterophyllus",
  "Artocarpus lakoocha",
  "Asparagus cochinchinensis",
  "Asparagus officinalis",
  "Averrhoa carambola",
  "Baccaurea sp",
  "Barleria lupulina",
  "Bengal Arum",
  "Berchemia lineata",
  "Bidens pilosa",
  "Bischofia trifoliata",
  "Blackberry Lily",
  "Blumea balsamifera",
  "Boehmeria nivea",
  "Breynia vitis",
  "Caesalpinia sappan",
  "Callerya speciosa",
  "Callisia fragrans",
  "Calophyllum inophyllum",
  "Calotropis gigantea",
  "Camellia chrysantha",
  "Caprifoliaceae",
  "Capsicum annuum",
  "Carica papaya",
  "Catharanthus roseus",
  "Celastrus hindsii",
  "Celosia argentea",
  "Centella asiatica",
  "Citrus aurantifolia",
  "Citrus hystrix",
  "Clausena indica",
  "Cleistocalyx operculatus",
  "Clerodendrum inerme",
  "Clinacanthus nutans",
  "Clycyrrhiza uralensis fish",
  "Coix lacryma-jobi",
  "Cordyline fruticosa",
  "Costus speciosus",
  "Crescentia cujete Lin",
  "Crinum asiaticum",
  "Crinum latifolium",
  "Croton oblongifolius",
  "Croton tonkinensis",
  "Curculigo gracilis",
  "Curculigo orchioides",
  "Cymbopogon",
  "Datura metel",
  "Derris elliptica",
  "Dianella ensifolia",
  "Dicliptera chinensis",
  "Dimocarpus longan",
  "Dioscorea persimilis",
  "Eichhoriaceae crassipes",
  "Eleutherine bulbosa",
  "Erythrina variegata",
  "Eupatorium fortunei",
  "Eupatorium triplinerve",
  "Euphorbia hirta",
  "Euphorbia pulcherrima",
  "Euphorbia tirucalli",
  "Euphorbia tithymaloides",
  "Eurycoma longifolia",
  "Excoecaria cochinchinensis",
  "Excoecaria sp",
  "Fallopia multiflora",
  "Ficus auriculata",
  "Ficus racemosa",
  "Fructus lycii",
  "Glochidion eriocarpum",
  "Glycosmis pentaphylla",
  "Gonocaryum lobbianum",
  "Gymnema sylvestre",
  "Gynura divaricata",
  "Hemerocallis fulva",
  "Hemigraphis glaucescens",
  "Hibiscus mutabilis",
  "Hibiscus rosa sinensis",
  "Hibiscus sabdariffa",
  "Holarrhena pubescens",
  "Homalomena occulta",
  "Houttuynia cordata",
  "Imperata cylindrica",
  "Iris domestica",
  "Ixora coccinea",
  "Jasminum sambac",
  "Jatropha gossypiifolia",
  "Jatropha multifida",
  "Jatropha podagrica",
  "Justicia gendarussa",
  "Kalanchoe pinnata",
  "Lactuca indica",
  "Lantana camara",
  "Lawsonia inermis",
  "Leea rubra",
  "Litsea Glutinosa",
  "Lonicera dasystyla",
  "Lpomoea sp",
  "Maesa",
  "Mallotus barbatus",
  "Mangifera",
  "Melastoma malabathricum",
  "Mentha Spicata",
  "Microcos tomentosa",
  "Micromelum falcatum",
  "Millettia pulchra",
  "Mimosa pudica",
  "Morinda citrifolia",
  "Moringa oleifera",
  "Morus alba",
  "Mussaenda philippica",
  "Nelumbo nucifera",
  "Ocimum basilicum",
  "Ocimum gratissimum",
  "Ocimum sanctum",
  "Oenanthe javanica",
  "Ophiopogon japonicus",
  "Paederia lanuginosa",
  "Pandanus amaryllifolius",
  "Pandanus sp",
  "Pandanus tectorius",
  "Parameria Laevigata",
  "Passiflora foetida",
  "Pereskia Sacharosa",
  "Persicaria odorata",
  "Phlogacanthus turgidus",
  "Phrynium placentarium",
  "Phyllanthus Reticulatus Poir",
  "Piper betle",
  "Piper sarmentosum",
  "Plantago",
  "Platycladus orientalis",
  "Plectranthus amboinicus",
  "Pluchea pteropoda Hemsl",
  "Plukenetia volubilis",
  "Plumbago indica",
  "Plumeria rubra",
  "Polyginum cuspidatum",
  "Polyscias fruticosa",
  "Polyscias guilfoylei",
  "Polyscias scutellaria",
  "Pouzolzia zeylanica",
  "Premna serratifolia",
  "Pseuderanthemum latifolium",
  "Psidium guajava",
  "Psychotria reevesii Wall",
  "Psychotria rubra",
  "Quisqualis indica",
  "Rauvolfia",
  "Rauvolfia tetraphylla",
  "Rhinacanthus nasutus",
  "Rhodomyrtus tomentosa",
  "Ruellia tuberosa",
  "Sanseviera canaliculata Carr",
  "Sansevieria hyacinthoides",
  "Sarcandra glabra",
  "Sauropus androgynus",
  "Schefflera heptaphylla",
  "Schefflera venulosa",
  "Senna alata",
  "Sida acuta Burm",
  "Solanum Mammosum",
  "Solanum torvum",
  "Spilanthes acmella",
  "Spondias dulcis",
  "Stachytarpheta jamaicensis",
  "Stephania dielsiana",
  "Stereospermum chelonoides",
  "Streptocaulon juventas",
  "Syzygium nervosum",
  "Tabernaemontana divaricata",
  "Tacca subflabellata",
  "Tamarindus indica",
  "Terminalia catappa",
  "Tradescantia discolor",
  "Trichanthera gigantea",
  "Vernonia amygdalina",
  "Vitex negundo",
  "Xanthium strumarium",
  "Zanthoxylum avicennae",
  "Zingiber officinale",
  "Ziziphus mauritiana",
  "helicteres hirsuta",
];

imageInput.addEventListener("change", async () => {
  const file = imageInput.files[0];
  if (file) {
    // Read and preprocess the selected image
    const image = await loadImage(file);
    let tensor = preprocessImage(image);

    // let tensor = image;
    tensor = tf.expandDims(tensor, 0);

    // Make predictions using the model
    // console.log(model);
    const predictions = await model.predict(tensor);
    let scores = await tf.softmax(predictions).data();
    index = scores.indexOf(Math.max(...scores));
    console.log(plantClasses[index]);

    // Display predictions
    outputDiv.innerText = `Predictions: ${plantClasses[index]}`;
  }
});

// Function to load an image and convert it to a tensor
async function loadImage(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => resolve(tf.browser.fromPixels(img));
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  });
}

function preprocessImage(image) {
  const resizedImage = tf.image.resizeBilinear(image, [128, 128]); // Adjust size if necessary
  return resizedImage;
}

// Setting up tfjs with the model we downloaded
tf.loadGraphModel("model1/model.json").then(function (model) {
  window.model = model;
});

// Predict function
var predict = function (input) {
  if (window.model) {
    window.model
      .predict([tf.tensor(input).reshape([28, 28, 1])])
      .array()
      .then(function (scores) {
        scores = scores[0];
        predicted = scores.indexOf(Math.max(...scores));
        $("#number").html(predicted);
      });
  } else {
    // The model takes a bit to load,
    // if we are too fast, wait
    setTimeout(function () {
      predict(input);
    }, 50);
  }
};
