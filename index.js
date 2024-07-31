const { AoiClient } = require("aoi.js");

const client = new AoiClient({
    token: "Discord Bot Token", //Token girin.
    prefix: "!", //Bir önek girin. 
    intents: ["MessageContent", "Guilds", "GuildMessages"],
    events: ["onMessage", "onInteractionCreate"],
    database: {
        type: "aoi.db",
        db: require("@aoijs/aoi.db"),
        dbType: "KeyValue",
        tables: ["main"],
        securityKey: "a-32-characters-long-string-here"
    }
});

// Hazır ping komutu
client.command({
    name: "ping",
    code: `Pong! $pingms`
});

client.loadCommands("./commands");

