'use client';

import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { cn } from '@/lib/utils';

const COLUMNS = [
  { id: 'custom', label: 'Custom Build', sub: 'Mix & match open-source tools' },
  {
    id: 'hosted',
    label: 'Hosted Control Plane',
    sub: 'Qovery, Porter, Flightcontrol',
  },
  {
    id: 'saas',
    label: 'SaaS / Cloud PaaS',
    sub: 'Heroku, Render, Vercel, Railway',
  },
  { id: 'offtheshelf', label: 'Off-the-Shelf', sub: 'Low Ops' },
] as const;

const COMPARISON_ROWS: Array<{
  criteria: string;
  custom: string;
  hosted: string;
  saas: string;
  offtheshelf: string;
}> = [
  {
    criteria: 'DevOps / CI/CD',
    custom: 'Self-managed (e.g. GitLab, Gitea)',
    hosted: 'Bring your own CI/CD',
    saas: 'Bring your own CI/CD',
    offtheshelf: 'Included with automated CI/CD',
  },
  {
    criteria: 'Internal Developer Portal',
    custom: 'Optional (e.g. Backstage)',
    hosted: 'Included',
    saas: 'Included',
    offtheshelf: 'Included (app management built-in)',
  },
  {
    criteria: 'Monitoring',
    custom: 'Any tool (self-integrated)',
    hosted: 'Sometimes included',
    saas: 'Bring your own (e.g. Datadog)',
    offtheshelf: 'Built-in (OpenTelemetry, Prometheus, Grafana stack)',
  },
  {
    criteria: 'Database',
    custom: 'Any',
    hosted: 'Your choice',
    saas: 'Sometimes included',
    offtheshelf: 'PostgreSQL included',
  },
  {
    criteria: 'Object Storage',
    custom: 'Any',
    hosted: 'Your choice',
    saas: 'Sometimes included',
    offtheshelf: 'S3-compatible storage',
  },
  {
    criteria: 'Disaster Recovery',
    custom: 'High effort (fully your responsibility)',
    hosted: 'High effort (your responsibility)',
    saas: 'Sometimes included',
    offtheshelf: 'Included (e.g. with Kanister)',
  },
  {
    criteria: 'Container Platform',
    custom: 'Any',
    hosted: 'Mostly Kubernetes-based',
    saas: 'Included (abstracted)',
    offtheshelf: 'Kubernetes-based',
  },
  {
    criteria: 'Control Plane',
    custom: 'Self-managed',
    hosted: 'SaaS',
    saas: 'SaaS',
    offtheshelf: 'Self-hosted',
  },
  {
    criteria: 'Private Infrastructure',
    custom: 'Yes',
    hosted: 'Yes',
    saas: 'No',
    offtheshelf: 'Yes (including control plane)',
  },
  {
    criteria: 'Flexibility',
    custom: 'Very high (full control)',
    hosted: 'High (choose infra provider)',
    saas: 'Medium (platform constraints)',
    offtheshelf: 'High',
  },
  {
    criteria: 'Total Cost of Ownership',
    custom: 'Low license cost, high labor & maintenance',
    hosted: 'High license cost, high devops responsibility',
    saas: 'Very high recurring costs',
    offtheshelf: 'Medium cost, minimal maintenance',
  },
];

const ComparisonSection = () => {
  const renderColumns = () => {
    return COLUMNS.map((col) => (
      <TableHead
        key={col.id}
        className={cn(
          'min-w-[160px] font-semibold text-foreground py-4 px-3',
          'align-top border-r border-primary/20 last:border-r-0'
        )}
      >
        <span className="block">{col.label}</span>
        <span className="block text-xs font-normal text-muted-foreground mt-0.5">
          {col.sub}
        </span>
      </TableHead>
    ));
  };

  const renderRows = () => {
    return COMPARISON_ROWS.map((row) => (
      <TableRow key={row.criteria} className="border-primary/10">
        <TableCell className="font-medium text-foreground min-w-[140px] py-3 px-4 border-r border-primary/20 last:border-r-0">
          {row.criteria}
        </TableCell>
        <TableCell className="min-w-[160px] text-muted-foreground whitespace-normal py-3 px-3 border-r border-primary/20 last:border-r-0">
          {row.custom}
        </TableCell>
        <TableCell className="min-w-[160px] text-muted-foreground whitespace-normal py-3 px-3 border-r border-primary/20 last:border-r-0">
          {row.hosted}
        </TableCell>
        <TableCell className="min-w-[160px] text-muted-foreground whitespace-normal py-3 px-3 border-r border-primary/20 last:border-r-0">
          {row.saas}
        </TableCell>
        <TableCell className="min-w-[160px] text-muted-foreground whitespace-normal py-3 px-3 border-r border-primary/20 last:border-r-0">
          {row.offtheshelf}
        </TableCell>
      </TableRow>
    ));
  };

  const renderMobileCards = () => {
    return COMPARISON_ROWS.map((row) => (
      <Card key={row.criteria} className="overflow-hidden">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-semibold">
            {row.criteria}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0 space-y-3">
          {COLUMNS.map((col) => (
            <div
              key={col.id}
              className="flex flex-col gap-0.5 border-b border-primary/10 pb-3 last:border-0 last:pb-0"
            >
              <span className="text-xs font-medium text-muted-foreground">
                {col.label}
                {col.sub ? ` (${col.sub})` : ''}
              </span>
              <span className="text-sm text-foreground">{row[col.id]}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    ));
  };

  return (
    <section className="w-full py-20 md:py-28">
      <div className="container flex flex-col gap-12 md:gap-20">
        <SectionTitle
          subtitle="Comparison"
          title="Our comparisons"
          description="Compare our product with our competitors"
        />
        <div className="hidden md:block overflow-x-auto rounded-lg border border-primary/30 bg-card">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50 hover:bg-muted/50">
                <TableHead className="min-w-[140px] font-semibold text-foreground py-4 px-4 border-r border-primary/20 last:border-r-0">
                  Criteria
                </TableHead>
                {renderColumns()}
              </TableRow>
            </TableHeader>
            <TableBody>{renderRows()}</TableBody>
          </Table>
        </div>

        <div className="flex flex-col gap-4 md:hidden">
          {renderMobileCards()}
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
