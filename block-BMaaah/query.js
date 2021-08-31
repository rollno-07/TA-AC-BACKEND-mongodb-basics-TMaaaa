1.use blog
2.db.createCollection('articles')
3.db.articles.insertMany([{
    title: 'HTML',
  details: 'Fundamental to intemediate',
  author: {
    name: 'suraj',
    email: 'suraj@gmail.com',
    age: '28'
  },
  tags: ['js', 'mongo']
},{
    title: 'css',
  details: 'Fundamental to intemediate',
  author: {
    name: 'raj',
    email: 'raj@gmail.com',
    age: '27'
  },
  tags: ['css', 'mongo']
},{
    title: 'node',
  details: 'Fundamental to intemediate',
  author: {
    name: 'ravi',
    email: 'ravi@gmail.com',
    age: '23'
  },
  tags: ['js', 'express']
}])

4.db.articals.find({})

5.db.articals.find({_id:'jdnc6868hjbdc877'})

6.db.articals.find({title:"HTML"})

7.db.articals.find({name:'raj'})

8.db.articals.find({tags:["js"]})

9.db.articals.update({_id:"dncjb74927392"},{$set:{title:"HTML/css"}})

10.db.articals.update({title:"css"},{$set:{author:"niraj"}})

11.db.articals.update({},{$rename:{details:"Description"}},{multi:true})

12.db.articals.update({title:'HTML/css'},{$push:{tags:"mongo"}})

13.db.articals.update({title:"css"},{$inc:{'author.age': 5}})


14.db.articals.remove({_id:'bfhvb7483y482hfs8743'})

15.db.user.find({gender:'mail',sports:'cricket'})

16.db.user.update({name:'Steve Ortega'},{$push:{sports:'golf'}})

17.db.user.find({sports:{$in:['football','cricket']}})

18.db.user.find({name:/ri/i})