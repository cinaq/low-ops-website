import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Check, Circle, X } from 'lucide-react';
import { Badge } from './ui/badge';
import { Card } from './ui/card';

const LicenseComparisonTable = () => {
  return (
    <Card className="w-full overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead></TableHead>
            <TableHead className="font-bold text-xl py-3 text-center">
              Starter
            </TableHead>
            <TableHead className="font-bold text-xl py-3 text-center">
              Professional
            </TableHead>
            <TableHead className="font-bold text-xl py-3 text-center">
              Enterprise
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="p-3 font-medium max-w-[70px] text-md">
              Support
            </TableCell>
            <TableCell className="py-3">
              <Badge
                variant="secondaryOutline"
                className="flex items-center justify-center gap-1 w-fit mx-auto"
              >
                <Circle
                  width={10}
                  height={10}
                  className="text-gray-400 fill-gray-300"
                />
                Best effort
              </Badge>
            </TableCell>
            <TableCell className="py-3">
              <Badge
                variant="secondaryOutline"
                className="flex items-center justify-center gap-1 w-fit mx-auto"
              >
                <Circle
                  width={10}
                  height={10}
                  className="text-orange-400 fill-orange-300"
                />
                Standard
              </Badge>
            </TableCell>
            <TableCell className="py-3">
              <Badge
                variant="secondaryOutline"
                className="flex items-center justify-center gap-1 w-fit mx-auto"
              >
                <Circle
                  width={10}
                  height={10}
                  className="text-primary-400 fill-primary-300"
                />
                Premium
              </Badge>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="p-3 font-medium max-w-[70px] text-md">
              Highly available
            </TableCell>
            <TableCell className="py-3 text-center">
              <div className="flex items-center justify-center gap-1">
                <X width={15} height={15} className="text-red-500" />
                No
              </div>
            </TableCell>
            <TableCell className="py-3 text-center">
              <div className="flex items-center justify-center gap-1">
                <X width={15} height={15} className="text-red-500" />
                No
              </div>
            </TableCell>
            <TableCell className="py-3 text-center">
              <div className="flex items-center justify-center gap-1">
                <Check width={16} height={16} className="text-green-500" />
                Yes
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="p-3 font-medium max-w-[70px] text-md">
              Commercial
            </TableCell>
            <TableCell className="py-3 text-center">
              <div className="flex items-center justify-center gap-1">
                <X width={15} height={15} className="text-red-500" />
                No
              </div>
            </TableCell>
            <TableCell className="py-3 text-center">
              <div className="flex items-center justify-center gap-1">
                <Check width={16} height={16} className="text-green-500" />
                Yes
              </div>
            </TableCell>
            <TableCell className="py-3 text-center">
              <div className="flex items-center justify-center gap-1">
                <Check width={16} height={16} className="text-green-500" />
                Yes
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  );
};

export default LicenseComparisonTable;
