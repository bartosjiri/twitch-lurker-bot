# Twitch Lurker Bot

A simple script to join multiple Twitch.tv channels' chats as a user account.

## Description

### What to use it for

The primary purpose of this script is to increase your account activity in channels' chat-related actions while not actually watching the stream at the given moment, for example:
- Increase your chances of receiving a community sub gift
- Gain points in various watchtime-related point systems
- And more...

### What to keep in mind

Even though the script allows you to join a large number of channels, please, consider using it only for channels you would spend your time in nonetheless. Running the script presents you an advantage compared to other regular users, so use it only for channels you actively support and watch.

### How it works

The script is based on [tmi.js](https://github.com/tmijs/tmi.js), a Node.js package for the Twitch Messaging Interface. Once you provide an authorization token to your account and a list of channels, the script joins chat rooms for these channels with your account. It does not connect to the actual stream and therefore it does not count towards the viewer count - usage of this script cannot be qualified as viewer botting.

## Instructions

### Installation

1. Download and install Node.js on your machine:

	[https://nodejs.org/en/download/](https://nodejs.org/en/download/)

2. Clone or download the Twich Lurker Bot script to your desired location:

	```
    git clone git@github.com:bartosjiri/twitch-lurker-bot.git
    ```
    
3. Install the script dependencies:

	```
    npm install
    ```
    
4. Obtain the authentication token for your Twitch.tv account:

	[https://twitchapps.com/tmi/](https://twitchapps.com/tmi/)
    
5. Provide your account username, authentication token and list of channels to join in the `config.js` config file. Example:
	```
    module.exports = {
      username: "TheBiggestFan123",
      token: "oauth:m81v8urm9qwj6ceo0vapfmn8mepj64",
      channels: [
        "FamousStreamer",
        "PlayerOne",
        "FunnyGuy"
      ]
    };
    ```

### Usage

1. To start the script, navigate to the location of `lurker.js` file and run:

    ```
    node lurker.js
    ```
    
    *Tip: If you don't want to keep your terminal window open while running the script, you can try running the script in a [detached process](https://www.google.com/search?q=how+to+detach+a+process).*


## Disclaimer

Use the script at your own risk, the repository owners and/or contributors are not responsible for any actions taken as a result of installing, setting up or running this script. Never show your authentication token to other people or store it at publicly available locations. Always be sure to follow Twitch.tv's [Terms of Service](https://www.twitch.tv/p/legal/terms-of-service/).
