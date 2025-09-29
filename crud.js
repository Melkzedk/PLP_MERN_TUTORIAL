const { connectDB, mongoose } = require('./db');
const Task = require('./Model/tasks');
const User = require('./Model/User');

async function main() {
    await connectDB();

    //CREATE
    //const john = await User.create({ name: 'John Kimani', email: 'johnkimani@gmail.com' });
    //console.log('User Created:', john);

    //READ
    //const users = await User.find();
    //console.log('All Users:', users);

    //UPDATE
    await User.updateOne({ email: 'johnkimani123@gmail.com' }, {role: 'admin'});
    console.log('User Updated');
}

main();