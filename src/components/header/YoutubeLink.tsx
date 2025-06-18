import { cn } from '@/lib/utils';
import { VideoRecorder } from '@untitled-ui/icons-react';


const YoutubeLink = () => {
  return (
    <a
      href="https://www.youtube.com/playlist?list=PLj6NKZ2fu4uoT_D2sZSJtbT4cjT2RCOyW"
      rel="noopener noreferrer"
      target="_blank"
      className={cn(
        'text-white hover:text-blue-400 transition-colors font-medium text-base flex items-center gap-2 cursor-pointer',
        'hidden lg:flex'
      )}
    >
      Youtube
      <VideoRecorder width={16} height={16} />
    </a>
  );
};

export default YoutubeLink;
