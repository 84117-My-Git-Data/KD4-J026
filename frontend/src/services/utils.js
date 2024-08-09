const SERVER_URL = "http://localhost:4000"
export function createUrl(path) {
    return `${SERVER_URL}/${path}`
}

export function createError() {
    return {status: 'error', error}
}
