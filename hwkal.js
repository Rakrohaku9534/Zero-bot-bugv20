// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Samp Nipu Apalagi Lari Dari Tanggung Jawab

// Base Haikal Hw Mods : Copyan Dari Base Dika


const fs = require('fs')
const chalk = require('chalk')

global.gr = 'https://chat.whatsapp.com/HZ0XzL2hYl5EtKgz15Qdfv'
global.ig = '@fahrul_mt' // ubah aja
global.email = 'rakrohaku@gmail.com' //serah
global.region = 'indonesia' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'Fahrul' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['6285786539008'] // ubah aja pake nomor lu
//==========================BY Hw Mods=======================//
global.keyopenai = `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`
//====================BY Hw Mods=============================//
global.botname = 'ZERO MD' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = 'ZERO MD' // ubah aja ini nama sticker
global.author = '© fahrul' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'haikal' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.anticall = true
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})