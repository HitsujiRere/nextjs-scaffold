'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

export default function AuthPage() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <p>Name: {session.user?.name}</p>
        <p>Email: {session.user?.email}</p>
        <button className="btn" onClick={() => signOut()}>
          Sign out
        </button>
      </div>
    );
  }

  return (
    <div>
      <p>Not signed in</p>
      <button className="btn" onClick={() => signIn()}>
        Sign in
      </button>
    </div>
  );
}
