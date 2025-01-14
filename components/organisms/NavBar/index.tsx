import React, { useEffect, useState } from 'react'
import NavBrandHeader from 'components/yourTechPartner/NavBrandHeader'
import NavLink from 'components/atoms/NavLink'
import ButtonLink from 'components/atoms/Button/ButtonLink'
import Container from 'components/templates/Container'
import { FiMenu, FiX } from 'react-icons/fi'
import UAParser from 'ua-parser-js'
import useMobileDeviceDetection from 'hooks/useMobileDetection'
import useGetBrowserName from 'hooks/useGetBrowserName'
const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const browserName = useGetBrowserName()
  const isMobile = useMobileDeviceDetection()
  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 150) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    };

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, [])
  useEffect(() => {
    const resizeListener = () => setIsOpen(false)

    window.addEventListener('resize', resizeListener)

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, [])
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('h-screen')
      document.body.classList.add('overflow-y-hidden')
    } else {
      document.body.classList.remove('h-screen')
      document.body.classList.remove('overflow-y-hidden')
    }
  }, [isOpen])
  return (
    <>
      <nav
        className={`w-full top-0 left-0 z-30 ${
          isScrolled ? 'bg-dark fixed' : 'pt-8 absolute'
        } ${
          isOpen ? 'h-full lg:h-auto bg-dark' : ''
        }`}
      >
        <Container>
          <div
            className={`${
              browserName == 'Firefox' ? 'bg-gray-900' : (isOpen && isMobile) || isScrolled ? 'bg-dark' : 'bg-light'
            } w-full rounded-md lg:backdrop-blur-3xl ${
              isScrolled || isOpen ? '' : 'bg-transparent lg:px-0'
            } ${
              isMobile ? '' : 'px-6 py-4'
            }`}
          >
            <div className="flex flex-col lg:flex-row w-full place-content-between lg:place-items-center">
              <div className="w-full flex flex-row place-content-between place-items-center lg:w-fit">
                <NavBrandHeader />
                <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                  <div
                    className={`text-white text-2xl ${
                      isMobile ? 'cursor-default' : 'cursor-pointer'
                    }`}
                  >
                    {isOpen ? <FiX /> : <FiMenu />}
                  </div>
                </div>
              </div>
              <div
                className={`${
                  isOpen ? '' : 'hidden '
                }space-y-5 mt-4 lg:mt-0 lg:space-y-0 lg:space-x-16 lg:flex lg:place-items-center`}
              >
                <NavLink className="mb-4 lg:mb-0" href="/service" value="Services" canActive={true} />
                <NavLink className="mb-4 lg:mb-0"
                  href="/how-we-work"
                  value="How We Work"
                  canActive={true}
                />
                <NavLink className="mb-4 lg:mb-0" href="/project" value="Project" canActive={true} />
                <NavLink className="mb-4 lg:mb-0" href="/faq" value="FAQ" canActive={true} />
                <NavLink className="mb-4 lg:mb-0" href="/about" value="About" canActive={true} />
                {
                  isOpen && <NavLink className="mb-4 lg:mb-0" href="/contact" value="Contact" canActive={true} />
                }
              </div>
              <div
                className={`${isOpen ? '' : 'hidden '}lg:block mt-5 lg:mt-0`}
              >
                {!isOpen && <ButtonLink
                  value="Contact"
                  style="light"
                  color="white"
                  size="small"
                  href="/contact"
                />}
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </>
  )
}

export default NavBar
