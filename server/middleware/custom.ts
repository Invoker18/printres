export default defineEventHandler((event) => {
    const headers = {
        'x-vercel-protection-bypass': 'o9EGpYZcPyYOtBzsqzm3gmIuwVZEfAg0',
    }
    setHeaders(event, headers)
})
