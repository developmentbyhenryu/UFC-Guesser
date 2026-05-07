const fighters = [
  {
    name: "Conor McGregor",
    weightClass: "Lightweight",
    record: "22-6",
    image: "/fighters/conor.png",

    hints: [
      "Coached opposite Urijah Faber on The Ultimate Fighter",
      "Became the first simultaneous two-weightClass UFC champion",
      "Knocked out Jose Aldo in 13 seconds",
      "Headlined UFC 229",
      "Known as 'The Notorious'"
    ]
  },

  {
    name: "Khabib Nurmagomedov",
    weightClass: "Lightweight",
    record: "29-0",
    image: "/fighters/khabib.png",

    hints: [
      "Lost only two rounds on the judges’ scorecards in his UFC career",
      "Retired immediately after defeating Justin Gaethje",
      "Jumped over the cage after a major rivalry fight",
      "Defeated Conor McGregor by submission",
      "Known as 'The Eagle'"
    ]
  },

  {
    name: "Jon Jones",
    weightClass: "Heavyweight",
    record: "28-1",
    image: "/fighters/jones.png",

    hints: [
      "Became the youngest champion in UFC history",
      "Had legendary rivalries with Daniel Cormier and Alexander Gustafsson",
      "Won a title fight with a spinning elbow finish",
      "Long considered the pound-for-pound GOAT",
      "Known as 'Bones'"
    ]
  },

  {
    name: "Israel Adesanya",
    weightClass: "Middleweight",
    record: "24-4",
    image: "/fighters/adesanya.png",

    hints: [
      "Entered the UFC after an extensive kickboxing career",
      "Avenged a knockout loss to reclaim a UFC title",
      "Had a famous rivalry with Alex Pereira",
      "Performed anime-inspired walkouts",
      "Known as 'The Last Stylebender'"
    ]
  },

  {
    name: "Alex Pereira",
    weightClass: "Light Heavyweight",
    record: "12-2",
    image: "/fighters/pereira.png",

    hints: [
      "Defeated the same rival multiple times across two combat sports",
      "Won UFC gold in two weight classes in a short time span",
      "Known for devastating left hooks",
      "Beat Israel Adesanya in both kickboxing and MMA",
      "Known as 'Poatan'"
    ]
  },

  {
    name: "Nate Diaz",
    weightClass: "Welterweight",
    record: "21-13",
    image: "/fighters/diaz.png",

    hints: [
      "Won The Ultimate Fighter season 5",
      "Was involved in one of the UFC’s most iconic post-fight brawls",
      "Submitted Conor McGregor on short notice",
      "Frequently threw up a double middle finger during fights",
      "Represented Stockton, California"
    ]
  },

  {
    name: "Max Holloway",
    weightClass: "Featherweight",
    record: "26-8",
    image: "/fighters/holloway.png",

    hints: [
      "Holds multiple significant striking records in UFC history",
      "Pointed to the center of the cage during the final seconds of a fight",
      "Defeated Jose Aldo twice in title fights",
      "Known for volume boxing and durability",
      "Known as 'Blessed'"
    ]
  },

  {
    name: "Charles Oliveira",
    weightClass: "Lightweight",
    record: "35-10",
    image: "/fighters/oliveira.png",

    hints: [
      "Entered the UFC as a teenager",
      "Holds the record for most submissions in UFC history",
      "Won the lightweight title after Michael Chandler dropped him early",
      "Nearly every UFC victory came by finish",
      "Known as 'Do Bronx'"
    ]
  },

  {
    name: "Georges St-Pierre",
    weightClass: "Welterweight",
    record: "26-2",
    image: "/fighters/gsp.png",

    hints: [
      "Returned from a multi-year hiatus to win another title",
      "Famously avenged both of his career losses",
      "Dominated the welterweight weightClass for years",
      "Known for elite wrestling and jab-heavy striking",
      "Often referred to as 'GSP'"
    ]
  },

  {
    name: "Anderson Silva",
    weightClass: "Middleweight",
    record: "34-11",
    image: "/fighters/silva.png",

    hints: [
      "Defended a UFC title 10 consecutive times",
      "Lost a fight after excessive taunting",
      "Knocked out Vitor Belfort with a front kick",
      "Widely considered one of the greatest strikers ever",
      "Known as 'The Spider'"
    ]
  },

  {
    name: "Dustin Poirier",
    weightClass: "Lightweight",
    record: "30-9",
    image: "/fighters/poirier.png",

    hints: [
      "Won an interim UFC title before an undisputed title shot",
      "Headlined multiple wars that became instant classics",
      "Knocked out Conor McGregor twice in 2021",
      "Known for boxing and guillotine chokes",
      "Known as 'The Diamond'"
    ]
  },

  {
    name: "Kamaru Usman",
    weightClass: "Welterweight",
    record: "20-4",
    image: "/fighters/usman.png",

    hints: [
      "Won The Ultimate Fighter before becoming champion",
      "Built one of the longest welterweight win streaks ever",
      "Lost his title via last-minute head-kick KO",
      "Had a dominant rivalry with Colby Covington",
      "Known as 'The Nigerian Nightmare'"
    ]
  },

  {
    name: "Tony Ferguson",
    weightClass: "Lightweight",
    record: "25-11",
    image: "/fighters/ferguson.png",

    hints: [
      "Won The Ultimate Fighter season 13",
      "Once held a 12-fight UFC win streak",
      "Was scheduled multiple times to fight Khabib Nurmagomedov",
      "Known for unpredictable striking and submissions",
      "Known as 'El Cucuy'"
    ]
  },

  {
    name: "Justin Gaethje",
    weightClass: "Lightweight",
    record: "26-5",
    image: "/fighters/gaethje.png",

    hints: [
      "Began his UFC career with several Fight of the Year contenders",
      "Won an interim UFC title during the pandemic era",
      "Known for devastating leg kicks",
      "Head-kicked Dustin Poirier for the BMF title",
      "Known as 'The Highlight'"
    ]
  },

  {
    name: "Brock Lesnar",
    weightClass: "Heavyweight",
    record: "5-3",
    image: "/fighters/lesnar.png",

    hints: [
      "Won UFC gold in his fourth UFC fight",
      "Main-evented UFC 100",
      "Beat Shane Carwin by submission",
      "Former WWE Champion",
      "Known as 'The Beast Incarnate'"
    ]
  },

  {
    name: "Mirko Cro Cop",
    weightClass: "Heavyweight",
    record: "38-11",
    image: "/fighters/crocop.png",

    hints: [
      "Became famous in PRIDE before joining the UFC",
      "Used one of the most feared head kicks in MMA history",
      "Had a legendary rivalry with Fedor Emelianenko",
      "Was known for devastating left high kicks",
      "Known as 'Cro Cop'"
    ]
  },

  {
    name: "Chuck Liddell",
    weightClass: "Light Heavyweight",
    record: "21-9",
    image: "/fighters/liddell.png",

    hints: [
      "Helped bring the UFC into the mainstream during the 2000s",
      "Had iconic rivalries with Tito Ortiz and Randy Couture",
      "Known for knockout power and a mohawk hairstyle",
      "Frequently sprawled and counter-punched wrestlers",
      "Known as 'The Iceman'"
    ]
  },

  {
    name: "BJ Penn",
    weightClass: "Lightweight",
    record: "16-14",
    image: "/fighters/bjpenn.png",

    hints: [
      "Won a world championship in Brazilian jiu-jitsu before MMA fame",
      "Captured UFC titles in multiple weight classes",
      "Fought across several weightClasss throughout his career",
      "Known for elite boxing and jiu-jitsu",
      "Nicknamed 'The Prodigy'"
    ]
  },

  {
    name: "Rampage Jackson",
    weightClass: "Light Heavyweight",
    record: "38-14",
    image: "/fighters/rampage.png",

    hints: [
      "Rose to fame during the PRIDE era",
      "Won the UFC light heavyweight title in 2007",
      "Famously slammed Ricardo Arona unconscious",
      "Coached opposite Rashad Evans on The Ultimate Fighter",
      "Known as 'Rampage'"
    ]
  },

  {
    name: "Rich Franklin",
    weightClass: "Middleweight",
    record: "29-7",
    image: "/fighters/franklin.png",

    hints: [
      "Worked as a math teacher before becoming a UFC star",
      "Held the UFC middleweight championship in the mid-2000s",
      "Lost his title twice to Anderson Silva",
      "Known for polished boxing and professionalism",
      "Known as 'Ace'"
    ]
  }
];

export default fighters;