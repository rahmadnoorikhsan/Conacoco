"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import FormInput from './FormInput';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState('idle');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log('Form data submitted:', formData);
        setStatus('success');
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.form
            onSubmit={handleSubmit}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
        >
            <motion.div variants={itemVariants}><FormInput id="name" label="Full Name" value={formData.name} onChange={handleChange} /></motion.div>
            <motion.div variants={itemVariants}><FormInput id="email" label="Email Address" type="email" value={formData.email} onChange={handleChange} /></motion.div>
            <motion.div variants={itemVariants}><FormInput id="subject" label="Subject" value={formData.subject} onChange={handleChange} /></motion.div>
            <motion.div variants={itemVariants}><FormInput id="message" label="Message" type="textarea" value={formData.message} onChange={handleChange} /></motion.div>

            <motion.div variants={itemVariants}>
                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="flex w-full justify-center rounded-md bg-yellow-500 px-3.5 py-2.5 text-center text-sm font-semibold text-gray-900 shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                    {status === 'loading' && 'Sending...'}
                    {status === 'success' && 'Message Sent!'}
                    {status === 'error' && 'Something went wrong.'}
                    {status === 'idle' && 'Send Message'}
                </button>
            </motion.div>
        </motion.form>
    );
};

export default ContactForm;