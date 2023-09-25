import Button from 'components/atoms/Button'
import InputGroup from 'components/molecules/FormGroup/InputGroup'
import TextAreaGroup from 'components/molecules/FormGroup/TextAreaGroup'
import IconListItem from 'components/molecules/IconListItem'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import React, { FormEvent } from 'react'
import { FiMail, FiPhoneCall, FiSlack } from 'react-icons/fi'
import {LiaSkype} from 'react-icons/lia'
import axios from "axios";

const Contact = () => {
  const [state, setState] = React.useState({
    script_type: "contact",
    email: "",
    name: "",
    subject: "",
    message: "",
  });
  const urlAction = process.env.CONTACT_US_GOOGLE_SCRIPT
  function handleChange(e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    let formData = new FormData();

    for (let [key, value] of Object.entries(state)) {
      formData.append(key, value);
    }

    await axios
      .post('https://script.google.com/macros/s/AKfycbwFeuPvhjwZaCL_pZDMltno2Jh9HxkN8nOvEsZsth7Dcgs2aHzqIKk16Athbaep6oMk/exec', formData)
      .then(({ data }) => {
        // Redirect used for reCAPTCHA and/or thank you page
        // window.location.href = redirect;
      })
      .catch((e) => {
        // window.location.href = e.response.data.redirect;
      });
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
                <input type="hidden" onChange={handleChange} name="script_type" value={'contact'} />
                <InputGroup onChange={handleChange} label="Name" name="name" />
                <InputGroup onChange={handleChange} label="Email" name="email" />
              </div>
              <InputGroup onChange={handleChange} label="Subject" name="subject" />
              <TextAreaGroup onChange={handleChange} label="Message" name="message" />
              <Button value="Send Message" />
            </form>
          </aside>
        </section>
      </PageTemplate>
    </>
  )
}

export default Contact
