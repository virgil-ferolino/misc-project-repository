import { DashCard, DashCardBody, DashCardTitle } from "@/components";

const Dashboard = () => {
  const renderPersonalDetails = () => {
    return (
      <div className="w-full flex flex-col justify-between gap-5">
        <DashCard className="hover:scale-[101%] active:scale-100 hover:bg-slate-700 text-center transition-all duration-150">
          <DashCardBody
            role="button"
            className="text-4xl  cursor-pointer flex justify-center"
          >
            PERSONAL INFORMATION
          </DashCardBody>
        </DashCard>
        <DashCard className="hover:scale-[101%] active:scale-100 hover:bg-slate-700 text-center transition-all duration-150">
          <DashCardBody
            role="button"
            className="text-4xl  cursor-pointer flex justify-center"
          >
            DOWNLOAD RESUME
          </DashCardBody>
        </DashCard>
        <DashCard className="hover:scale-[101%] active:scale-100 hover:bg-slate-700 text-center transition-all duration-150">
          <DashCardBody
            role="button"
            className="text-4xl  cursor-pointer flex justify-center"
          >
            WORK HISTORY / EXPERIENCE
          </DashCardBody>
        </DashCard>
      </div>
    );
  };

  const renderBusinessCardGenerator = () => {
    return (
      <DashCard className="">
        <DashCardTitle>
          <div className="flex flex-col p-5">
            <p className="text-base text-slate-300">Sample Project #1</p>
            <p className="text-xl">BUSINESS CARD GENERATOR</p>
          </div>
        </DashCardTitle>
        <DashCardBody className="bg-slate-950">
          
        </DashCardBody>
      </DashCard>
    );
  };
  return (
    <div className="space-y-16">
      <header className="text-5xl font-bold">DASHBOARD</header>

      <div className="grid grid-cols-2 gap-5">
        {renderPersonalDetails()}
        {renderBusinessCardGenerator()}
      </div>
    </div>
  );
};

export default Dashboard;
