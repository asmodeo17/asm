let handler = function (m) {
  this.sendContact(m.chat, '5491155607911', 'Asmodeo', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
