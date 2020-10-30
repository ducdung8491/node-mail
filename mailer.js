
const Message = require('./message')

class Mailer {
    constructor(transport) {
        this.transport = transport
        this.from = null
        this.replyTo = null
        this.returnPath = null
        this.to = null
    }

    alwaysFrom(address) {
        this.from = address
    }

    alwaysReplyTo(address) {
        this.replyTo = address
    }

    alwaysReturnPath(address) {
        this.returnPath = address
    }

    alwaysTo(address) {
        this.to = address
    }

    createMessage() {
        const message = new Message({}, {})
        message.from(this.from)
        message.replyTo(this.replyTo)
        message.returnPath(this.returnPath)
        message.to(this.to)
        return message
    }

    sendMail(data) {
        const message = this.createMessage()
        const {subject, plain, html} = data
        if (subject) {
            message.subject(subject)
        }
        if (plain) {
            message.plain(plain)
        }
        if (html) {
            message.html(html)
        }
        this.transport.send(message)
    }
}

module.exports = Mailer
