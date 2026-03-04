import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import { Award01, Send01, User03 } from '@untitled-ui/icons-react';

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
            <Award01 className="w-5 h-5" />
            VIP Access
          </Button>
          <Button variant="primaryOutline">
            <Send01 className="w-5 h-5" />
            Free Tier
          </Button>
          <Button variant="primaryOutline">
            <User03 className="w-5 h-5" />
            Personal Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
