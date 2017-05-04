const publish = require('./publish');

const args = require('argly')
    .createParser({
        '--message -m': {
            type: 'string',
            descriptions: 'Commit message for updating the static site.',
            defaultValue: 'updated static site'
        }
    })
    .onError((err) => {
        console.error(err);
        process.exit(1);
    })
    .parse();

publish(args);
