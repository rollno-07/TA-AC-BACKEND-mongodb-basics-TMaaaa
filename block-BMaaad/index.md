writeCode

Write command to

- List collections from a database.
ans:-show collections
- create a new collection in your country database which you created recently.
ans:-db.createrCollection('city')
Write code to:-

- crate a database named `weather`
ans:-use weather
- create a capped collection named `temperature` with maximum of 3 documents and try inserting more than 3 to see the result.
ans:-db.createCollection( "temperature", { capped: true, size: 1000,max:3} )

- create a simple collection named `humidity`
ans:-db.createCollection('humidity')
- check whether `temperature` collection is capped or not ?
ans:-db.collection.isCapped('temperature')
- Delete `humidity` collection and then the entire database(weather).
ans:-db.humidity.drop(),db.dropDatabase()
