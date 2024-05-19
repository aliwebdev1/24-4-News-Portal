import React from 'react';

const AboutPage = () => {
    return (
        <div>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center mb-8">About Us</h1>


                <section className="bg-white shadow-md rounded-md p-6 mb-8">
                    <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
                    <p className="text-gray-700">At Your Company Name, our mission is clear: [insert your mission statement]. We believe in [values or principles guiding your work]. Every project, every interaction, and every line of code reflects our commitment to [specific goals or ideals].</p>
                </section>


                <section className="bg-white shadow-md rounded-md p-6 mb-8">
                    <h2 className="text-xl font-semibold mb-4">Who We Are</h2>
                    <p className="text-gray-700">Behind every pixel, line of text, and innovation is a team of individuals driven by curiosity, creativity, and collaboration. We come from diverse backgrounds, cultures, and disciplines, but we share a common passion for [describe what unites your team].</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                        <div className="bg-gray-200 p-4 rounded-md">
                            <h3 className="text-lg font-semibold mb-2">Founder/CEO Name</h3>
                            <p className="text-gray-700">[Brief description or bio]</p>
                        </div>
                        <div className="bg-gray-200 p-4 rounded-md">
                            <h3 className="text-lg font-semibold mb-2">Team Member Name</h3>
                            <p className="text-gray-700">[Brief description or bio]</p>
                        </div>
                        <div className="bg-gray-200 p-4 rounded-md">
                            <h3 className="text-lg font-semibold mb-2">Team Member Name</h3>
                            <p className="text-gray-700">[Brief description or bio]</p>
                        </div>
                    </div>
                </section>


                <section className="bg-white shadow-md rounded-md p-6 mb-8">
                    <h2 className="text-xl font-semibold mb-4">What We Do</h2>
                    <p className="text-gray-700">Your Company Name is your partner in [describe your primary services or products]. From [specific service/product] to [another service/product], we specialize in [describe your areas of expertise]. Our approach is [describe your approach to your work, e.g., customer-centric, innovative, etc.].</p>
                </section>


                <section className="bg-white shadow-md rounded-md p-6 mb-8">
                    <h2 className="text-xl font-semibold mb-4">Our Values</h2>
                    <ul className="list-disc list-inside">
                        <li className="text-gray-700">[Value 1]: [Brief description]</li>
                        <li className="text-gray-700">[Value 2]: [Brief description]</li>
                        <li className="text-gray-700">[Value 3]: [Brief description]</li>
                    </ul>
                </section>


                <section className="bg-white shadow-md rounded-md p-6">
                    <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
                    <p className="text-gray-700">Have a question, suggestion, or just want to say hello? We d love to hear from you! Reach out to us via [contact information] or connect with us on [social media platforms]. Your feedback fuels our growth and inspires us to push the boundaries of what s possible.</p>
                </section>
            </div>
        </div>
    );
};

export default AboutPage;