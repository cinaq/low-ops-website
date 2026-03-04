import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import { PiAddressBook, PiPaperPlaneTilt, PiUser } from 'react-icons/pi';

const CTASection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container flex flex-col items-center gap-6 md:gap-10 bg-primary/5 rounded-lg p-20 border border-primary/20">
        <SectionTitle
          subtitle="Get Started Today"
          title="Ready to supercharge your workflow?"
          description="Join hundreds of teams already shipping faster with streamlined collaboration, automated pipelines, and real-time visibility."
        />

        <div className="flex items-center justify-center gap-4">
          <Button variant="primaryOutline">
            <PiAddressBook size={22} />
            VIP Access
          </Button>
          <Button variant="primaryOutline">
            <PiPaperPlaneTilt size={22} />
            Free Tier
          </Button>
          <Button variant="primaryOutline">
            <PiUser size={22} />
            Personal Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
