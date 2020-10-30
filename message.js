class Message {
    constructor(header, body) {
        this.header = header
        this.body = body
    }

    subject(subject) {
        this.header.subject = subject
    }

    from(address) {
        this.header.from = address
    }

    replyTo(address) {
        this.header.replyTo = address
    }

    returnPath(address) {
        this.header.returnPath = address
    }

    to(address) {
        this.header.to = address
    }

    plain(plain) {
        this.body.plain = plain
    }

    html(html) {
        this.body.html = html
    }
}

module.exports = Message
