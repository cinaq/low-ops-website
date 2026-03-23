import { PiGaugeFill, PiThumbsUpFill, PiUserPlusFill } from 'react-icons/pi';

export const roadmapSteps = [
  {
    step: '01',
    title: 'Login to Low-Ops',
    description:
      'Create your application in minutes by choosing a template and name.',
    Icon: PiUserPlusFill,
    iconPosition: 'below' as const,
    positionClasses: `xl:top-[142px]`,
  },
  {
    step: '02',
    title: 'Checkout codebase',
    description:
      'Open your app source code in your favorite IDE and start building your application.',
    Icon: PiGaugeFill,
    iconPosition: 'above' as const,
    positionClasses: `xl:top-[16px] xl:right-[45px]`,
  },
  {
    step: '03',
    title: 'Deploy ',
    description: 'Deploy your application to your environment with a few clicks. So that your colleagues can access it.',
    Icon: PiThumbsUpFill,
    iconPosition: 'below' as const,
    positionClasses: `xl:top-[138px] xl:right-[25px]`,
  },
];
