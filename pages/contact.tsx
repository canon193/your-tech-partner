import Button from 'components/atoms/Button'
import InputGroup from 'components/molecules/FormGroup/InputGroup'
import TextAreaGroup from 'components/molecules/FormGroup/TextAreaGroup'
import IconListItem from 'components/molecules/IconListItem'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import React, { FormEvent } from 'react'
import { FiMail, FiPhoneCall, FiSlack } from 'react-icons/fi'
import {LiaSkype} from 'react-icons/lia'
import * as process from "process";


const Contact = () => {
  interface FormData {
    script_type: string;
    name: string;
    email: string;
    subject: string;
    message: string;
  }
  const contact_endpoint = process.env.NEXT_PUBLIC_CONTACT_US_GOOGLE_SCRIPT
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);
    const formDataObject: Partial<FormData> = {};

    data.forEach((value, key) => {
      formDataObject[key as keyof FormData] = value as string;
    });
    formDataObject["script_type"] = "contact";
    try {
      // @ts-ignore
      await fetch(contact_endpoint, {
        redirect: "follow",
        method: 'POST',
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify(formDataObject), // Convert the form data to JSON
      });
    } catch {

    }
  }
  return (
    <>
      <PageTemplate title='Contact - Your Tech Partner'>
        <section className="grid grid-cols-1 place-items-center gap-10 lg:gap-5 lg:grid-cols-2">
          <aside className="w-full sm:w-10/12 md:w-8/12 grid grid-cols-1 gap-12 sm:place-items-center lg:w-full lg:place-items-start" data-aos="fade-up-right">
            <div className="sm:text-center lg:text-left">
              <PageSentence
                badge="CONTACT"
                title="We love receiving messages from you, we are waiting for it."
              />
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <IconListItem
                  label="Phone"
                  value="+84 38 247 9998"
                  icon={<FiPhoneCall />}
                />
                <IconListItem
                  label="Email"
                  value="support@your-tech-partner.com"
                  icon={<FiMail />}
                />
              </div>
            </div>
          </aside>
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full lg:flex lg:justify-end" data-aos="fade-down-left">
            <form  onSubmit={onSubmit} className="grid grid-cols-1 gap-7 p-6 md:p-9 bg-light rounded-md lg:w-10/12 ">
              <div className="grid grid-cols-2 gap-4">
                <input type="hidden" name="script_type" value={'contact'} />
                <InputGroup label="Name" name="name" />
                <InputGroup label="Email" name="email" />
              </div>
              <InputGroup label="Subject" name="subject" />
              <TextAreaGroup label="Message" name="message" />
              <Button value="Send Message" />
            </form>
          </aside>
        </section>
      </PageTemplate>
    </>
  )
}

export default Contact
