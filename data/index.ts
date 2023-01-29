import { ImageRequireSource } from "react-native";
// tag interface
interface Tag {
  id: number;
  name: string;
}
// movie interface
export interface Movie {
  id: number;
  image: ImageRequireSource;
  cover: ImageRequireSource;
  logo: ImageRequireSource;
  studioId: number;
  trending: boolean;
  year: number;
  length: string;
  quality: string;
  shortInfo: string;
  summary: string;
  tags: Tag[];
}
// studio interface
export interface Studio {
  id: number;
  image: ImageRequireSource;
}

// list of movie tags
const tags: Tag[] = [
  {
    id: 1,
    name: "Action",
  },
  {
    id: 2,
    name: "Adventure",
  },
  {
    id: 3,
    name: "Comedy",
  },
  {
    id: 4,
    name: "Crime",
  },
  {
    id: 5,
    name: "Drama",
  },
  {
    id: 6,
    name: "Fantasy",
  },
  {
    id: 7,
    name: "Superhero",
  },
  {
    id: 8,
    name: "Horror",
  },
  {
    id: 9,
    name: "Science Fiction",
  },
  {
    id: 10,
    name: "Thriller",
  },
];

// list of movie studios
export const studios: Studio[] = [
  {
    id: 1,
    image: require("../assets/images/studios/viewers-disney.png"),
  },
  {
    id: 2,
    image: require("../assets/images/studios/viewers-marvel.png"),
  },
  {
    id: 3,
    image: require("../assets/images/studios/viewers-national.png"),
  },
  {
    id: 4,
    image: require("../assets/images/studios/viewers-pixar.png"),
  },
  {
    id: 5,
    image: require("../assets/images/studios/viewers-starwars.png"),
  },
];
// list of movies
export const movies: Movie[] = [
  {
    id: 1,
    image: require("../assets/images/others/HSMTMTS-gstatic-600x900.jpg"),
    cover: require("../assets/images/others/covers/high-school-musical-season-2-episode-12-6-1627644411.jpeg"),
    logo: require("../assets/images/others/logo/hight-school-musical.png"),
    studioId: 1,
    trending: true,
    year: 2020,
    length: "1h 48m",
    quality: "4k Ultra HD",
    tags,
    shortInfo: "Do dolor id do sint officia.",
    summary:
      "Aute amet labore velit aute in mollit ipsum eu incididunt proident ex id. Ipsum enim sint magna mollit ea est fugiat laboris consequat excepteur. Tempor duis sint cupidatat proident aliquip ipsum reprehenderit adipisicing deserunt deserunt ea Lorem ad nulla.",
  },
  {
    id: 2,
    image: require("../assets/images/others/blackpantherwakandaforever_lob_crd_06.jpg"),
    cover: require("../assets/images/others/covers/black-panther.jpeg"),
    logo: require("../assets/images/others/logo/blackpantherwakandaforever.png"),
    studioId: 1,
    trending: true,
    year: 2020,
    length: "2h 48m",
    quality: "Full HD",
    tags,
    shortInfo:
      "Anim anim nisi est dolore ex esse pariatur id id labore ullamco.",
    summary:
      "Velit enim magna quis minim ipsum proident cupidatat velit cupidatat dolore. Deserunt elit culpa ipsum laborum voluptate enim anim ut esse nisi reprehenderit. Commodo commodo fugiat quis ipsum ea fugiat deserunt proident velit esse culpa. Voluptate eu labore nostrud officia officia ex magna dolore pariatur. Pariatur enim minim est nostrud velit qui laboris sunt excepteur proident excepteur nostrud. Deserunt non ad elit esse pariatur consectetur qui esse fugiat anim. Est occaecat ex in nostrud commodo eiusmod velit sunt velit laboris fugiat eiusmod esse commodo.",
  },
  {
    id: 3,
    image: require("../assets/images/others/image_06aa7fbd.jpeg"),
    cover: require("../assets/images/others/covers/thor-love-thunder.jpg"),
    logo: require("../assets/images/others/logo/marvel_Thor_Love_and_Thunder.png"),
    studioId: 1,
    trending: true,
    year: 2022,
    length: "2h 48m",
    quality: "5k Ultra HD",
    tags,
    shortInfo:
      "Duis id Lorem irure duis ex est Lorem aute proident duis do ut pariatur ullamco.",
    summary:
      "Consequat qui nisi occaecat nostrud aute ea. Elit labore qui nulla in sunt culpa sit reprehenderit dolor veniam non consectetur id veniam. Velit ut id incididunt minim veniam do duis ad occaecat aliqua deserunt velit id. Reprehenderit sunt enim amet dolor sit culpa voluptate. Ad consectetur Lorem in excepteur pariatur non magna veniam ad mollit laborum enim voluptate.",
  },
  {
    id: 4,
    image: require("../assets/images/others/LightMagic_FB-TW_KeyArt.jpg"),
    cover: require("../assets/images/others/covers/light-magic.jpeg"),
    logo: require("../assets/images/others/logo/light_magic_logo_91_87705617.png"),
    studioId: 1,
    trending: true,
    year: 2018,
    length: "4h 48m",
    quality: "2k Ultra HD",
    tags,
    shortInfo:
      "Nisi ea et anim ipsum tempor dolor id ad sint veniam voluptate consequat laborum incididunt.",
    summary:
      "Aliquip sit eiusmod ullamco reprehenderit culpa Lorem commodo enim eu. Occaecat adipisicing nostrud cupidatat Lorem. Cillum eiusmod pariatur incididunt incididunt adipisicing velit deserunt anim laboris duis irure deserunt consequat dolor.",
  },
  {
    id: 5,
    image: require("../assets/images/others/moonknight_lob_crd_05.jpg"),
    cover: require("../assets/images/others/covers/moonknight.jpg"),
    logo: require("../assets/images/others/logo/marvels-Moon-Knight-Logo-2019.png"),
    studioId: 1,
    trending: true,
    year: 2016,
    length: "1h 48m",
    quality: "6k Ultra HD",
    tags,
    shortInfo: "Velit dolore ipsum magna culpa officia.",
    summary:
      "In esse anim ad in reprehenderit sit laboris occaecat. Labore consectetur ex culpa commodo est fugiat cillum elit. Eiusmod adipisicing minim sit exercitation ullamco ut exercitation enim veniam pariatur velit. Officia do sint sint reprehenderit eiusmod velit culpa exercitation et eiusmod nostrud. Minim dolore adipisicing ut adipisicing minim minim ut mollit ut aliquip duis cillum. Nisi amet quis nostrud id commodo ad aliquip et.",
  },
  {
    id: 6,
    image: require("../assets/images/others/captain-marvel.jpg"),
    cover: require("../assets/images/others/covers/captain-marvel-1024x576.jpg"),
    logo: require("../assets/images/others/logo/captain_Marvel_logo.png"),
    studioId: 1,
    trending: true,
    year: 2020,
    length: "4h 19m",
    quality: "4k Ultra HD",
    tags,
    shortInfo: "Do proident ea occaecat ea qui.",
    summary:
      "Aute aute fugiat in sit anim. In non sit fugiat et voluptate irure incididunt nulla eiusmod occaecat veniam id consequat. Laboris Lorem dolore qui eiusmod excepteur pariatur commodo. Cillum nostrud consectetur amet minim laborum veniam. Culpa amet tempor cillum minim irure nisi commodo. Dolore enim cillum non sit dolor. Irure anim consequat ea mollit irure minim non excepteur ut.",
  },
  {
    id: 7,
    image: require("../assets/images/others/MV5BNDgxNTIyZTMtMzYxNi00NmRjLWFiMTEtM2U4MTFmODkzNzM1XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_FMjpg_UX1000_.jpg"),
    cover: require("../assets/images/others/covers/Andor.jpg"),
    logo: require("../assets/images/others/logo/star-wars-andor-logo.png"),
    studioId: 1,
    trending: true,
    year: 2020,
    length: "2h 39m",
    quality: "2k Ultra HD",
    tags,
    shortInfo: "Et Lorem anim cupidatat commodo et cupidatat ad.",
    summary:
      "Do eu quis enim quis aliqua occaecat adipisicing voluptate amet consectetur. Sint exercitation ipsum et cillum aute ullamco aliqua aliquip commodo proident ex nisi pariatur tempor. Culpa elit nulla laborum cillum nostrud elit aliqua tempor reprehenderit. Tempor laborum officia ut minim reprehenderit ad consequat laborum sunt veniam in esse id. Officia qui dolore culpa est nostrud deserunt.",
  },
  {
    id: 8,
    image: require("../assets/images/others/MV5BZDIyYjM3N2EtOTU1MC00YTA4LTgzNjctMTNjODcxZTZhODU2XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg"),
    cover: require("../assets/images/others/covers/pinocchio-review.jpeg"),
    logo: require("../assets/images/others/logo/pinocchio.png"),
    studioId: 1,
    trending: true,
    year: 2019,
    length: "1h 48m",
    quality: "8k Ultra HD",
    tags,
    shortInfo: "Laborum fugiat minim velit elit.",
    summary:
      "Labore esse ipsum ullamco officia. Tempor sit cillum qui aute nulla eu voluptate ad duis. Elit enim in sunt culpa aute minim occaecat laborum minim consequat irure laborum nulla cupidatat.",
  },
  {
    id: 9,
    image: require("../assets/images/others/night-museum.jpeg"),
    cover: require("../assets/images/others/covers/night-at-the-museum.jpg"),
    logo: require("../assets/images/others/logo/night-at-the-musium.png"),
    studioId: 1,
    trending: true,
    year: 2020,
    length: "2h 48m",
    quality: "4k Ultra HD",
    tags,
    shortInfo:
      "Magna proident elit cillum Lorem voluptate voluptate incididunt ea occaecat aute.",
    summary:
      "Reprehenderit minim aliqua tempor tempor voluptate eiusmod est. Consequat ullamco nisi elit et incididunt. Adipisicing deserunt cillum ut dolor nostrud fugiat do fugiat ad quis aliqua pariatur fugiat. Mollit nisi et nulla nisi sint. Aliqua pariatur amet elit quis proident est aute veniam enim labore occaecat minim excepteur. Sit nisi aute esse commodo. Cupidatat fugiat sint fugiat enim veniam nulla duis reprehenderit proident Lorem velit.",
  },
];

export const trendingMovies: Movie[] = [
  {
    id: 1,
    image: require("../assets/images/others/original.jpeg"),
    cover: require("../assets/images/others/covers/thor-love-thunder.jpg"),
    logo: require("../assets/images/others/logo/marvel_Thor_Love_and_Thunder.png"),
    studioId: 1,
    trending: true,
    year: 2020,
    length: "1h 48m",
    quality: "4k Ultra HD",
    tags,
    shortInfo: "Do dolor id do sint officia.",
    summary:
      "Aute amet labore velit aute in mollit ipsum eu incididunt proident ex id. Ipsum enim sint magna mollit ea est fugiat laboris consequat excepteur. Tempor duis sint cupidatat proident aliquip ipsum reprehenderit adipisicing deserunt deserunt ea Lorem ad nulla.",
  },
  {
    id: 2,
    image: require("../assets/images/others/original-2.jpeg"),
    cover: require("../assets/images/others/covers/Andor.jpg"),
    logo: require("../assets/images/others/logo/star-wars-andor-logo.png"),
    studioId: 1,
    trending: true,
    year: 2020,
    length: "1h 48m",
    quality: "4k Ultra HD",
    tags,
    shortInfo:
      "Anim anim nisi est dolore ex esse pariatur id id labore ullamco.",
    summary:
      "Velit enim magna quis minim ipsum proident cupidatat velit cupidatat dolore. Deserunt elit culpa ipsum laborum voluptate enim anim ut esse nisi reprehenderit. Commodo commodo fugiat quis ipsum ea fugiat deserunt proident velit esse culpa. Voluptate eu labore nostrud officia officia ex magna dolore pariatur. Pariatur enim minim est nostrud velit qui laboris sunt excepteur proident excepteur nostrud. Deserunt non ad elit esse pariatur consectetur qui esse fugiat anim. Est occaecat ex in nostrud commodo eiusmod velit sunt velit laboris fugiat eiusmod esse commodo.",
  },
  {
    id: 3,
    image: require("../assets/images/others/original-3.jpeg"),
    cover: require("../assets/images/others/covers/limitlesswithchrishemsworth.jpeg"),
    logo: require("../assets/images/others/logo/imitlesswithchrishemsworth_logo_845126e4.png"),
    studioId: 1,
    trending: true,
    year: 2020,
    length: "1h 48m",
    quality: "4k Ultra HD",
    tags,
    shortInfo:
      "Duis id Lorem irure duis ex est Lorem aute proident duis do ut pariatur ullamco.",
    summary:
      "Consequat qui nisi occaecat nostrud aute ea. Elit labore qui nulla in sunt culpa sit reprehenderit dolor veniam non consectetur id veniam. Velit ut id incididunt minim veniam do duis ad occaecat aliqua deserunt velit id. Reprehenderit sunt enim amet dolor sit culpa voluptate. Ad consectetur Lorem in excepteur pariatur non magna veniam ad mollit laborum enim voluptate.",
  },
  {
    id: 4,
    image: require("../assets/images/others/original-4.jpeg"),
    cover: require("../assets/images/others/covers/night-at-the-museum.jpg"),
    logo: require("../assets/images/others/logo/night-at-the-musium.png"),
    studioId: 1,
    trending: true,
    year: 2020,
    length: "1h 48m",
    quality: "4k Ultra HD",
    tags,
    shortInfo:
      "Nisi ea et anim ipsum tempor dolor id ad sint veniam voluptate consequat laborum incididunt.",
    summary:
      "Aliquip sit eiusmod ullamco reprehenderit culpa Lorem commodo enim eu. Occaecat adipisicing nostrud cupidatat Lorem. Cillum eiusmod pariatur incididunt incididunt adipisicing velit deserunt anim laboris duis irure deserunt consequat dolor.",
  },
  {
    id: 5,
    image: require("../assets/images/others/original-5.jpeg"),
    cover: require("../assets/images/others/covers/willow-Disney.jpg"),
    logo: require("../assets/images/others/logo/Willow_2022.png"),
    studioId: 1,
    trending: true,
    year: 2020,
    length: "1h 48m",
    quality: "4k Ultra HD",
    tags,
    shortInfo: "Velit dolore ipsum magna culpa officia.",
    summary:
      "In esse anim ad in reprehenderit sit laboris occaecat. Labore consectetur ex culpa commodo est fugiat cillum elit. Eiusmod adipisicing minim sit exercitation ullamco ut exercitation enim veniam pariatur velit. Officia do sint sint reprehenderit eiusmod velit culpa exercitation et eiusmod nostrud. Minim dolore adipisicing ut adipisicing minim minim ut mollit ut aliquip duis cillum. Nisi amet quis nostrud id commodo ad aliquip et.",
  },
  {
    id: 6,
    image: require("../assets/images/others/original-6.jpeg"),
    cover: require("../assets/images/others/covers/Diary-of-a-Wimpy-Kid-Roderick-Rules.jpg"),
    logo: require("../assets/images/others/logo/rodrickrules_logo_795_aa122734.png"),
    studioId: 1,
    trending: true,
    year: 2020,
    length: "1h 48m",
    quality: "4k Ultra HD",
    tags,
    shortInfo: "Do proident ea occaecat ea qui.",
    summary:
      "Aute aute fugiat in sit anim. In non sit fugiat et voluptate irure incididunt nulla eiusmod occaecat veniam id consequat. Laboris Lorem dolore qui eiusmod excepteur pariatur commodo. Cillum nostrud consectetur amet minim laborum veniam. Culpa amet tempor cillum minim irure nisi commodo. Dolore enim cillum non sit dolor. Irure anim consequat ea mollit irure minim non excepteur ut.",
  },
  {
    id: 8,
    image: require("../assets/images/others/original-8.jpeg"),
    cover: require("../assets/images/others/covers/the-bad.jpeg"),
    logo: require("../assets/images/others/logo/star_wars_the_bad_batch_logo.png"),
    studioId: 1,
    trending: true,
    year: 2020,
    length: "1h 48m",
    quality: "4k Ultra HD",
    tags,
    shortInfo: "Laborum fugiat minim velit elit.",
    summary:
      "Labore esse ipsum ullamco officia. Tempor sit cillum qui aute nulla eu voluptate ad duis. Elit enim in sunt culpa aute minim occaecat laborum minim consequat irure laborum nulla cupidatat.",
  },
  {
    id: 9,
    image: require("../assets/images/others/original-10.jpeg"),
    cover: require("../assets/images/others/covers/22strange-world.jpg"),
    logo: require("../assets/images/others/logo/strangeworld_logo_243_b70f606d.png"),
    studioId: 1,
    trending: true,
    year: 2020,
    length: "1h 48m",
    quality: "4k Ultra HD",
    tags,
    shortInfo:
      "Magna proident elit cillum Lorem voluptate voluptate incididunt ea occaecat aute.",
    summary:
      "Reprehenderit minim aliqua tempor tempor voluptate eiusmod est. Consequat ullamco nisi elit et incididunt. Adipisicing deserunt cillum ut dolor nostrud fugiat do fugiat ad quis aliqua pariatur fugiat. Mollit nisi et nulla nisi sint. Aliqua pariatur amet elit quis proident est aute veniam enim labore occaecat minim excepteur. Sit nisi aute esse commodo. Cupidatat fugiat sint fugiat enim veniam nulla duis reprehenderit proident Lorem velit.",
  },
];
