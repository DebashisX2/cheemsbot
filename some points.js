 case 'tgl':{
              if (!m.isGroup) return XeonStickGroup()
                let me = m.sender
              let teks = `hello world\n`
              for (let mem of participants) {
                teks += `${themeemoji} @${mem.id.split('@')[0]}\n`
                }
                XeonBotInc.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)})

            }
            break

            contextInfo:{
              externalAdReply: {
                mentionedJid : participants.map(a => a.id),
                  showAdAttribution: true,
                  title: botname,
                  body: ownername,
                  thumbnail: XeonWlcm,
                  sourceUrl: fbprofile,
                  mediaType: 1,
                  renderLargerThumbnail: false

              }}