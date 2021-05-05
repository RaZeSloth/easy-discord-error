# Discord error messages made easy

## Installation
```bash
npm install easy-discord-error --save
```

## Usage with Discord.js
```js
const EDE = require("easy-discord-error");
const Discord = require("discord.js");
const bot = new Discord.Client();

bot.once("ready", () =>{

console.log("Test bot is on!");

})


bot.on("message", async(msg) =>{
    if(msg.content.startsWith("error")){
        try{
         NOTDEFINED;
        }catch(e){
            EDE.errorHandler(e, msg, "777474453114191882", bot);// The "777474453114191882" is the owner's id
        }
        
    }
});

bot.login("TOKEN");
```

## Output
That's what you'll see in your DMs!



![without embed](https://cdn.discordapp.com/attachments/800344177774559232/827500586986897440/unknown.png)

If you use the embed version(`EDE.embedErrorHandler`)

![embed](https://cdn.discordapp.com/attachments/826074155559682060/827887186014765076/unknown.png)


## Usage with Eris
_coming soon_

## Options
`const { options } = require("discord-error-handler");`

| Options        | Function variables                 |       Description        |
| -------------  |:----------------------------------:|:------------------------:|
|  errorHandler  | error, message, id, Discord_client |  send the error as a msg |
|embedErrorHandler|error, message, id, Discord_client |Send the error as an embed|

# stuck?

Get in touch with me!

My Discord (RaZe#2841)

[Discord server](https://discord.gg/gSdg8FCxHf)