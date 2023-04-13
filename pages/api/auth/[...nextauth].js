import AzureADProvider from "next-auth/providers/azure-ad";
import NextAuth from "next-auth";

const options = {
    providers: [
        AzureADProvider({
            clientId: "6b7c9d05-e06a-4e5d-840f-838e04295e1c",
            clientSecret: "964110eb-855d-4743-ae43-4853300a8505",
            tenantId: "91962bb4-066f-4705-8bbd-ff4dd5ca63f6",
        }),
    ],
}

export default (req, res) => NextAuth(req, res, options)