import { cx } from '@utils';
import { Block, SocialMedia, TagWrapper } from '@components';
import Me from '@images/me.jpg';
import Download from '@icons/download.svg';
import Github from '@icons/github.svg';
import Linkedin from '@icons/linkedin.svg';
import Medium from '@icons/medium.svg';

// Projects
import JobFlow from '@images/projects/jobflow.png';

const socialMedia = [
  {
    link: 'github.com/evair-mac-dev',
    icon: Github,
    alt: 'github icon',
  },
  {
    link: 'linkedin.com/in/evairmacollunco',
    icon: Linkedin,
    alt: 'linkedin icon',
  },
  {
    link: 'medium.com/@mevairmc',
    icon: Medium,
    alt: 'medium icon',
  },
];

const projects = [
  {
    title: 'JobFlow',
    description:
      'JobFlow is a platform that helps developers to track their job applications, interviews, and job offers. It is built using React, Typescript, and TailwindCSS.',
    github_link: 'github.com/evair-mac-dev/jobflow',
    image: JobFlow,
  },
];

export const Home = () => {
  return (
    <div className={cx('max-w-screen-1.5xl mx-auto')}>
      <div className={cx('flex flex-col items-center', 'lg:flex-row-reverse')}>
        <main className={cx('w-full px-6 py-4 max-w-xl', 'lg:max-w-md lg:px-8')}>
          <Block classNames={cx('flex flex-col items-center gap-8')}>
            <div className={cx('rounded-full shadow-secondary-box p-4 w-fit px-auto')}>
              <div className={cx('rounded-full h-64 w-64 overflow-hidden')}>
                <img src={Me} alt="evair photo" className={cx('relative -mt-8')} />
              </div>
            </div>
            <div>
              {socialMedia.map(({ link, icon, alt }) => (
                <SocialMedia key={link} link={link} icon={icon} alt={alt} />
              ))}
            </div>
          </Block>
        </main>
        <section className={cx('w-full px-6 py-4', 'lg:px-8')}>
          <Block>
            <TagWrapper />
            <h1 className={cx('text-4xl font-medium leading-normal mb-4 mt-5', 'md:text-5xl')}>
              Hello, I'm Evair Macollunco, a software engineer based in Peru
            </h1>
            <p className={cx('mb-8 text-lg text-gray-400', 'md: text-2xl max-w-screen-sm')}>
              I bring over six years of experience in software architecture and cloud computing, specializing in
              architecture patterns like microservices, event-driven, and so on. I enjoy working in complex projects and
              collaborating with teams to deliver high-quality products.
            </p>
            <Block classNames={cx('p-4 w-fit mb-4')}>
              <a
                href="/docs/Marco%20E.%20Macollunco%20-%20Software%20Engineer.pdf"
                className={cx('flex gap-2')}
                target="_blank"
                rel="noopener"
              >
                <button>My Resume</button>
                <img src={Download} alt="download icon" className={cx('w-8')} />
              </a>
            </Block>
          </Block>
        </section>
      </div>
      <section className={cx('w-full px-6 py-4', 'lg:px-8')}>
        <Block>
          <TagWrapper />
          <h2 className={cx('text-3xl  mb-4 mt-5')}>My Projects</h2>
          <div className={cx('grid grid-cols-1 gap-4')}>
            {projects.map((project, index) => (
              <Block key={index} classNames={cx('w-full', 'flex flex-col gap-8 p-4', 'lg:flex-row')}>
                <div className={cx('min-w-52')}>
                  <img src={project.image} alt={project.title} className={cx('rounded-xl')} />
                </div>
                <div className={cx('flex flex-col justify-around w-full')}>
                  <div>
                    <h3 className={cx('text-2xl font-medium mb-4')}>{project.title}</h3>
                    <p className={cx('text-gray-400 mb-4')}>{project.description}</p>
                  </div>
                  <SocialMedia link={project.github_link} icon={Github} alt="github icon" />
                </div>
              </Block>
            ))}
          </div>
        </Block>
      </section>

      <footer className={cx('w-full px-6 py-4', 'lg:px-8')}>
        <Block>
          <div className={cx('flex flex-col flex-wrap gap-12', 'md:flex-row md:justify-between')}>
            <div className={cx('max-w-96')}>
              <TagWrapper />
              <div className={cx('flex gap-1 items-baseline')}>
                <h2 className={cx('text-3xl  mb-4 mt-5')}>EvairMac</h2>
                <div className={'w-2 h-2 bg-green-base rounded-full'}></div>
              </div>
              <blockquote className={cx('text-lg')}>
                <p className={cx('mb-3 text-gray-400')}>
                  EvairMac is a personal website that I use to share my work and experiences as a software engineer. I
                  built this website using React, Typescript, and TailwindCSS.
                </p>
                <p className={cx('text-teal-300 mb-5')}>"Be the change that you want to see in the world"</p>
              </blockquote>
            </div>
            <div className={cx('mt-4')}>
              <h4 className={cx('mb-5 text-lg')}>Contact</h4>
              <div className={cx('mb-5 text-gray-400')}>
                <p>mevairmc@gmail.com</p>
              </div>
              <div className={cx('mb-5 text-gray-400')}>
                <p>(+51) 981-485-983</p>
              </div>
              <div className={cx('mb-5 text-gray-400')}>
                <p>Zip/Postal Code - 15008</p>
              </div>
            </div>
            <div className={cx('mt-4 mb-4 max-w-72')}>
              <h4 className={cx('mb-5 text-lg')}>Office</h4>
              <div>
                <p className={cx('text-gray-400')}>C1 Lt10, Rio Ene Street, Santa Anita, Lima - Peru</p>
              </div>
            </div>
          </div>
        </Block>
        <div className={cx('my-12 text-center text-gray-500')}>
          <p className={cx('text-xs')}>
            ©EvairMac — Created by <span className={cx('text-white')}>Evair Macollunco</span>
          </p>
        </div>
      </footer>
    </div>
  );
};
