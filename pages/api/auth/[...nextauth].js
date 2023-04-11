import GoogleProvider from 'next-auth/providers/google';
import AzureADProvider from "next-auth/providers/azure-ad";
import NextAuth from "next-auth";

const options = {
    providers: [
        GoogleProvider({
            clientId: "480391284884-d1tn3f8i2tsltjdhl6anm2qto8qfb8o9.apps.googleusercontent.com",
            clientSecret: "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",
        }),
        AzureADProvider({
            clientId: process.env.AZURE_AD_CLIENT_ID,
            clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
            tenantId: process.env.AZURE_AD_TENANT_ID,
        }),
    ],
}

export default (req, res) => NextAuth(req, res, options)