"use client"

import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const GithubCallback = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code') as string;

  // Get the router instance
  const router = useRouter();

  useEffect(() => {
    const url = `http://localhost:4000/authorize/callback?code=${encodeURIComponent(code)}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('GitHub Access Token:', data);

        // Check if the user is authenticated
        if (data.authedUser) {
          console.log(data.authedUser.authed);
        //   router.replace('/inventory/home/dashboard');
        }
      })
      .catch((error) => {
        console.error('Error:', error.message);
      });
  }, [code, router]);

  return <div>Processing...</div>;
};

export default GithubCallback;

