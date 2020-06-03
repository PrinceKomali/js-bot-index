const Discord = require('discord.js')
const client = new Discord.Client();
const auth = require('./auth2.json');
const Canvas = require('canvas');
	//var ctx = canvas.getContext("2d");

client.on('ready', () => {
  	
	
	   client.user.setActivity("(insert status here)", {
   
	  type: "STREAMING",
	  url: "https://www.twitch.tv/komali09"
	});
	console.log(`Logged in as ${client.user.tag}!`);
  
});

client.on('message', message => {
		//GENERAL SETUP =========================================================================
		const { attachments, content, guild } = message;
		if(message.channel.type != "dm"){
		var emojis = message.guild.emojis.cache.map(e=>e.toString());
		}
		//HELP PLEASE KEEP UPDATING =============================================================================================================
		if (message.content === "!help") {

			var cmds1 = "!hi/!hello: Makes the bot say hi>!bye/!goodbye: Makes the bot say goodbye>!meow/!squeak: just do it, it\'s great>!hype/!yay: PogChamp"
			var cmds2 = ">!sd/!selfdestruct: Initiates the self destruct sequence>!ps/!pscs/!ptest: Discord.js is better than Nitro>!slots: Spin to Win"
			var cmds3 = ">!minislots: slots but it's cuter>!emote: use any emote from servers the bot is in (do !emote help)>!cmd: Lets you run a discord.js command>!betacmd: Allows usage of commands that don't really do anything (!embed, !task, etc.)"
			var cmds = cmds1 += cmds2 += cmds3


			const eembed = {
				"color": 0x00cc00,
				"title":"Komali Bot Commands:",
				"description": cmds.replace(/>/g, "\n"),

			}

			message.channel.send({ embed: eembed });
        }






		//RANDOM COMMANDS =========================================================================
	
		if(message.content.includes("<@!702572373261680796>")){
			message.channel.send("Pinged :0")
		}

		if (message.content === "!meow") {
			var catrand = Math.floor(Math.random() * 3);
			var gatos = ["<:stella:692397952362348546>", "<:luna:692401472352157787>", "<:sandy:712314876990586880>"]
			message.channel.send(gatos[catrand])
		}
		
		if (message.content === '!hi' || message.content === '!hello') {
			message.reply('Hello!');
		}

		if (message.content === '!good bye' || message.content === '!goodbye' || message.content === "!bye") {
			message.channel.send("Bye :wave:");
		}

		if (message.content === '!hype' || message.content === '!yay') {
			message.channel.send('<:POGGERS:691701513155772457><:POGGERS:691701513155772457><:POGGERS:691701513155772457><:POGGERS:691701513155772457><:POGGERS:691701513155772457><:POGGERS:691701513155772457><:POGGERS:691701513155772457><:POGGERS:691701513155772457>');
		}

		//KB1 COMMANDS ===============================================================================
		if (message.content === "!squeak") {
			var pigemotes = ['<:Penelope:709486066427756554>', '<:Posie:709474524403597402>']
			var srand = Math.floor(Math.random() * pigemotes.length)
			message.channel.send(pigemotes[srand])
        }
	
		if (message.content === "!sd" || message.content === "!selfdestruct"){
			function print(str) {
				message.channel.send(str);
			}
			print("Initiating Self Destruct");
			setTimeout(() => {
				print("3");
			}, 1000);
			setTimeout(() => {
				print("2");
			}, 2000);
			setTimeout(() => {
				print("1");
			}, 3000);
			/*setTimeout(() => {
				message.channel.send('error')
				.then(message => {
					message.delete({ timeout: 100 })
				})
            }, 4000)*/
			setTimeout(() => {
				print("```at users\\Komali\\data\\KomaliBot\\source.zip\\commands\\selfdestruct\\raw\.js \n \[ERROR\] CODE_ID 1A8358HK5 	\n        at line 323532:132 \n        function self_destruction not found \n        unreferenced character \"$\" in script at Line 284619:1\n        invalid variable \"sequence\" at Line 3:142\n        function aborted \n \[\/ERROR\]```");
			}, 4700);
		}
	


		//WEIRD STUFF =========================================================================
		if(message.content === "!pscs"){
			message.channel.send("<a:PSCS:710494810603257907>")
			message.delete()
		}
		if(message.content === "!ptest"){
			message.channel.send("<a:SCSP:710996674641658022><a:PSCS:710494810603257907><a:SCSP:710996674641658022><a:PSCS:710494810603257907><a:SCSP:710996674641658022><a:PSCS:710494810603257907>")
			message.channel.send("<a:PSCS:710494810603257907><a:SCSP:710996674641658022><a:PSCS:710494810603257907><a:SCSP:710996674641658022><a:PSCS:710494810603257907><a:SCSP:710996674641658022>")
			message.channel.send("<a:SCSP:710996674641658022><a:PSCS:710494810603257907><a:SCSP:710996674641658022><a:PSCS:710494810603257907><a:SCSP:710996674641658022><a:PSCS:710494810603257907>")
			message.channel.send("<a:PSCS:710494810603257907><a:SCSP:710996674641658022><a:PSCS:710494810603257907><a:SCSP:710996674641658022><a:PSCS:710494810603257907><a:SCSP:710996674641658022>")

		}




		if(message.content.startsWith("!pscs ")){
			var pstr = message.content.split(/ (.+)/)[1];
			var psstr ="";
			if(isNaN(pstr) || pstr < 1){
				pstr = 1
			}
			if(pstr > 74){
				pstr = 74
			}
			for(i = 0; i < pstr; i++){
					psstr = psstr + "<a:PSCS:710494810603257907>"
				}
			message.channel.send(psstr)
			message.delete()
		}

		if (message.content === "!ps") {
			message.channel.send("<a:ps:710497337893453907>")
			message.delete()
        }


		if(message.content.startsWith("!ps ")){
			var pstr = message.content.split(/ (.+)/)[1];
			var psstr ="";
			if(isNaN(pstr) || pstr < 1){
				pstr = 1
			}	
			if(pstr > 75){
				pstr = 75
			}
			for(i = 0; i < pstr; i++){
					psstr = psstr + "<a:ps:710497337893453907>"
				}
			message.channel.send(psstr)
			message.delete()
		}




		
		//SLOTS AND SLOTZ =========================================================================

		var splitMessage = message.content.split(" ");
		if(splitMessage[0] === '!slots' && message.channel.type != "dm") {
				var i;
				var slotStr = "";
				var slotRepeat = splitMessage[1];
				if (isNaN(slotRepeat) || slotRepeat < 2){
  					slotRepeat = 3;
  				}
				if (slotRepeat > 50){
					slotRepeat = 50;
				}
				for(i = 0; i < slotRepeat; i++){
					slotStr = slotStr + emojis[Math.floor(Math.random() * emojis.length)]
				}
				message.channel.send(slotStr)
				message.channel.send("Please Play Again!");
			}





		if(splitMessage[0] === '!slotz' && message.channel.type != "dm"){
			var slotZtr = "";
			var zlotRepeat = splitMessage[1];
			if (isNaN(zlotRepeat) || zlotRepeat < 2){
  					zlotRepeat = 3;
  				}
				if (zlotRepeat > 50){
					zlotRepeat = 50;
				}
				var zlotRand = Math.floor(Math.random() * emojis.length);

				for(i = 0; i < zlotRepeat; i++){
					slotZtr = slotZtr + emojis[zlotRand]
				}
				message.channel.send(slotZtr)
				message.channel.send("Please Play Again!");
			
		}




		if((splitMessage[0] === '!slotz' || splitMessage[0] === '!slots') && message.channel.type == "dm"){
			message.channel.send("Sorry, Slots is not available in DMs");
			}





		//MESSAGES (NOT REALLY USED ANYMORE) ==============================================================
	
		if(splitMessage[0] === '!message' && message.channel.id == "702592687689433119"){
			var m = message.content.split(/ (.+)/)[1];
			var mstr = m.split(/ (.+)/)[1];
			client.channels.cache.get(splitMessage[1].replace("<","").replace("#","").replace(">","")).send(mstr);
		}


		//CMD =========================================================================




		if (splitMessage[0] === '!cmd') {
		//var ROrole = message.guild.roles.cache.find(role => role.name === "Race Organizer");
		//var AdminRole = message.guild.roles.cache.find(role => role.name === "Admin");
		var KomaliId = 327879060443234314;
		var c = message.content.split(/ (.+)/)[1];
		if(message.content.includes("client.destroy()") && (message.author.id != KomaliId/* && message.member.roles.has(ROrole.id) && message.member.roles.has(AdminRole.id)*/)){
		message.channel.send("Only Komali can use this command!");
		}
		else{
		try {
			eval(c);
		} catch (err) {
			message.channel.send('Invalid Function')
			///console.log(err)
			str = err
			const errembed = {
			//"title" : mslotStr,
			"color": 0x00cc00,
			"footer" :{
			"text" : str.toString().replace(/(?:\r\n|\r|\n)/g, ' '),
			}
		}

		message.channel.send({ embed: errembed});
		//message.channel.send(err.toString())
	}}
		}


		//BETACMD =========================================================================

		if (splitMessage[0] === "!betacmd") {
			//splitMessage = splitMessage[]
			//console.log(splitMessage[2])
			if (splitMessage[1] === '!embed') {
				var e = message.content.split(/ (.+)/)[1];
				e = e.split(/ (.+)/)[1]
				if (e.includes("0x")) {
					e = e.split(/ (.+)/)[1];
					var col = splitMessage[2]
				}
				else {
					col = "0x33ff33";
				}
				const eembed = {
					"color": col,
					"title": e,

				}
				message.channel.send({ embed: eembed });
				message.delete({ timeout: 100 });
			}

			if (splitMessage[1] === "!task" && !(message.content.split(/ (.+)/)[1] === "!task" || message.content.split(/ (.+)/)[1] === "!task ")) {
				var t = message.content.split(/ (.+)/)[1];
				t = t.split(/ (.+)/)[1]

				var img = message.attachments.size ? { files: message.attachments.array() } : "";

				//==========================================================
				const embed1 = {
					//"title": "test",
					//"title": "TASK:" + task.replace(/>/g, "\n"),

					"color": 0x00cc00,
					author: {
						name: 'Komali Bot',
						icon_url: 'https://cdn.discordapp.com/app-icons/702572373261680796/48a86cc96ed8af944505f44765bca6c7.png?size=128',
						//	url: 'https://discord.js.org',
						/*"header": {
						  "icon_url": "https://cdn.discordapp.com/app-icons/702572373261680796/48a86cc96ed8af944505f44765bca6c7.png?size=128",
						  "text": "hi"
						},*/
					},
					fields: [
						{
							name: 'Task:',
							value: "**" + t.replace(">", '').replace(/>/g, "\n") + "**",
						},
						{
							name: 'Submitting:',
							value: "Please react to this message with anything if you plan to submit!",
						},
					],

				};
				message.channel.send({ embed: embed1 });
				message.channel.send(img);
				message.delete({ timeout: 1000 });


			}
			if (splitMessage[1] === "!img") {
				var img = message.attachments.size ? { files: message.attachments.array() } : "";
				message.channel.send(img);
				message.delete({ timeout: 1000 });
			}
			if (message.splitMessage[1] === "!imgtest") {

			}

			function loadImage(src, onload) {

				var img = new Image();

				img.onload = onload;
				img.src = src;

				return img;

			}
		}


		//MINISLOTS(Z) =========================================================================

		if(splitMessage[0] === "!minislots"){
		//var pog = client.emojis.cache.find(emoji => emoji.name === "POGGERS") 
		//pog = "<:" + pog.name + ":" + pog + ">"
		var i;
				var mslotStr = "";
			
				for(i = 0; i < 3; i++){
					var randEmote = emojis[Math.floor(Math.random() * emojis.length)];
					mslotStr = mslotStr + randEmote + " ";
				};
		const pogembed = {
			"title" : mslotStr,
			"color": 0x00cc00,
			"footer" :{
			"text" : "Please Play Again!",
			}

			}
		message.channel.send({ embed: pogembed}); 
		}



		if(splitMessage[0] === "!minislotz"){

		var i;
				var mslotZtr = "";
				var mzlotRepeat = splitMessage[1];
				var randEmotez = emojis[Math.floor(Math.random() * emojis.length)];
				for(i = 0; i < 3; i++){
			    
					mslotZtr = mslotZtr + randEmotez + " ";
				};
		const pogembed = {
			"title" : mslotZtr,
			"color": 0x00cc00,
			"footer" :{
			"text" : "Please Play Again!",
			}

			}
		//console.log("https://cdn.discordapp.com/emojis/" + pog.id + ".png");
		//!cmd /var pog = client.emojis.cache.find(emoji => emoji.name === "POGGERS"); console.log("https://cdn.discordapp.com/emojis/" + pog.id + ".png");
		message.channel.send({ embed: pogembed}); 
		}

		//CHAT =========================================================================


		if(splitMessage[0] === "!chat"){
			var KomaliId = 327879060443234314;
			var liorID = 454356237614841870;
			if (message.author.id == KomaliId || message.author.id == liorID){
			message.channel.send(message.content.split(/ (.+)/)[1])
				
			}
			else{
				message.channel.send("Insufficient Permissions!")
			}
		}


		//LOG =========================================================================


		if(splitMessage[0] === '!log'){
			var e = message.content.split(/ (.+)/)[1];
			if(e.includes("0x")){
				e = e.split(/ (.+)/)[1];
				var col = splitMessage[1]
			}
			else {
				col = "0x33ff33";
			}
			const eembed = {
				"color" : col,
				"author": {
			name: 'Komali Bot',
			icon_url: 'https://cdn.discordapp.com/app-icons/702572373261680796/48a86cc96ed8af944505f44765bca6c7.png?size=128',
	
		},
				"footer" :{
			"text" : e.replace(/>/g,"\n"),
			},
		
			}
			message.channel.send({ embed: eembed});
			message.delete({ timeout: 100 });
		}


		//NITRO WORKAROUND :Kappa:  =========================================================================


		if(splitMessage[0] === "!emote"){
			if(splitMessage[3] !== "a"){
				splitMessage[3] = "";
			}
			if(splitMessage[1] === "help"){
			message.channel.send("emote `emote name` `emote id` `a (only if it is animated)`")
			}
			if(splitMessage[1] != "help") {
			message.channel.send("<" + splitMessage[3] + ":" + splitMessage[1] + ":" + splitMessage[2] + ">")
	}
	}

		//RANDOMIZE =============================================================================

		if(splitMessage[0] === "!randomize"){
			function shuffle(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex;

	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	  }

	    return array;
	    }
	    var arr = message.content.split(/ (.+)/)[1].split("");
		shuffle(arr);
		message.channel.send(arr.join(""));

		}

	
	
		if (splitMessage[0] === "!dm") {
			if (message.channel.id == "716060808886616104") {
				try {
					var msg = message.content.split(/ (.+)/)[1]
					client.users.cache.get(splitMessage[1].replace(/[\\<>@#&!]/g, "")).send(msg.split(/ (.+)/)[1]);
					message.channel.send("Message Sent!")
				} catch (err) {
					message.channel.send("Invalid Syntax")
				}

			}
			else {
				message.channel.send("This can only be used in #bot-dms in Komali Bot Headquarters")
			}
		}

		if (message.channel.type === "dm" && message.author.id != "702572373261680796") {
			const eembed = {
				"color": 0x00cc00,
				"author": {
					name: (message.author.tag.split("#"))[0],
					icon_url: message.author.avatarURL(),

				},
				"header": {
					"text":"test"
				},
				"description":message.content,
				"footer": {
					"text" : message.author.tag + ", " + message.author.id,
				}

			}
	
			client.channels.cache.get('716060808886616104').send({ embed: eembed });
		
    
			var submission = "";
			submission = attachments.size ? { files: attachments.array() } : " "
			if (attachments[0] !== undefined) {
				client.channels.cache.get('716060808886616104').send(submission)
			}
  
		}




});
	
	//});

	client.login(auth.token);
