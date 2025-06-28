import { teamMembers } from '@/data/team';
import SectionTitle from '@/components/SectionTitle';
import TeamMemberCard from './TeamMemberCard';

interface TeamSectionProps {
  classes?: string;
}

const TeamSection = ({ classes = '' }: TeamSectionProps) => {
  return (
    <section className={`py-16 ${classes}`}>
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Meet Our Team"
          description="Our team of experts is passionate about making cloud infrastructure simple and accessible for everyone."
          className="text-center"
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection; 