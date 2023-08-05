import { type FC } from 'react'
import Container from '@/layouts/Container'
import {
  RiDiscordFill,
  RiGithubFill,
  RiHaze2Line,
  RiTelegramFill,
  RiYoutubeFill
} from 'react-icons/ri'
import { Link } from 'react-router-dom'

export const Footer: FC = props => {
  return (
    <footer
      className={'min-h-[350px] w-full border-t-[1px] border-t-gray-500 p-8'}
    >
      <Container>
        <section className={'grid w-full grid-cols-1 gap-8 md:grid-cols-4'}>
          <div>
            <Link to={'/'}>
              <div className={'flex items-center gap-3'}>
                <div className={'text-white'}>
                  <RiHaze2Line />
                </div>
                <div className={'font-bold tracking-wider'}>
                  BitTopia University
                </div>
              </div>
            </Link>
          </div>
          <div className={'flex flex-col gap-4'}>
            <h3 className={'text-lg'}>Bittopia</h3>
            <Link
              className={'decoration-none text-gray-500 hover:text-white'}
              to={'#'}
            >
              About
            </Link>
            <Link
              className={'decoration-none text-gray-500 hover:text-white'}
              to={'#'}
            >
              blog
            </Link>
            <Link
              className={'decoration-none text-gray-500 hover:text-white'}
              to={'#'}
            >
              Jobs
            </Link>
          </div>
          <div className={'flex flex-col gap-4'}>
            <h3 className={'text-lg'}>Resources</h3>
            <Link
              className={'decoration-none text-gray-500 hover:text-white'}
              target={'_blank'}
              to={'https://docs.bittopia.org/'}
            >
              Docs
            </Link>
            <Link
              className={'decoration-none text-gray-500 hover:text-white'}
              to={'#'}
            >
              Discussions
            </Link>
            <Link
              className={'decoration-none text-gray-500 hover:text-white'}
              to={'#'}
            >
              Github
            </Link>
            <Link
              className={'decoration-none text-gray-500 hover:text-white'}
              to={'#'}
            >
              Docs
            </Link>
            <Link
              className={'decoration-none text-gray-500 hover:text-white'}
              to={'#'}
            >
              Support
            </Link>
          </div>
          <div className={'flex min-w-[200px] flex-col gap-4'}>
            <h3 className={'text-right text-lg'}>Join BitTopia community</h3>
            <div className={'flex justify-end gap-4'}>
              <Link
                className={
                  'decoration-none text-3xl text-gray-500 hover:text-white'
                }
                target={'_blank'}
                to={'https://github.com/Bittopia'}
              >
                <RiGithubFill />
              </Link>
              <Link
                className={
                  'decoration-none text-3xl text-gray-500 hover:text-white'
                }
                target={'_blank'}
                to={'https://discord.gg/rBRZuJWUsy'}
              >
                <RiDiscordFill />
              </Link>
              <Link
                className={
                  'decoration-none text-3xl text-gray-500 hover:text-white'
                }
                target={'_blank'}
                to={'https://t.me/bittopia_u'}
              >
                <RiTelegramFill />
              </Link>
              <Link
                className={
                  'decoration-none text-3xl text-gray-500 hover:text-white'
                }
                target={'_blank'}
                to={'https://www.youtube.com/c/BittopiaUniversity'}
              >
                <RiYoutubeFill />
              </Link>
            </div>
          </div>
        </section>
      </Container>
    </footer>
  )
}
