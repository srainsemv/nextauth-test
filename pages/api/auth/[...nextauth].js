import AzureADProvider from "next-auth/providers/azure-ad";
import NextAuth from "next-auth";

const options = {
    providers: [
        AzureADProvider({
            clientId: process.env.AZURE_AD_CLIENT_ID,
            clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
            tenantId: process.env.AZURE_AD_TENANT_ID,
        }),
    ],
}

export default (req, res) => NextAuth(req, res, options)