import React from 'react'
import { Footer } from 'flowbite-react'
import { Link } from 'react-router-dom'
import {BsFacebook, BsInstagram, BsTwitter, BsGithub, BsTwitch} from 'react-icons/bs'

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>

          <div>
            <Link to='/' className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
              <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
                Shishir's
              </span>
              PedoClinic
            </Link>
          </div>

          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
            <Footer.Title title='About'/>
            <Footer.LinkGroup col>
                <Footer.Link href='https://www.reddit.com/r/hiphop101/comments/1cry2d0/drake_vs_kendrick_who_really_won/' target='_blank' rel='noopener noreferrer'>
                  Sex Offenders
                </Footer.Link>
                <Footer.Link>
                  Certified Loverboy?
                </Footer.Link>
                <Footer.Link>
                  Certified Pedophile
                </Footer.Link>
            </Footer.LinkGroup>
            </div>

            <div>
            <Footer.Title title='OVO'/>
            <Footer.LinkGroup col>
                <Footer.Link href='https://www.reddit.com/r/hiphop101/comments/1cry2d0/drake_vs_kendrick_who_really_won/' target='_blank' rel='noopener noreferrer'>
                  Sex Offenders
                </Footer.Link>
                <Footer.Link>
                  Certified Loverboy?
                </Footer.Link>
                <Footer.Link>
                  Certified Pedophile
                </Footer.Link>
            </Footer.LinkGroup>
            </div>

            <div>
            <Footer.Title title='JCOLE'/>
            <Footer.LinkGroup col>
                <Footer.Link href='https://www.reddit.com/r/hiphop101/comments/1cry2d0/drake_vs_kendrick_who_really_won/' target='_blank' rel='noopener noreferrer'>
                  Sex Offenders
                </Footer.Link>
                <Footer.Link>
                  Certified Loverboy?
                </Footer.Link>
                <Footer.Link>
                  Certified Pedophile
                </Footer.Link>
            </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider/>
          <div className='w-full sm:flex sm:items-center sm:justify-between'>
            <Footer.Copyright href="#" by="Shishir's Clinic" year={new Date().getFullYear()}/>
            <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
              <Footer.Icon href="#" icon={BsFacebook}/>
              <Footer.Icon href="#" icon={BsInstagram}/>
              <Footer.Icon href="#" icon={BsTwitter}/>
              <Footer.Icon href="#" icon={BsGithub}/>
              <Footer.Icon href="#" icon={BsTwitch}/>
            </div>
          </div>
      </div>
    </Footer>
  )
};
