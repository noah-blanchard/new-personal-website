"use client"

import ContactForm from "../components/ContactForm"
import IconTitle from "../components/IconTitle"
import ContactIcon from "../icons/contact"

export default function Contact() {
    return (
        <main id="contact" className="bg-white flex flex-col justify-start items-center min-h-96 text-black p-20">
            <div className="flex flex-col justify-start items-start gap-4 w-1/2">
                <IconTitle title="Let's get in touch !" icon={<ContactIcon />} />
                <ContactForm />
            </div>
        </main>
    )
}