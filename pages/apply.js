import React from "react";
import { useState, setValue } from "react";

const Apply = () => {
  const [username, setusername] = useState("");
  const [linkedin, setlinkedin] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [github, setgithub] = useState("");

  const profile = {
    username,
    linkedin,
    phonenumber,
    github,
  };

  const API =
    "http://a64c892dba98d4cb9963dc50e3d7ed07-161434970.ap-south-1.elb.amazonaws.com/candidates";

  const handleSubmit = (e) => {
    // fetch(API,{
    //     type:'POST'
    // })
  };

  return (
    <div className="container px-8 py-12 h-screen bg-gray-100 m-z">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md mx-auto sm:max-w-xl">
        <div className="m-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Email
          </label>
          <input
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            type="email"
            id="username"
            onChange={(e) => setusername(e.target.value)}
            value={username}
            placeholder="jane@example.com"
          />
        </div>
        <div className="m-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            PhoneNumber
          </label>
          <input
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            id="phoneNumber"
            onChange={(e) => setphonenumber(e.target.value)}
            value={phonenumber}
            type="text"
          />
        </div>
        <div className="m-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="linkedIn"
          >
            LinkedIn
          </label>
          <input
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            id="linkedIn"
            onChange={(e) => setlinkedin(e.target.value)}
            value={linkedin}
            type="text"
          />
        </div>
        <div className="m-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="gitHub"
          >
            GitHub
          </label>
          <input
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            id="gitHub"
            onChange={(e) => setgithub(e.target.value)}
            value={github}
            type="text"
          />
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        {JSON.stringify(profile)}
      </p>
      <div class="md:flex md:items-center">
        <div class="md:w-1/3"></div>
        <div class="md:w-2/3">
          <button
            onClick={() => handleSubmit()}
            class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            Sign Up
          </button>
        </div>
      </div>
      <p className="text-center text-indigo-500 text-xs">
        &copy;2020 Bowie Corp. All rights reserved.
      </p>
    </div>
  );
};

export default Apply;
