import Image from 'next/image';
import { TeamMember } from '@/data/team';
import linkedinIcon from '@/assets/linkedin2.svg';
import githubIcon from '@/assets/github2.svg';

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard = ({ member }: TeamMemberCardProps) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative w-full h-64 flex items-center justify-center">
        <div className="rounded-full overflow-hidden h-48 w-48 relative">
          <Image
            src={member.image}
            alt={`${member.name} - ${member.position}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
      
      <div className="p-6 w-full">
        <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
        <p className="text-sm text-blue-600 mb-3">{member.position}</p>
        <p className="text-gray-600 mb-4 text-sm">{member.bio}</p>
        
        <div className="flex space-x-4">
          {member.social.linkedin && (
            <a 
              href={member.social.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              title="LinkedIn"
              className="w-[20px] h-[20px] relative"
            >
              <Image 
                src={linkedinIcon} 
                alt="LinkedIn" 
                fill 
                className="object-contain invert" 
              />
            </a>
          )}
          
          {member.social.github && (
            <a 
              href={member.social.github} 
              title="GitHub"
              target="_blank" 
              rel="noopener noreferrer"
              className="w-[20px] h-[20px] relative"
            >
              <Image 
                src={githubIcon} 
                alt="GitHub" 
                fill 
                className="object-contain invert" 
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard; 