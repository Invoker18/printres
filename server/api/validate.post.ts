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

    console.log(isValid, 'isValid')
    if (!isValid.success) throw new Error(isValid['error-codes'][0])

    try {
        console.log(body, 'body')
        sendMail({
            from: body.from,
            to: 'contacto@printres.com.pa',
            subject: body.subject,
            text: `
                Nombre: ${body.subject},
                Correo: ${body.from},
                Mensaje: ${body.text},
            `,
        })
    } catch (error) {
        console.log(error, 'error')
        throw error
    }

    return {
        success: true,
        message:
            'Gracias por comunicarte con nosotros, estaremos en contacto en la brevedad posible!',
    }
})
