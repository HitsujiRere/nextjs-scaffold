'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import { FaGoogle } from 'react-icons/fa';

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
      <div className="input-group">
        <span>
          <FaGoogle />
        </span>
        <button className="btn gap-2" onClick={() => signIn('google')}>
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
