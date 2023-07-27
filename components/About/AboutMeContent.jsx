import React from "react";
import Image from "next/image";
import heroImage from "../../public/assets/myAvatar.svg";

const AboutMeContent = () => {
  return (
    <div className="flex flex-col gap-5 overflow-y-auto">
      <div className="flex flex-col gap-2 text-slate-100 text-center">
        <p className="text-sm md:text-lg lg:text-xl font-semibold">
          I am a Computer Science Grad with a Masters in Information Technology
          from The University of Texas Rio Grande Valley and I have 2 years of
          experience working as a Web Developer/ Digital Marketing Assistant at
          UTRGV.
        </p>
        <p className="text-sm md:text-lg lg:text-xl font-semibold">
          My educational background and professional experience have given me a
          strong foundation in web development and digital marketing, as well as
          an understanding of the latest technologies and trends in the
          industry. I am passionate about using my skills to create engaging and
          user-friendly websites, and I'm constantly seeking new opportunities
          to learn and grow in my field. I'm a fast learner, hard worker, and
          team player who is dedicated to delivering high-quality results. I am
          excited to continue my career as a web developer and digital marketer,
          and look forward to the challenges and opportunities that lie ahead.
        </p>
      </div>
      <div className="flex justify-center w-full h-full">
        <Image
          src={heroImage}
          alt="Hero image"
          width={150}
          heigth={150}
          className=""
        />
      </div>
    </div>
  );
};

export default AboutMeContent;
