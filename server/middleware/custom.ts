export default defineEventHandler((event) => {
    const headers = {
        'x-vercel-protection-bypass': 'o9EGpYZcPyYOtBzsqzm3gmIuwVZEfAg0',
        'x-vercel-set-bypass-cookie': 'samesitenone',
    }
    setHeaders(event, headers)
})
