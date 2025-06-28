import Footer from '@/components/footer';
import Header from '@/components/header';
import TeamSection from '@/sections/team/TeamSection';

const TeamPage = () => {
  return (
    <>
      <Header classes="border-b border-gray-100" />
      <main className="min-h-screen w-full pt-[120px] pb-[40px]">
        <div className="container">
          <h1 className="text-3xl font-medium text-center mb-10">
            Our Team
          </h1>
          
          <TeamSection />
        </div>
      </main>
      <Footer classes="border-t border-gray-100" />
    </>
  );
};

export default TeamPage; 