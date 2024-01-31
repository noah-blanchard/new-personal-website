import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import SendIcon from '../icons/send';
import LoadingIcon from '../icons/loading';


const ContactForm: React.FC = () => {
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const buttonVariants = {
        disabled: {
            backgroundColor: 'rgb(107 114 128)',
            transition: {
                duration: 0.2,
            },
        },
        enabled: {
            backgroundColor: 'rgb(168 85 247)',
            transition: {
                duration: 0.2,
            },
        },
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true);

        const webhookUrl = 'https://discord.com/api/webhooks/1202331337714040873/LBWWlxrXNtafvGjV0rIWYmO7uF2GaAVW3XOeI1Z_8x1kkPQuSXQVuOmIRo0ounqKDytw';
        const messageData = {
            content: `**${name}** (${email}):\n**Date** : ${new Date().toLocaleString()}\n----------------------------------------\n\n${message}`,
        };

        try {
            const response = await axios.post(webhookUrl, messageData);

            if (response.status === 204) {
                alert('Message sent successfully!');
                setLoading(false);
            } else {
                alert('Error sending message. Please try again later.');
            }

            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Error sending message. Please try again later.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full">
            <div className="md:flex md:items-start mb-6 w-full">
                <div className="md:w-1/5">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                        Name
                    </label>
                </div>
                <div className="md:w-4/5">
                    <input
                        className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/5">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                        Email
                    </label>
                </div>
                <div className="md:w-4/5">
                    <input
                        className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/5">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                        Message
                    </label>
                </div>
                <div className="md:w-4/5">
                    <textarea
                        className="no-resize appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                </div>
            </div>
            <div className="md:flex md:items-center">
                <div className="md:w-full flex items-center justify-end">
                    <motion.button
                        variants={buttonVariants}
                        initial="disabled"
                        animate={name && email && message ? 'enabled' : 'disabled'}
                        className="flex flex-row justify-center items-center shadow focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-1/3"
                        type="submit"
                    >
                        {
                            loading ? (

                                <LoadingIcon />

                            ) : (

                                <SendIcon />

                            )
                        }
                    </motion.button>
                </div>
            </div>
        </form>
    );
}

export default ContactForm;