import { PiGaugeFill, PiThumbsUpFill, PiUserPlusFill } from 'react-icons/pi';

export const roadmapSteps = [
  {
    step: '01',
    title: 'Sign Up & Setup',
    description:
      'Create your account and complete the initial configuration in minutes.',
    Icon: PiUserPlusFill,
    iconPosition: 'below' as const,
    positionClasses: `top-[142px]`,
  },
  {
    step: '02',
    title: 'Customize & Optimize',
    description:
      'Tailor the platform to your needs and optimize your workflow.',
    Icon: PiGaugeFill,
    iconPosition: 'above' as const,
    positionClasses: `top-[16px] right-[45px]`,
  },
  {
    step: '03',
    title: 'Launch & Succeed',
    description: 'Go live with confidence and grow with our support.',
    Icon: PiThumbsUpFill,
    iconPosition: 'below' as const,
    positionClasses: `top-[138px] right-[25px]`,
  },
];
