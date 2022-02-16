import mongoose from 'mongoose';

const DATABASE_URL = process.env.DATABASE_URL;

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function mongoConnect () {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            useUnifiedTopology: true,
            useNewUrlParser: true
        };

        cached.promise = mongoose.connect(DATABASE_URL, opts).then(mongoose => {
            return mongoose;
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;
}

export default mongoConnect;