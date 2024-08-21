export default defineEventHandler(async (event) => {
    // ... Do whatever you want here
    const { sendMail } = useNodeMailer()
    const ip: any = getRequestIP(event, { xForwardedFor: true })
    const query: any = getQuery(event)
    const secret: any = process.env.SECRET_RECAPTCHA
    const formData = new URLSearchParams({
        secret: secret,
        response: query.token,
        remoteip: ip,
    })
    try {
        const isValid: any = await $fetch(
            'https://www.google.com/recaptcha/api/siteverify',
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                method: 'POST',
                body: formData,
            }
        )
        console.log(isValid, 'isValid')

        if (!isValid.success) throw isValid['error-codes'][0]

        sendMail({
            to: query.from,
            subject: query.subject,
            text: query.text,
        })
        return {
            success: true,
            message:
                'Gracias por comunicarte con nosotros, estaremos en contacto en la brevedad posible!',
        }
    } catch (error) {
        console.log(error)
        throw error
    }
})
