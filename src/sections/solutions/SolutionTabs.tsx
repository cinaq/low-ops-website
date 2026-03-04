'use client';

import adminAppsTableImage from '@/assets/admin-apps-table.png';
import deployDrawerImage from '@/assets/deploy-drawer.png';
import envOverviewImage from '@/assets/env-overview.png';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image, { StaticImageData } from 'next/image';
import { PiCheckCircle, PiCode, PiHardDrives, PiTarget } from 'react-icons/pi';

export type SolutionTabItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  items: string[];
  imagePath: StaticImageData;
};

const SOLUTIONS: SolutionTabItem[] = [
  {
    id: 'app-developers',
    label: 'App Developers',
    icon: PiCode({ size: 24, className: 'text-primary' }),
    imagePath: deployDrawerImage,
    title: 'Focus on building application we will take of the rest.',
    description:
      'Low-Ops take care of all aspect of application development. Whether it is application logs, monitoring, database, storage or infrastructure like crash recovery, ci/ci, replicas, deploy.',
    items: ['Self-service LCM', 'Ease of use', 'Any app frameworks'],
  },
  {
    id: 'visionary-leaders',
    label: 'Visionary Leaders',
    icon: PiTarget({ size: 24, className: 'text-primary' }),
    imagePath: adminAppsTableImage,
    title: 'Ship faster with confidence. We handle the operations.',
    description:
      'Spend time on product and strategy. Low-Ops manages deployment, scaling, monitoring and recovery so your team can focus on what matters.',
    items: [
      'Sovereignty & standard architecture',
      'Security Compliance & Zero trust',
      'Fast Go to market & AI ready',
    ],
  },
  {
    id: 'devops-engineers',
    label: 'DevOps Engineers',
    icon: PiHardDrives({ size: 24, className: 'text-primary' }),
    imagePath: envOverviewImage,
    title: 'Infrastructure as code. One platform for all environments.',
    description:
      'Define once, deploy anywhere. Low-Ops unifies dev, staging and production with consistent tooling and automation.',
    items: [
      'Low Maintenance',
      'Standard apps work out of box',
      'You focus on non-standard cases',
    ],
  },
];

const SolutionTabs = () => {
  const renderSolutionsTabs = () => {
    return SOLUTIONS.map((tab) => (
      <TabsTrigger
        key={tab.id}
        value={tab.id}
        className="flex-1 flex items-center justify-start gap-2 rounded-md border px-4 py-2.5 text-md font-medium data-[state=active]:border-0 data-[state=active]:bg-primary-500 data-[state=active]:text-white data-[state=active]:shadow-none bg-white cursor-pointer hover:border-primary"
      >
        <span className="flex items-center justify-center rounded-sm bg-gray-100 border border-gray-200 p-2">
          {tab.icon}
        </span>
        {tab.label}
      </TabsTrigger>
    ));
  };

  const renderSolutionsContent = () => {
    return SOLUTIONS.map((tab) => (
      <TabsContent key={tab.id} value={tab.id} className="mt-8">
        <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:gap-10 prose md:prose-md px-14 py-8">
          <div className="flex flex-col gap-6 py-4">
            <h3>{tab.title}</h3>
            <p className="font-sans text-base font-normal leading-relaxed text-neutral-500 m-0">
              {tab.description}
            </p>
            <ul className="grid gap-1 sm:grid-cols-2 p-0 m-0">
              {tab.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <PiCheckCircle size={22} className="text-primary" />
                  <span className="font-sans font-medium text-neutral-500">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative max-w-full max-h-[350px] border border-gray-200 rounded-xl overflow-hidden">
            <Image
              src={tab.imagePath}
              alt={tab.title}
              quality={100}
              className="object-cover object-center"
            />
          </div>
        </div>
      </TabsContent>
    ));
  };

  return (
    <Card className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
      <Tabs defaultValue={SOLUTIONS[0].id} className="w-full">
        <TabsList className="mb-0 h-auto w-full justify-between gap-2 rounded-lg border border-gray-200 bg-gray-100/80 p-1.5">
          {renderSolutionsTabs()}
        </TabsList>

        {renderSolutionsContent()}
      </Tabs>
    </Card>
  );
};

export default SolutionTabs;
