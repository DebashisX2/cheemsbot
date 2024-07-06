
if (isCommand && !isUser) {
    xeonverifieduser.push(sender)
    fs.writeFileSync('./src/data/role/user.json', JSON.stringify(xeonverifieduser, null, 2))
    }
            
            switch (isCommand) {
case 'update':{
	const slides = [
    [
        'https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png', // Image URL
        '', // Title
        `Susbcribe Developer's YouTube Channel To Get Updates`, // Body message
        botname, // Footer message
        'Visit', // Button display text
        'https://youtube.com/@dgxeon', // Command (URL in this case)
        'cta_url', // Button type
        'https://youtube.com/@dgxeon' // URL (used in image generation)
    ], 
    [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/1024px-Telegram_2019_Logo.svg.png', // Image URL
        '', // Title
        `Susbcribe Developer's Telegram Channel To Get Updates`, // Body message
        botname, // Footer message
        'Visit', // Button display text
        'http://t.me/xeonbotinc', // Command (URL in this case)
        'cta_url', // Button type
        'http://t.me/xeonbotinc' // URL (used in image generation)
    ], 
    [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/360px-GitHub_Invertocat_Logo.svg.png', // Image URL
        '', // Title
        `Follow Developer On GitHub`, // Body message
        botname, // Footer message
        'Visit', // Button display text
        'https://github.com/DGXeon', // Command (URL in this case)
        'cta_url', // Button type
        'https://github.com/DGXeon' // URL (used in image generation)
    ], 
    [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/264px-Instagram_logo_2016.svg.png', // Image URL
        '', // Title
        `Follow Developer On Instagram`, // Body message
        botname, // Footer message
        'Visit', // Button display text
        'https://www.instagram.com/unicorn_xeon13', // Command (URL in this case)
        'cta_url', // Button type
        'https://www.instagram.com/unicorn_xeon13' // URL (used in image generation)
    ], 
    [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1024px-WhatsApp.svg.png', // Image URL
        '', // Title
        `Contact Developer On WhatsApp`, // Body message
        botname, // Footer message
        'Visit', // Button display text
        'https://Wa.me/919339619072', // Command (URL in this case)
        'cta_url', // Button type
        'https://Wa.me/919339619072' // URL (used in image generation)
    ], 
];

const sendSlide = async (jid, title, message, footer, slides) => {
    const cards = slides.map(async slide => {
        const [
            image,
            titMess,
            boMessage,
            fooMess,
            textCommand,
            command,
            buttonType,
            url,
        ] = slide;
        let buttonParamsJson = {};
        const buttonParamsJsonString = JSON.stringify(buttonParamsJson);
        return {
            body: proto.Message.InteractiveMessage.Body.fromObject({
                text: boMessage,
            }),
            footer: proto.Message.InteractiveMessage.Footer.fromObject({
                text: fooMess,
            }),
            header: proto.Message.InteractiveMessage.Header.fromObject({
                title: titMess,
                hasMediaAttachment: true,
                ...(await prepareWAMessageMedia(
                    { image: { url: image } },
                    { upload: XeonBotInc.waUploadToServer },
                )),
            }),
            nativeFlowMessage:
                proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                    buttons: [
                        {
                            name: buttonType,
                            buttonParamsJson: buttonParamsJsonString,
                        },
                    ],
                }),
        };
    });
    
    const msg = generateWAMessageFromContent(
        jid,
        {
            viewOnceMessage: {
                message: {
                    messageContextInfo: {
                        deviceListMetadata: {},
                        deviceListMetadataVersion: 2,
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                        body: proto.Message.InteractiveMessage.Body.fromObject({
                            text: message,
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.fromObject({
                            text: footer,
                        }),
                        header: proto.Message.InteractiveMessage.Header.fromObject({
                            title: title,
                            subtitle: title,
                            hasMediaAttachment: false,
                        }),
                        carouselMessage:
                            proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                                cards: await Promise.all(cards),
                            }),
                            contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363222395675670@newsletter',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
                    }),
                },
            },
        },
        { quoted: m},
    );
    await XeonBotInc.relayMessage(jid, msg.message, {
        messageId: msg.key.id,
    });
};
// Call the function with example parameters
sendSlide(m.chat, 'removed you', ownername, botname, slides);
}}







if (m.sender != botnumber)
    {
        if (m.sender == ownernumber)
        {
            await XeonBotInc.sendMessage(m.chat, { react: { text: `${owner_react}`, key: m.key }})
        }
        else if (m.sender != ownernumber)
        {
            if(isCommand)
            {
                await XeonBotInc.sendMessage(m.chat, { react: { text: `⌛`, key: m.key }})
            }
            else 
            {
                await XeonBotInc.sendMessage(m.chat, { react: { text: `${randomreact}`, key: m.key }})
            }
        }
    }
else if (m.sender == botnumber)
    {
        await XeonBotInc.sendMessage(m.chat, { react: { text: `🤖`, key: m.key }})
    }