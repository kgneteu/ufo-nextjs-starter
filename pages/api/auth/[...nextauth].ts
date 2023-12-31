import NextAuth, { NextAuthOptions } from 'next-auth';
// import GoogleProvider from 'next-auth/providers/google';
// import FacebookProvider from 'next-auth/providers/facebook';
// import GithubProvider from 'next-auth/providers/github';
// import TwitterProvider from 'next-auth/providers/twitter';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions: NextAuthOptions = {
    // https://next-auth.js.org/configuration/providers/oauth
    providers: [
        // FacebookProvider({
        //     clientId: process.env.FACEBOOK_ID,
        //     clientSecret: process.env.FACEBOOK_SECRET,
        // }),
        // GithubProvider({
        //     clientId: process.env.GITHUB_ID,
        //     clientSecret: process.env.GITHUB_SECRET,
        // }),
        // GoogleProvider({
        //     clientId: process.env.GOOGLE_ID,
        //     clientSecret: process.env.GOOGLE_SECRET,
        // }),
        // TwitterProvider({
        //     clientId: process.env.TWITTER_ID,
        //     clientSecret: process.env.TWITTER_SECRET,
        //     version: '2.0',
        // }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'E-Mail', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },

            async authorize(credentials) {
                try {
                    const res = await axios.post(process.env.API_SIGNIN_URL || '', {
                        email: credentials?.email,
                        password: credentials?.password,
                    });
                    if (res.status === 200) {
                        const apiUser = res.data;
                        const user = {
                            id: apiUser.user.id,
                            email: apiUser.user.email,
                            name: apiUser.user.first_name,
                            access_token: apiUser.token,
                            picture: apiUser.user.picture,
                            points: apiUser.user.points,
                            role: apiUser.user.role,
                            first_name: apiUser.user.first_name,
                            last_name: apiUser.user.last_name,
                            refresh_token: apiUser.refresh_token,
                        };
                        return user;
                    }
                    return null;
                } catch (err) {
                    console.error((err as Error)?.message);
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token }) {
            token.userRole = 'admin';
            return token;
        },
    },
    secret: process.env.SECRET,
};

export default NextAuth(authOptions);

// const authHandler = NextAuth(authOptions);
// export default async function handler(...params: any[]) {
//     await authHandler(...params);
// }
