import { ShouwDB } from '..';

const db = new ShouwDB({
    type: 'sqlite',
    database: 'dist/__test__/test.sqlite'
});

async function main() {
    await db.set({
        key: 'test',
        value: JSON.stringify({
            meow: 'meow'
        })
    });

    console.log(
        await db.get({
            key: 'test'
        })
    );
}

main();
