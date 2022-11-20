import React from "react";
import Title from "./Title";

function Contact() {
    return (
        <div className="flex flex-col mb-10 mx-auto">
            <div className="flex justify-center items-center">
                <form action="https://getform.io/f/9f51e1cb-58d0-41aa-82d5-047ba0ee4058" method="POST" className="flex flex-col w-full md:w-7/12">
                <Title>Contact Me</Title>
                    <input 
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="p-2 bg-transparent border-2 rounded-md focus:outline-none dark:border-green-300"
                    />
                    <input 
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none dark:border-green-300"
                    />
                    <textarea 
                        name="message" 
                        placeholder="Message" 
                        rows="10"
                        className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none dark:border-green-300"
                    />
                    <button type="submit" className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-green-500 to-orange-700 drop-shadow-md hover:stroke-white">Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;