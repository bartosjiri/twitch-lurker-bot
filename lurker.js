var tmi = require("tmi.js");
var config = require("./config");

if (config.username && config.token && config.channels) {
    var channels = [];
    for (i = 0; i < config.channels.length; i++) {
        channels.push("#" + config.channels[i]);
    };

    var options = {
        connection: {
            reconnect: true,
            secure: true
        },
        identity: {
            username: config.username,
            password: config.token
        },
        channels: channels
    };

    const getCurrentTime = () => {
        var currentDate = new Date();
        var dateTime = "[" + currentDate.getFullYear() + "-" + (("0" + (currentDate.getMonth() + 1)).slice(-2)) + "-" + (("0" + currentDate.getDate()).slice(-2)) + " " + (("0" + currentDate.getHours()).slice(-2)) + ":" + (("0" + currentDate.getMinutes()).slice(-2)) + ":" + (("0" + currentDate.getSeconds()).slice(-2)) + "] ";
        return dateTime;
    };
    
    var client = new tmi.client(options);
    client.connect();

    client.on("logon", () => {
        console.log(getCurrentTime() + "Connected to the Twitch server as " + config.username + ".");
    });
    client.on("join", (channel, username) => {
        if (username == config.username) {
            console.log(getCurrentTime() + "Joined " + channel + ".");
        }
    });
    client.on("subgift", (channel, username, streakMonths, recipient) => {
        if (recipient == config.username) {
            console.log(getCurrentTime() + "Received a subscription gift from user " + username + " in " + channel + "!");
        }
    });
    client.on("reconnect", () => {
        console.log(getCurrentTime() + "Trying to reconnect to the Twitch server...");
    });
    client.on("part", (channel, username) => {
        if (username == config.username) {
            console.log(getCurrentTime() + "Disconnected from " + channel + ".");
        }
    });
    client.on("disconnected", (reason) => {
        console.log(getCurrentTime() + "Disconnected from the Twitch server. Reason: " + reason + ".");
    });
} else {
    console.error("You need to fill out all fields in the config file.");
};
