const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `
Source code / bot ini merupakan program open-source (gratis) yang ditulis menggunakan Javascript, kamu dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan atau menjual salinan dengan tanpa menghapus author utama dari source code / bot ini.

Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
- Source code / bot tidak menyimpan data anda di server kami.
- Source code / bot tidak bertanggung jawab atas perintah anda kepada bot ini.
- Source code / bot anda bisa lihat di https://github.com/ArugaZ/whatsapp-bot

Instagram: https://instagram.com/ini.arga/

Best regards, ArugaZ.`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textMenu = (pushname) => {
    return `
Hi, ${pushname}!

*JOIN GC BOT*
1. https://chat.whatsapp.com/FGpQw0yyafW9jqBLboQ6cf

2. https://chat.whatsapp.com/LQHINjwVtx31rXKKUt0Brx

    
Follow https://instagram.com/thoriqazzikra_
    
_also owner number_ : wa.me/62895334950905
    
Berikut adalah beberapa fitur yang ada pada bot ini!✨
    
*${prefix}stc*
*${prefix}ttp*
*${prefix}sgif*
*${prefix}stickergiphy*
*${prefix}stmg*
*${prefix}meme*
*${prefix}nulis*
*${prefix}quotemaker*
*${prefix}rate*
*${prefix}kapan*
*${prefix}apakah*
*${prefix}bisakah*
*${prefix}infosurah*
*${prefix}surah*
*${prefix}tafsir*
*${prefix}ALaudio*
*${prefix}jsolat*
*${prefix}nekopoi*
*${prefix}katakasar*
*${prefix}klasmen*
*${prefix}instagram*
*${prefix}ytmp4*
*${prefix}facebook*
*${prefix}artinama*
*${prefix}cekjodoh*
*${prefix}zodiak*
*${prefix}motivasi*
*${prefix}urgay*
*${prefix}images*
*${prefix}sreddit*
*${prefix}resep*
*${prefix}stalkig*
*${prefix}wiki*
*${prefix}cuaca*
*${prefix}chord*
*${prefix}lirik*
*${prefix}ss*
*${prefix}play*
*${prefix}movie*
*${prefix}whatanime*
*${prefix}aiquote*
*${prefix}doggo*
*${prefix}fakta*
*${prefix}fakboy*
*${prefix}katabijak*
*${prefix}quote*
*${prefix}brainly*
*${prefix}cerpen*
*${prefix}cersex*
*${prefix}puisi*
*${prefix}anime*
*${prefix}kpop*
*${prefix}memes*
*${prefix}tts*
*${prefix}translate*
*${prefix}resi*
*${prefix}covidindo*
*${prefix}ceklokasi*
*${prefix}shortlink*
*${prefix}bapakfont*
*${prefix}linkgc*
*${prefix}adminList*
*${prefix}ownergc*
*${prefix}me*
*${prefix}listban*
*${prefix}listblock*
*${prefix}gcinfo*
*${prefix}dewabatch*
*${prefix}howmuch*
*${prefix}mtk*
*${prefix}google*
*${prefix}ptl*
*${prefix}grupbot*
*${prefix}wpanime*
*${prefix}read*
*${prefix}getpic @tagmember*
*${prefix}randomhentai*
*${prefix}randomhug*
*${prefix}baka*
*${prefix}wallpaper*
*${prefix}wallpaper2*
*${prefix}loli*
*${prefix}lolinsfw*
*${prefix}waifu*
*${prefix}neko*
*${prefix}animeavatar*
*${prefix}santet*
*${prefix}nyenye*
*${prefix}saylist*
*${prefix}addsay*
*${prefix}say*
*${prefix}delsay*
*${prefix}listbacot*
*${prefix}addbacot*
*${prefix}bacot*
*${prefix}delbacot*
*${prefix}jadian*
*${prefix}mystat*
*${prefix}spamcall*
*${prefix}spamcall2*


Images :
*${prefix}ameliandani*
*${prefix}pictcogan*
*${prefix}pictcecan*
*${prefix}aesthetic*


Tentang Bot:
*${prefix}tnc*
*${prefix}donasi*
*${prefix}botstat*
*${prefix}ownerbot*
*${prefix}join*
 _-_-_-_-_-_-_-_-_-_-_-_-_-_
Owner Bot:
*${prefix}ban* - banned
*${prefix}bc* - promosi
*${prefix}leaveall* - keluar semua grup
*${prefix}clearall* - hapus semua chat
*${prefix}setstatus*
*${prefix}setpic*
*${prefix}screen*
*${prefix}bokep*
*${prefix}bokep2*
    
*Author    : Aruga Z*
*Owner BOT : Thoriq*
    
https://github.com/thoriqazzikra/whatsapp-bot2
    
Hope you have a great day!✨`
}
    
    /*
    Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.
    */
    
exports.textAdmin = () => {
    return `
⚠ [ *Admin Group Only* ] ⚠ 
Berikut adalah fitur admin grup yang ada pada bot ini!
*${prefix}add*
*${prefix}kick* @tag
*${prefix}promote* @tag
*${prefix}demote* @tag
*${prefix}infoall*
*${prefix}del*
*${prefix}mutegrup on/off*
*${prefix}seticon*
*${prefix}revoke link gc*
*${prefix}setgroupname*
*${prefix}resend*
*${prefix}antisticker on/off*
*${prefix}antilink on/off*
    
_-_-_-_-_-_-_-_-_-_-_-_-_-_
⚠ [ *Owner Group Only* ] ⚠
Berikut adalah fitur owner grup yang ada pada bot ini!
*${prefix}kickall*
*Owner Group adalah pembuat grup.*
`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini, untuk mendukung bot ini kamu dapat membantu dengan berdonasi dengan cara:

https://trakteer.id/arugabot

Doakan agar project bot ini bisa terus berkembang
Doakan agar author bot ini dapat ide-ide yang kreatif lagi

Donasi akan digunakan untuk pengembangan dan pengoperasian bot ini.

Terimakasih. -ArugaZ`
}
