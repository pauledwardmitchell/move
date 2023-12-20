export const API_URL = process.env.NODE_ENV === "test"
? "http://mockedtesturl.com"
: import.meta.env.VITE_API_URL