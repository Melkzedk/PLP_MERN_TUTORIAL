const { connectDB, mongoose } = require('./db');
const Task = require('./Model/tasks');
const User = require('./Model/User');

async function main() {
    await connectDB();

    // Clear existing data
    await Task.deleteMany({});
    await User.deleteMany({});

    const users = await User.insertMany([
        { name: 'Alice', email: 'alice@example.com', role: 'admin' },
        { name: 'Bob', email: 'Bob@gmail.com', role: 'user' },
        { name: 'Charlie', email: 'charlie@gmail.com', role: 'user' },
    ]);

    const tasks = await Task.insertMany([
        { title: 'Task 1', status: 'pending', owner: users[0]._id },
        { title: 'Task 2', status: 'in-progress', owner: users[1]._id },
        { title: 'Task 3', status: 'completed', owner: users[2]._id },
    ]);

    console.log('Database seeded successfully');
    await mongoose.disconnect();
}

main();