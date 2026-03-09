import Footer from '@/components/footer';
import Header from '@/components/header';
import NotFoundIcon from '@/components/icons/NotFoundIcon';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const NotFound = () => {
  return (
    <>
      <Header />
      <main className="py-32 md:py-48 min-h-20 relative">
        <div className="container flex flex-col items-center justify-center gap-14 text-center">
          <div className="w-[318px] md:w-[636px] mx-auto">
            <NotFoundIcon />
          </div>
          <div className="flex flex-col items-center justify-center gap-6 prose md:prose-md">
            <h2>Page not found</h2>
            <p>The page you’re looking for doesn’t exist or has been moved.</p>
            <Link href="/">
              <Button variant="primaryOutline">Back to home</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
