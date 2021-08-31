writeCode

Write code to:-

- create a database named `sports`.
use sports

- list all databases present in local mongod server.
show dbs
- create 3 collections named `cricket`, `football`, `TT` in sports databse.
db.createCollection('cricket')
db.createCollection('football')
db.createCollection('TT')
- add multiple players in those collections which should have fields like `name`, `age` and `email` and `bid_price`.
db.cricket.insertMany([{
    name:"Sachin Tendulkar",
    age:45,
    email:"tendu@gamil.com",
    bid_price:10000000
},{
    name:"MS Dhoni",
    age:40,
    email:"dhoni@gamil.com",
    bid_price:70000000
},{
    name:"Suresh Raina",
    age:40,
    email:"raina@gamil.com",
    bid_price:20000000
},{
    name:"King Kohli",
    age:35,
    email:"kohli@gamil.com",
    bid_price:110000000
},{
    name:"Sir Jadeja",
    age:34,
    email:"sir@gamil.com",
    bid_price:50000000
},{
    name:"Hit-man",
    age:36,
    email:"hit@gamil.com",
    bid_price:80000000
}])

db.football.insertMany([{
    name:"Sachin Tendulkar",
    age:45,
    email:"tendu@gamil.com",
    bid_price:10000000
},{
    name:"MS Dhoni",
    age:40,
    email:"dhoni@gamil.com",
    bid_price:70000000
},{
    name:"Suresh Raina",
    age:40,
    email:"raina@gamil.com",
    bid_price:20000000
},{
    name:"King Kohli",
    age:35,
    email:"kohli@gamil.com",
    bid_price:110000000
},{
    name:"Sir Jadeja",
    age:34,
    email:"sir@gamil.com",
    bid_price:50000000
},{
    name:"Hit-man",
    age:36,
    email:"hit@gamil.com",
    bid_price:80000000
}])
db.TT.insertMany([{
    name:"Sachin Tendulkar",
    age:45,
    email:"tendu@gamil.com",
    bid_price:10000000
},{
    name:"MS Dhoni",
    age:40,
    email:"dhoni@gamil.com",
    bid_price:70000000
},{
    name:"Suresh Raina",
    age:40,
    email:"raina@gamil.com",
    bid_price:20000000
},{
    name:"King Kohli",
    age:35,
    email:"kohli@gamil.com",
    bid_price:110000000
},{
    name:"Sir Jadeja",
    age:34,
    email:"sir@gamil.com",
    bid_price:50000000
},{
    name:"Hit-man",
    age:36,
    email:"hit@gamil.com",
    bid_price:80000000
}])

- list all collections in sports database.
show collections

- rename `TT` collection to `tennis`.

- create a capped collection called `khokho` which should have max 3 documents.

  Try inserting more than 3 and see what happens?

- check whether a collection is capped or not?

- drop all documents from `football` collection.

- delete cricket collection completely.

- delete sports database.

- check which database you are connected to ?

- connect to test database
