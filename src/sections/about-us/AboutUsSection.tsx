import SectionTitle from '@/components/SectionTitle';
import { teamMembers } from '@/data/about-us';
import TeamMemberCard from './TeamMemberCard';

const AboutUsSection = () => {
  return (
    <section id="about-us" className="py-20 md:py-28">
      <div className="container flex flex-col items-center gap-12 md:gap-20">
        <SectionTitle
          subtitle="Meet Our Team"
          title="IT Professionals"
          description="Our team consists of experienced professionals dedicated to innovation and excellence. We specialize in private cloud infrastructure, SRE, platform engineering, DevOps, and application development."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
        <div className="w-full max-w-3xl">
          <blockquote className="rounded-2xl px-6 py-8 text-center">
            <p className="text-lg font-sans font-light leading-relaxed text-slate-700 md:text-xl">
              With over 20 years of experience in the IT industry, we have seen many
              organizations struggle to deploy and manage applications in their
              private clouds and on-premises environments. From the lack of tools to
              the complexity of the infrastructure, we have seen it all. 
              <br />
              <br />
              
              Today, in the age of Generative AI, we need to be able to deploy applications faster, easier and more importantly securely than ever before. No compromises.
              <br />
              <br />
              Everybody should be able to participate in creating and delivering innovative solutions within their organization. No more silos. No more waiting for approvals. No more excuses.
              
            </p>
            <div className="mt-6 text-base font-sans text-slate-900 md:text-lg">
              <span className="font-medium">Steven (Xiwen) Cheng</span>
              <br />
              <span className="text-sm uppercase tracking-wide text-slate-500">
                CEO & Founder
              </span>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
