import speakeasy from 'speakeasy'

export const generateOtp = () => {
    const secret = speakeasy.generateSecret({ length: 20 })
    const otp = speakeasy.totp({
        secret: secret.base32,
        encoding: 'base32'
    })
    return { otp, secret: secret.base32 };
}