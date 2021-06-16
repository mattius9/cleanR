
require('dotenv').config();
require('./config/database');
const service1={
    name: "Tier 1",
    price: 10,
    minimumHours: 4
}
const service2={
    name: "Tier 2",
    price: 20,
    minimumHours: 3
}
const service3={
    name: "Tier 3",
    price: 50,
    minimumHours: 2
}
const user1= {
    name: 'testUser',
    email: 'test@test.com',
    displayName: 'test',
    joined: Date.now(),
    password:"password",
    roles:[{role:'client'}],
    location:{
        address:"290 Bremner Blvd",
        city: "Toronto",
        region: "Ontario",
        country:"Canada",
        postalCode:"M5V 3L9"
    },
    latitude:43.642567,
    longitude:-79.387054,
}

const user2 = {
    name: 'clientUser',
    email: 'client@test.com',
    displayName: 'Client Only',
    joined: Date.now(),
    password:"password",
    roles:[{role:'client'}],
    location:{
        address:"24 Venn Crescent",
        city: "York",
        region: "Ontario",
        country:"Canada",
        postalCode:"M6M 1S4"
    },
    latitude:43.691390,
    longitude:-79.466690,
}


const user3 = {
    name: 'agentUser',
    email: 'agent@test.com',
    displayName: 'Agent Only',
    joined: Date.now(),
    services:[service1, service2, service3],
    password:"password",
    roles:[{role:'agent'}],
    location:{
        address:"100 King St W",
        unit:"CM5",
        city: "Toronto",
        region: "Ontario",
        country:"Canada",
        postalCode:"M5H 1T1"
    },
    latitude:43.649790,
    longitude:-79.382480,
}
const user4 = {
    name: 'dualUser',
    email: 'doubleAgent@test.com',
    displayName: 'Chanel',
    joined: Date.now(),
    password:"password",
    services:[service1, service2, service3],
    roles:[{role:'agent'},{role:'client'}],
    location:{
        address:"347 Lynnwood Dr",
        city: "Oakville",
        region: "Ontario",
        country:"Canada",
        postalCode:"L6H 1M7"
    },
    latitude:43.4687395,
    longitude:-79.6907081,
}
const user5={
    name: 'doubleAgent',
    email: 'agent2@test.com',
    displayName: 'WhichSide?',
    services:[service1, service2, service3],
    joined: Date.now(),
    password:"password",
    roles:[{role:'agent'}],
    location:{
        address:"385 Fairway Rd S",
        unit:"205",
        city: "Kitchener",
        region: "Ontario",
        country:"Canada",
        postalCode:"N2C 2N9"
    },
    latitude:43.42013,
    longitude:-80.438676,
}
const User = require('./models/user');

(async function() {
    await User.deleteMany({});
    const users = await User.create([user1, user2, user3, user4, user5])

//   await User.deleteMany({});
console.log(users)

  process.exit();

})();