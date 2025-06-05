import { ShouwDB } from '..';

// initialize the database
const db = new ShouwDB({
    type: 'sqlite',
    database: 'dist/__test__/test.sqlite'
});

// main function
async function main() {
    // set a value
    await db.set({
        key: 'test',
        table: 'main',
        value: JSON.stringify({
            meow: 'meow'
        })
    });

    // get a value
    console.log(
        await db.get({
            key: 'test',
            table: 'main'
        })
    );
}

main();
