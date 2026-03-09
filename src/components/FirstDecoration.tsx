import alertsDecoImage from '@/assets/alerts-deco.png';
import templatesDecoImage from '@/assets/templates-deco.png';
import Image from 'next/image';
import { Card } from './ui/card';

const FirstDecoration = () => {
  return (
    <div className="relative">
      <Card className="bg-white p-1 rounded-sm relative transform -rotate-15 w-[300px] h-[120px] aspect-video -mb-10 z-10 border-none">
        <Image src={alertsDecoImage} alt="First Decoration" fill />
      </Card>
      <Card className="bg-white p-1 rounded-sm relative w-[160px] h-[213px] aspect-video z-20 mx-auto border-none">
        <Image src={templatesDecoImage} alt="First Decoration" fill />
      </Card>
    </div>
  );
};

export default FirstDecoration;
