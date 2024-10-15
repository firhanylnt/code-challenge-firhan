"use client";

import axios from 'axios';
import { useEffect, useState } from 'react';

interface RandomUser {
    name: {
        first: string;
        last: string;
    };
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
}

export default function Teams() {
  const [users, setUsers] = useState<RandomUser[]>([]);

  // Fetch data from RandomUser API
  useEffect(() => {
    axios
      .get('https://randomuser.me/api/?results=4')
      .then((response) => {
        setUsers(response.data.results);  // Set the data from API
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <div className="bg-white mx-auto p-4">
      <h1 className="text-2xl text-black md:text-5xl font-bold text-center p-4 m-[1em]">
        Kenalan sama atasan kita yuk
      </h1>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {users.map((user, index) => (
          <div
            key={index}
            className="bg-[#37b441] py-[1em] px-[1em] rounded-[15px] md:mt-[5em] md:mb-[5em]">
            <img
              src={user.picture.large}
              alt={`${user.name.first} ${user.name.last}`}
              className="w-[100px] h-[100px] rounded-full mx-auto"
            />
            <h3 className="text-white mt-4 text-2xl font-bold text-center">
              {user.name.first} {user.name.last}
            </h3>
            <p className="text-white mt-2 text-center">
              {index === 0 ? 'Founder' : 'Co - Founder'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
