import Image from "next/image";
import Box from "./Box";
import Fade from "react-reveal/Fade";
import Link from "next/link";
function About() {
  return (
    <>
      <Fade top>
        <div>
          <div className="max-w-7xl px-5  mx-auto flex items-center justify-between flex-col md:flex-row space-y-10">
            <div className="space-y-4 max-w-2xl">
              <h1 className="text-2xl font-bold">⚡ About Me</h1>
              <p className="text-gray-400 text-[15px]">
                Hey! I'm therogersak, I've been close to a computer since an
                early age, and been passionate about it ever since.
              </p>
              <p className="text-gray-400 text-[15px] inline-block">
                I really liked to build stuff using
                <span className="inline-block px-2">
                  <Box
                    name="no Code Games"
                    more="I used to make games without code using RPG Maker VX, and build a simple website with blogspot back in primary school."
                  />
                </span>
                back in 2010, and from that, I explored how to code myself,
                fast-forward to today, I do programming in various languages and
                technologies, and had the privilege to worked in a
                <span className="inline-block px-2 point">
                  <Link href="/">
                    <a target="_blank" rel="noopener noreferrer">
                      B2 Company
                    </a>
                  </Link>
                </span>
                and a
                <span className="point">
                  <Link href="/">
                    <a
                      target="_blank"
                      className="px-2"
                      rel="noopener noreferrer"
                    >
                      Recruitment Company
                    </a>
                  </Link>
                </span>
                I'm interested in building something awesome with code and
                automate tasks with code, currently focused on
                <span className="inline-block px-2">
                  <Box
                    name="Web or  App Devlopment"
                    more="Building Web and Mobile Applications using Javascript Frameworks (React, React Native and Next.js)"
                  />
                </span>
                ,
                <span className="inline-block px-2">
                  <Box
                    name="Open Source"
                    more="I really like the idea of contributing new features to open source projects that can be useful to other people."
                  />
                </span>
                and
                <span className="inline-block px-2">
                  <Box
                    name="Competitive Programming"
                    more="I really like the idea of contributing new features to open source projects that can be useful to other people."
                  />
                </span>
              </p>
              <p className="text-gray-400 text-[15px]">
                When I'm not coding I play games with my friends, watch some
                show on Netflix, or if the weather's good, play Pubg! 
              </p>
            </div>
            <div>
              <Image
                src="https://avatars.githubusercontent.com/u/79178437?s=400&u=cff256e8ef77217e73d6645b4d4e4ce32f3f114b&v=4"
                alt="therogersak"
                width={400}
                height={400}
                className="rounded-full"
                objectFit="cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
}

export default About;
