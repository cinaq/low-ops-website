import FirstDecoration from '@/components/FirstDecoration';
import { SpiderWebIcon } from '@/components/icons';
import CircleRectangleIcon from '@/components/icons/CircleRectangleIcon';
import SecondDecoration from '@/components/SecondDecortion';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import { PiAddressBook, PiPaperPlaneTilt, PiUser } from 'react-icons/pi';

const CTASection = () => {
  return (
    <section id="cta" className="py-20 md:py-28 px-4">
      <div className="container flex flex-col items-center gap-6 md:gap-10 bg-primary/5 rounded-lg p-10 lg:p-20 border border-primary/20 relative overflow-hidden">
        <SectionTitle
          subtitle="Get Started Today"
          title="Ready to supercharge your workflow?"
          description="Join hundreds of teams already shipping faster with streamlined collaboration, automated pipelines, and real-time visibility."
        />

        <div className="flex items-center justify-center gap-4 flex-col lg:flex-row">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Button variant="primaryOutline">
              <PiAddressBook size={22} />
              VIP Access
            </Button>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Button variant="primaryOutline">
              <PiPaperPlaneTilt size={22} />
              Free Tier
            </Button>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Button variant="primaryOutline">
              <PiUser size={22} />
              Personal Demo
            </Button>
          </a>
        </div>

        <div className="absolute -top-[150px] -left-[230px] tranform rotate-180 text-primary/50 hidden md:block">
          <SpiderWebIcon />
        </div>
        <div className="absolute -bottom-[150px] -right-[230px] text-primary/50 hidden md:block">
          <SpiderWebIcon />
        </div>
        <div className="absolute top-10 right-10 hidden md:block">
          <CircleRectangleIcon />
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 left-10 hidden xl:block">
          <FirstDecoration />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-10 hidden xl:block">
          <SecondDecoration />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
