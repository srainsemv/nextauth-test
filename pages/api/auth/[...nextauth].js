import AzureADProvider from "next-auth/providers/azure-ad";
import NextAuth from "next-auth";

const options = {
    providers: [
        AzureADProvider({
            clientId: "6b7c9d05-e06a-4e5d-840f-838e04295e1c",
            clientSecret: "2db8907c-33b1-4726-abbc-f02afcaa995e",
            tenantId: "91962bb4-066f-4705-8bbd-ff4dd5ca63f6",
        }),
    ],
}

export default (req, res) => NextAuth(req, res, options)