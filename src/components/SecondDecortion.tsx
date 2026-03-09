import chart2DecoImage from '@/assets/chart2-deco.png';
import envOverviewDecoImage from '@/assets/env-overview-deco.png';
import Image from 'next/image';
import { Card } from './ui/card';

const SecondDecoration = () => {
  return (
    <div className="relative">
      <Card className="bg-white p-1 rounded-sm relative transform rotate-15 w-[280px] h-[200px] aspect-video z-10 mb-2 border-none">
        <Image src={chart2DecoImage} alt="First Decoration" fill />
      </Card>
      <Card className="bg-white p-1 rounded-sm relative w-[200px] h-[40px] aspect-video z-20 mx-auto border-none">
        <Image src={envOverviewDecoImage} alt="First Decoration" fill />
      </Card>
    </div>
  );
};

export default SecondDecoration;
