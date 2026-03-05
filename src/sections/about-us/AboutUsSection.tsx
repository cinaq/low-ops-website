import SectionTitle from '@/components/SectionTitle';
import { teamMembers } from '@/data/about-us';
import TeamMemberCard from './TeamMemberCard';

const AboutUsSection = () => {
  return (
    <section id="about-us" className="py-20 md:py-28">
      <div className="container flex flex-col items-center gap-12 md:gap-20">
        <SectionTitle
          subtitle="Meet Our Experts"
          title="Dedicated Experts Team"
          description="Our team consists of experienced professionals dedicated to innovation and excellence. With expertise in various domains."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
