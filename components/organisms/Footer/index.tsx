import NavBrandFooter from 'components/yourTechPartner/NavBrandFooter'
import NavLink from 'components/atoms/NavLink'
import Text from 'components/atoms/Text'
import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="mt-32 pb-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-16 xl:gap-20">
          <div className="space-y-5">
            <NavBrandFooter />
            <div className="">
              <Text
                value={`Copyright © ${new Date().getFullYear()}`}
                textStyle="SectionParagraph"
              />
              <Text
                value={`Design By Your Tech Partner LLC`}
                textStyle="SectionParagraph"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-16 xl:gap-20">
            <div className="space-y-5">
              <Text value="SERVICES" textStyle="FooterLinkGroupTitle" />
              <div className="space-y-[10px]">
                <NavLink
                  value="Embedded System"
                  href="/service/detail"
                />
                <NavLink
                  value="Process Automation"
                  href="/service/detail"
                />
                <NavLink value="Web App Development" href="/service/detail" />
                <NavLink value="Consultation" href="/service/detail" />
                <NavLink value="Maintenance" href="/service/detail" />
              </div>
            </div>
            <div className="space-y-5">
              <Text value="COMPANY" textStyle="FooterLinkGroupTitle" />
              <div className="space-y-[10px]">
                <NavLink value="About" href="/about" />
                <NavLink value="Contact" href="/contact" />
                <NavLink value="Privacy Policy" href="/privacy-policy" />
                <NavLink value="Term of Service" href="/term-of-service" />
              </div>
            </div>
            {/*<div className="space-y-5">*/}
            {/*  <Text value="RESOURCES" textStyle="FooterLinkGroupTitle" />*/}
            {/*  <div className="space-y-[10px]">*/}
            {/*    <NavLink value="Support" href="/support" />*/}
            {/*    <NavLink value="Documentation" href="/documentation" />*/}
            {/*    <NavLink value="License" href="/license" />*/}
            {/*    <NavLink value="Sitemap" href="/sitemap" />*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
