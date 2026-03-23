import { Card } from '@/components/ui/card';
import { TeamMember } from '@/data/about-us';
import Image from 'next/image';
import { PiGithubLogoFill, PiLinkedinLogoFill } from 'react-icons/pi';

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard = ({ member }: TeamMemberCardProps) => {
  return (
    <Card className="relative bg-gray-200 p-0 group overflow-hidden">
      <div className="relative w-full flex items-center justify-center">
        <div className="overflow-hidden w-[300px] h-[400px] relative">
          <Image
            src={member.image}
            alt={`${member.name} - ${member.position}`}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="p-6 w-full bg-white rounded-lg flex flex-col items-center gap-1 absolute bottom-2 left-0 right-0 mx-auto max-w-70 translate-y-0 opacity-100 border border-primary/30 transition-all duration-300 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:translate-y-3 [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-hover:translate-y-0">
        <h5 className="font-semibold">{member.name}</h5>
        <p className="text-sm font-sans font-light">{member.position}</p>
        <p className="text-sm font-sans font-light">{member.bio}</p>

        <div className="flex items-center gap-2 pt-2">
          {member.social.linkedin && (
            <a
              href={member.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="w-[27px] h-[27px] relative hover:scale-105 transition-transform"
            >
              <PiLinkedinLogoFill size={27} className="text-primary" />
            </a>
          )}

          {member.social.github && (
            <a
              href={member.social.github}
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[26px] h-[26px] relative hover:scale-105 transition-transform"
            >
              <PiGithubLogoFill size={26} className="text-primary" />
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};

export default TeamMemberCard;
