export default defineEventHandler(async (event) => {
    // ... Do whatever you want here
    const { sendMail } = useNodeMailer()
    const ip: any = getRequestIP(event, { xForwardedFor: true })
    const body: any = await readBody(event)
    const secret: any = process.env.SECRET_RECAPTCHA
    const formData = new URLSearchParams({
        secret: secret,
        response: body.token,
        remoteip: ip,
    })

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

    if (!isValid.success) throw new Error(isValid['error-codes'][0])

    sendMail({
        to: 'omarmendez@printres.com',
        from: body.from,
        subject: body.subject,
        text: body.text,
    })
    return {
        success: true,
        message:
            'Gracias por comunicarte con nosotros, estaremos en contacto en la brevedad posible!',
    }
})
