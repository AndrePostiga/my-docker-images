const createApp = require('./index');

const PORT = 3000;

const listenApp = async () => {
    const app = await createApp();

    return app.listen(PORT, () => {
        // eslint-disable-next-line no-console
        console.log(`Server running on port ${PORT}`);
    });
};

listenApp();
