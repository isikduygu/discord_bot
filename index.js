const Discord = require('discord.js');
const { Client, MessageAttachment } = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Selam beni duygus yarattı ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.toLocaleLowerCase() === 'dua') {
    msg.channel.send('Elhamdulillâhi rabbilalemin, Errahmânirrahim, Mâliki yevmiddin, İyyâke na budu Ve iyyâke neste în, İhdinessirâtal mustakîm, Sirâtallezine en amte aleyhim Ğayrilmağdûbi aleyhim ve leddâllîn. Amin');
  }
  if (msg.content.toLocaleLowerCase() === 'akıncım') {
    msg.channel.send("Duygu seni çok seviyor");
  }
  if (msg.content.toLocaleLowerCase() === 'sorry') {
    // Create the attachment using MessageAttachment
    const attachment = new MessageAttachment('https://c.tenor.com/AWTgyXPeMCAAAAAC/sorry.gif');
    // Send the attachment in the message channel
    msg.channel.send(attachment);
  }
  if (msg.content.toLocaleLowerCase() === 'goat') {
    // Create the attachment using MessageAttachment
    const attachment = new MessageAttachment('https://ichef.bbci.co.uk/news/640/cpsprodpb/D43D/production/_121933345_gettyimages-1236968531.jpg');
    // Send the attachment in the message channel
    msg.reply(attachment);
  }
  if (msg.content.toLocaleLowerCase() === 'messi') {
    // Create the attachment using MessageAttachment
    const attachment = new MessageAttachment('https://cdn.cimri.io/image/1000x1000/akayakltekobattalpkovas_256496340.jpg');
    // Send the attachment in the message channel
    msg.reply(attachment);
  }
  if (msg.content.toLocaleLowerCase() === 'slm') {
    if (msg.member.user.tag === 'Mami JK#4236') {
      msg.reply("sus bitch");
    }
    if(msg.member.user.tag === 'zugzwang#4651'){
      msg.reply("sus bitch");
    }
    if(msg.member.user.tag === 'Akinowski#3900'){
      msg.reply("sus bitch");
    }
    if(msg.member.user.tag === 'zeynep#8573'){
      msg.reply("buyrun efendim");
    }
    if(msg.member.user.tag === 'Duygus#9778'){
      msg.reply("buyrun efendim");
    }
    if(msg.member.user.tag === 'Onur of Rivia#0173'){
      msg.reply("buyrun efendim");
    }
  }
  if (msg.content.toLocaleLowerCase() === 'oğuzhan özyakup') {
    msg.channel.send("çöp");
  }
  if (msg.content.toLocaleLowerCase() === 'ortiş') {
    msg.channel.send("Duygu seni çok seviyor");
  }
  if (msg.content.toLocaleLowerCase() === 'burak espri yaptı') {
    msg.channel.send("evet");
  }
  if (msg.content === "31") {
    msg.reply("JDSFHKDJHFDJGFLDKGNJFGDKJHFJ");
  }
  if (msg.content.toLocaleLowerCase() === "hg") {
    msg.channel.send("hb");
  }
  if (msg.content.toLocaleLowerCase() === "hoşgeldin çizme") {
    msg.channel.send("hoşbuldum canlarım");
  }
  if (msg.content.toLocaleLowerCase() === "çizme komik bir şey söyle") {
    msg.reply("Hakkı Bulut");
  }
  if (msg.content.toLocaleLowerCase() === "zeynepciğim") {
    msg.channel.send("Burak seni çok seviyor");
  }
  if (msg.content.toLocaleLowerCase() === "ablacım") {
    msg.channel.send("Zeynep seni çok seviyor");
  }
  if (msg.content.toLocaleLowerCase() === "max") {
    msg.channel.send("sus beeee");
  }
  if (msg.content.toLocaleLowerCase() === "burakcığım") {
    msg.channel.send("Zeynep seni çok seviyor");
  }
  if (msg.content.toLocaleLowerCase() === "abiş") {
    msg.channel.send("Bu grup seni çok seviyor");
  }
  if (msg.content.toLocaleLowerCase() === "görüşürüz") {
    msg.channel.send("görüşürüz canlarım sizi çok seviyorum");
  }
});
client.login("token")
