import speakeasy from 'speakeasy'

const secret = speakeasy.generateSecret({ length: 20 })

export const generateOtp = speakeasy.totp({
    secret: secret.base32,
    encoding: 'base32'
})