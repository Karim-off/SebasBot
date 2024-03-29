const handler = async (m, {conn}) => {
  let txt = '';
  for (const [jid, chat] of Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats)) txt += `\n—◉ ${await conn.getName(jid)}\n➤ ${jid} [${chat?.metadata?.read_only ? '𝙽𝙾 𝙿𝙰𝚁𝚃𝙸𝙲𝙸𝙿𝙰𝙽𝚃𝙴𝚂' : '𝙿𝙰𝚁𝚃𝙸𝙲𝙸𝙿𝙰𝙽𝚃𝙴'}]\n\n`;
  m.reply(`𝐆𝐑𝐔𝐏𝐎𝐒 𝐃𝐎𝐍𝐃𝐄 𝐄𝐒𝐓𝐀 𝐆𝐨𝐤𝐮𝐁𝐨𝐭𝐋𝐢𝐭𝐞-𝐌𝐃:
${txt}
`.trim());
};
handler.help = ['groups', 'grouplist'];
handler.tags = ['info'];
handler.command = /^(groups|grouplist|listadegrupo|gruposlista|listagrupos)$/i;
export default handler;
