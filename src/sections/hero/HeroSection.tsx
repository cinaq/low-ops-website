import heroImage from '@/assets/hero-image.png';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LinkExternal02 } from '@untitled-ui/icons-react';
import Image from 'next/image';
import { FC } from 'react';

const HeroSection: FC = () => {
  return (
    <section
      className={cn(
        'hero-section w-full pt-[170px] min-h-screen bg-no-repeat bg-center',
        `bg-[url('../assets/hero-bg.svg')]`
      )}
      id="hero"
    >
      <div className="container flex flex-col items-center justify-center">
        <div className="prose mb-10 flex flex-col items-center justify-center">
          <h1 className="text-center max-w-[856px]">
            Private Cloud Infrastructure for Mendix
          </h1>
          <p className="text-center max-w-[564px] text-xl text-gray-600 font-light">
            Low-Ops is an Internal Developer Platform (IDP) for private clouds,
            managing Mendix app development, deployment, scaling, and security,
            so you can focus on building.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 mb-14">
          <Button variant="secondary" size="lg">
            <LinkExternal02 width={18} height={18} className="mr-2" />
            Demo
          </Button>
          <Button size="lg">Contact us</Button>
        </div>

        <Image
          src={heroImage}
          alt="lowops-portal-screen"
          quality={100}
          objectFit="cover"
          priority
        />
      </div>
    </section>
  );
};

export default HeroSection;
