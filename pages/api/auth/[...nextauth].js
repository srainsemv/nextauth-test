import AzureADProvider from "next-auth/providers/azure-ad";
import NextAuth from "next-auth";

const options = {
    providers: [
        AzureADProvider({
            clientId: "6b7c9d05-e06a-4e5d-840f-838e04295e1c",
            clientSecret: "d4e8Q~MWikN0c3RIN9SU7UnozYQI3JV5Qqw6VbV4",
            tenantId: "91962bb4-066f-4705-8bbd-ff4dd5ca63f6",
        }),
    ],
}

export default (req, res) => NextAuth(req, res, options)