import { signIn, signOut, useSession } from 'next-auth/react';

const User = () => {
    const { data: session } = useSession();
    if (session) {
        return (
            <>
                Signed in as <br />
                <button onClick={() => signOut()}>Sign out</button>
            </>
        );
    }
    return (
        <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
        </>
    );
};

export default User;
