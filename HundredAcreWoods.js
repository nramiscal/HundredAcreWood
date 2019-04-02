var tigger = { character: "Tigger" }; // start with just the character attribute
var pooh = { character: "Winnie the Pooh" };
var piglet = { character: "Piglet"};
var bees = { character: "Bees"};
var owl = { character: "Owl"};
var robin = { character: "Christopher Robin"};
var rabbit = { character: "Rabbit"};
var gopher = { character: "Gopher"};
var kanga = { character: "Kanga"};
var eeyore = { character: "Eeyore"};
var heffalumps = { character: "Heffalunps"};

heffalumps.west = eeyore;
eeyore.south = kanga;
eeyore.east = heffalumps;
kanga.north = eeyore;
kanga.south = robin;
robin.north = kanga;
robin.south = pooh;
robin.east = rabbit;
robin.west = owl;
owl.east = robin;
owl.south = piglet;
piglet.north = owl;
piglet.east = pooh;
pooh.north = robin;
pooh.south = tigger;
pooh.east = bees;
pooh.west = piglet;
rabbit.east = gopher;
rabbit.south = bees;
rabbit.west = robin;
gopher.west = rabbit;
bees.north = rabbit;
bees.west = pooh;
tigger.north = pooh;


// console.log(tigger.north.north.north.north.east);
console.log(pooh.west.north.east.east.south);
