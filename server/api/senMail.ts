export default defineEventHandler(async (event) => {
    const query: any = getQuery(event)
    const mail = useMail()

    try {
        mail.send({
            from: query.from,
            subject: query.subject,
            text: query.text,
        })
    } catch (error) {
        console.log(error, 'error in sendMail')
    }
})
