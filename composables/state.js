export const useDarkModeCookie = () => useCookie('darkmode', {
    maxAge: 15778463, // 6 months
    sameSite: true,
    default: () => true
})