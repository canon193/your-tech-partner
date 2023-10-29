import TestimonialCard from 'components/molecules/Card/TestimonialCard'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'

const TestimonialList = () => {
  return (
    <div className="w-full">
      <Swiper
        breakpoints={{
          300: {
            spaceBetween: 10,
          },
          640: {
            spaceBetween: 20,
          },
          768: {
            spaceBetween: 40,
          },
          1024: {
            spaceBetween: 50,
          },
        }}
        loop={true}
        pagination={{
          clickable: true,
          type: 'bullets',
          clickableClass: 'swiper-pagination',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        direction="horizontal"
        modules={[Pagination]}
        slideClass='swiper-slide'
        slideActiveClass='swiper-slide-active'
        
      >
        <SwiperSlide className='mt-10'>
          <TestimonialCard
            avatarSrc="/images/testimonial/david-pippenger-epicurean-advertising.jpg"
            name="David Pippenger"
            linkedin="https://www.linkedin.com/in/dapippenger/"
            company="Epicurean Advertising"
            company_website="https://epicureanadvertising.com/"
            testimony={`"Le and his team have worked with me on various projects and has consistently impressed me with their ability to take my ideas and turn them into a functional website, custom data tool, or both.</br>The concerns I had working with someone multiple time zones away (14 hours ahead of us) proved completely unfounded. They have made himself available at the beginning and end of our day to have Zoom conferences, email exchanges, or chats. If you utilize Le and his team, their speedy response times and excellent programming skill set will make you look like a genius. At least, that is what they have done for me."`}
          />
        </SwiperSlide>
        <SwiperSlide className='mt-10'>
          <TestimonialCard
            avatarSrc="/images/testimonial/aaron-fox-aaron-fox-law.jpg"
            name="Aaron Fox"
            linkedin="https://www.linkedin.com/in/aaron-fox-law/"
            company="Aaron Fox Law"
            company_website="https://aaronfoxlaw.com/"
            testimony={`"Where to start? Le and his team are absolutely amazing!!! A++++. I first hired them to create a pdf automation software. They delivered way beyond expectations!!! Then, because they were so good at automations, they simplified and made better a different program in google sheets that a different UpWork person did. The reason they could fix it, is because of their advanced knowledge of software automation. Then, they kept on helping us make our next automation, basically, making Zapier subscription pointless, because they just made the integration themself. Then an enterprise Law Firm management software was not integrating with Google Contacts, then came them to the rescue, to the point, my law firm management software wanted their resume because they were able to create a workaround themself."`}
          />
        </SwiperSlide>
        <SwiperSlide className='mt-10'>
          <TestimonialCard
            avatarSrc="/images/testimonial/steve-cory-oaksure-financial-service.jpg"
            name="Steve Cory"
            linkedin=""
            company="Oaksure Financial Services"
            company_website="https://www.oaksure.co.za"
            testimony={`"Your Tech Partner have been amazing in all of our development work. We have worked well together since the start. From API’s, to custom scripts to Zapier, they have allowed us to automate a huge amount of our daily  work and focus on the key priorities of the business. I would recommend Your Tech Partner to anyone looking for more free time and less busy work.”"`}
          />
        </SwiperSlide>
        <SwiperSlide className='mt-10'>
          <TestimonialCard
            avatarSrc="/images/testimonial/will-panton-vets-love-pet.jpg"
            name="Will Panton"
            linkedin="https://www.linkedin.com/in/will-panton-4b780616"
            company="Vets Love Pets"
            company_website="https://vetslovepets.com.au/"
            testimony={`"We have been working with Vu for 12 months and he has been a fantastic addition to our contractor team. He is attentive, efficient and highly effective in producing technical solutions to our data transfer requirements. He is proactive and regularly puts forward suggestions that will improve our systems before we get caught out by any deficiencies. Highly recommend his services."`}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default TestimonialList
