const tmi = require("tmi.js");
const dateFormat = require("dateformat");
const config = require("./config");

const {username, token, channels} = config

if (!username) {
    console.error("[ERROR] You need to provide a username!");
    return;
}

if (!token) {
    console.error("[ERROR] You need to provide a client token!");
    return;
}

if (!channels || channels.length < 1) {
    console.error("[ERROR] You need to provide at least one channel!");
    return;
}

const user = username.toLowerCase();

const tmiOptions = {
    connection: {
        reconnect: true,
        secure: true
    },
    identity: {
        username: user,
        password: token
    },
    channels: channels
}

const getCurrentTime = () => {
    const d = new Date();
    return `[${dateFormat(d, "yyyy-mm-dd HH:MM:ss")}]`;
}

const client = new tmi.client(tmiOptions);
client.connect();

client.on("logon", () => {
    console.log(`${getCurrentTime()} Connecting to the Twitch server as user "${user}"...`);
});

client.on("join", (channel, username) => {
    if (username == user) {
        console.log(`${getCurrentTime()} Joined channel "${channel.substring(1)}".`);
    }
});

client.on("subgift", (channel, username, _, recipient) => {
    if (recipient.toLowerCase() == user) {
        console.log(`${getCurrentTime()} Received a subscription gift from user "${username}" in channel "${channel.substring(1)}"!`);
    }
});

client.on("reconnect", () => {
    console.log(`${getCurrentTime()} Trying to reconnect to the Twitch server...`);
});

client.on("part", (channel, username) => {
    if (username == user) {
        console.log(`${getCurrentTime()} Disconnected from channel "${channel.substring(1)}".`);
    }
});

client.on("disconnected", (reason) => {
    console.log(`${getCurrentTime()} Disconnected from the Twitch server. Reason: "${reason}".`);
});
