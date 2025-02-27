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
        const response = await sendMail({
            from: body.from,
            to: process.env.TO_MAIL,
            subject: 'Contacto - printres.com.pa',
            // text: `Nombre: ${body.subject}<br/>Correo: ${body.from}<br/>Mensaje: ${body.text}`,
            html: `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Email Template</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        margin: 0;
                        padding: 0;
                    }
                    .email-container {
                        max-width: 600px;
                        margin: 0 auto;
                        background-color: #ffffff;
                        padding: 20px;
                        border-radius: 8px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }
                    .header {
                        text-align: center;
                        padding: 20px 0;
                    }
                    .header img {
                        max-width: 150px;
                    }
                    .content {
                        padding: 20px;
                    }
                    .footer {
                        text-align: center;
                        padding: 20px;
                        font-size: 12px;
                        color: #888888;
                    }
                </style>
            </head>
            <body>
                <div class="email-container">
                    <div class="header">
                        <img src="https://www.printres.com.pa/_vercel/image?url=%2Fimages%2Flogoprintres2.svg&w=320&q=100" alt="Company Logo">
                    </div>
                    <div class="content">
                        <h1>${body.subject}</h1>
                        <p>${body.from}</p>
                        <p>${body.text}</p>
                    </div>
                    <div class="footer">
                        <p>&copy; 2025 Printres. Todos los derechos reservados.</p>
                        <p>Cam. Real de Bethania 9137, Panamá, Provincia de Panamá</p>
                    </div>
                </div>
            </body>
            </html>`,
        })
        console.log(response, 'response')
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
