/**
 * 👑 ENTERPRISE WHATSAPP BOT CORE SYSTEM
 * 👤 Developer: Ravinu Lakshan (Bibile, Monaragala)
 * 🔞 Age: 20
 * 📞 Contact: +94768223718
 * 🚀 Version: 1.0.0 (Production)
 */

const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// ⚙️ INTERACTIVE CONFIGURATION
const OWNER_NUMBER = '94768223718'; // Country Code එකත් එක්ක ඔයාගේ නම්බර් එක

// 🛡️ INITIALIZE CLIENT WITH SERVERSIDE OPTIMIZATIONS
const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        executablePath: '/usr/bin/chromium',
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-accelerated-2d-canvas',
            '--no-first-run',
            '--no-zygote',
            '--single-process',
            '--disable-gpu'
        ]
    }
});

console.log('🔄 [SYSTEM] Initializing RAVI-MD Core Engine...');

// 📊 QR CODE GENERATOR EVENT
client.on('qr', (qr) => {
    console.clear();
    console.log('============================================================');
    console.log('⚠️  රවිනු, කරුණාකර ඔයාගේ WhatsApp එකෙන් මෙම QR එක ස්කෑන් කරන්න:');
    console.log('============================================================\n');
    qrcode.generate(qr, { small: true });
});

// 🎉 BOT READY CONTROLLER
client.on('ready', () => {
    console.clear();
    console.log('============================================================');
    console.log('   ____   ____ _______   __  __          _____ _    _   ');
    console.log('  |  _ \\ / __ \\__   __| |  \\/  |   /\\   / ____| |  | |  ');
    console.log('  | |_) | |  | | | |    | \\  / |  /  \\ | |    | |__| |  ');
    console.log('  |  _ <| |  | | | |    | |\\/| | / /\\ \\| |    |  __  |  ');
    console.log('  | |_) | |__| | | |    | |  | |/ ____ \\ |____| |  | |  ');
    console.log('  |____/ \\____/  |_|    |_|  |_/_/    \\_\\_____|_|  |_|  ');
    console.log('============================================================');
    console.log('👑 OWNER   : Ravinu Lakshan (Bibile)');
    console.log('🚀 INSTANCE: Running Smoothly on Cloud Servers');
    console.log('📶 STATUS  : 100% ONLINE AND OPERATIONAL');
    console.log('============================================================\n');

    // ⏱️ AUTOMATION: පැයකට එක සැරයක් ඔයාගේම චැට් එකට .ping මැසේජ් එකක් යැවීම
    startHourlyPingJob();
});

// 💬 CORE MESSAGE ROUTER (COMMAND ENGINE)
client.on('message', async (msg) => {
    try {
        const messageBody = msg.body.trim().toLowerCase();

        // 1️⃣ COMMAND: .bot | /start | .menu
        if (messageBody === '.bot' || messageBody === '/start' || messageBody === '.menu') {
            const menuText = 
                `👋 *හලෝ මචන්! Welcome to My Professional Bot*\n\n` +
                `🤖 *BOT METRICS:*\n` +
                `• *Name:* RAVI-MD v1.0\n` +
                `• *Developer:* Ravinu Lakshan 😎\n` +
                `• *Location:* Bibile, Monaragala\n` +
                `• *Core:* Node.js (Stable)\n\n` +
                `━━━━━━━ ⚙️ COMMANDS ━━━━━━━\n\n` +
                `👑 *.about* - බොට් සහ ඩෙවලොපර් විස්තර\n` +
                `🔥 *.alive* - බොට්ගේ සජීවී තත්ත්වය බැලීමට\n` +
                `📞 *.contact* - නිල සම්බන්ධතා තොරතුරු\n\n` +
                `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
                `📝 _Response Architecture by Ravinu._`;
            
            await msg.reply(menuText);
        }

        // 2️⃣ COMMAND: .about
        else if (messageBody === '.about') {
            const aboutText = 
                `ℹ️ *DEVELOPER PROFILE* ℹ️\n` +
                `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
                `👤 *Name:* Ravinu Lakshan\n` +
                `🔞 *Age:* 20 Years Old\n` +
                `📍 *Origin:* Bibile, Monaragala, Sri Lanka 🇱🇰\n` +
                `💻 *Role:* Full-Stack Bot Developer\n` +
                `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
                `⚙️ _Protected Instance._`;
            
            await msg.reply(aboutText);
        }

        // 3️⃣ COMMAND: .alive
        else if (messageBody === '.alive') {
            await msg.reply('🔥 *RAVI-MD STATUS: ACTIVE*\n\n⚡ _All systems operational. Hugging Face cloud connection is highly stable._');
        }

        // 4️⃣ COMMAND: .contact
        else if (messageBody === '.contact') {
            await msg.reply('📞 *Developer Contact Registry:*\n\n💬 *WhatsApp:* 0768223718\n🌐 *GitHub:* lakshanravinu74-lab');
        }

    } catch (error) {
        console.error('[ERROR] Message routing issue:', error);
    }
});

// ⚡ FUNCTION: HOURLY PING SCRIPT (CRON JOB ALTERNATIVE)
function startHourlyPingJob() {
    const ONE_HOUR = 60 * 60 * 1000; // මිලිතත්පර වලින් පැයක්
    const targetChatId = `${OWNER_NUMBER}@c.us`;

    console.log('📅 [AUTOMATION] Hourly .ping job has been initialized.');

    setInterval(async () => {
        try {
            const timestamp = new Date().toLocaleTimeString();
            await client.sendMessage(targetChatId, `🤖 *.ping* \n\n_System Auto-Check_ \n⏰ Time: \`${timestamp}\` \n📊 Status: \`Healthy\``);
            console.log(`✅ [AUTOMATION] Auto-ping sent to Ravinu at ${timestamp}`);
        } catch (err) {
            console.error('[ERROR] Failed to send automated ping:', err);
        }
    }, ONE_HOUR);
}

// 🚀 START THE BOT LOGIC
client.initialize();
