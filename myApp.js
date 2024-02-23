require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let Person;

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: Number,
  favoriteFoods: [String]
});

Person = mongoose.model('Person', personSchema);

const createAndSavePerson = (done) => {
  var samplePerson = {
    name: 'John Doe',
    age: 30,
    favoriteFoods: ['Ice Cream', 'Grapes', 'Bread']
  }

  let document = new Person(samplePerson);

  document.save(function(err, data) {
    if (err) {
      return console.error(err);
    }
    done(null, data);
  });
};

var samplePersonArr = [
  { name: 'John Doe', age: 30, favoriteFoods: ['Ice Cream', 'Grapes', 'Bread'] },
  { name: 'Jane Doe', age: 15, favoriteFoods: ['Toast', 'Milkshake'] },
  { name: 'Some Person', age: 45, favoriteFoods: ['Steak', 'Spaghetti', 'Cake'] }
];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function(err, data) {
    if (err) {
      return console.error(err);
    }
    done(null, data);
  }); 
};

const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, function(err, people) {
    if (err) {
      return console.error(err);
    }
    done(null, people);
  });
};

const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, function(err, person) {
    if (err) {
      return console.error(err);
    }
    done(null, person);
  });
};

const findPersonById = (personId, done) => {
  Person.findOne({ _id: personId }, function(err, person) {
    if (err) {
      return console.error(err);
    }
    done(null, person);
  });
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
