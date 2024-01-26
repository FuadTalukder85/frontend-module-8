import BatteryReplacement from "@/components/ui/ServiceTiles/BatteryReplacement";
import ChipSetReplacement from "@/components/ui/ServiceTiles/ChipSetReplacement";
import DataRecovery from "@/components/ui/ServiceTiles/DataRecovery";
import Container from "@/components/layouts/Container";

const ServicesSection = () => {
  return (
    <Container className="my-40">
      <div className="text-center flex flex-col justify-between items-center">
        <h1>Service that we provide.</h1>
        <p className="max-w-[80ch] mt-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, est
          illum quia consequatur et omnis eius odio maxime delectus dicta
          veritatis voluptates amet .
        </p>
      </div>
      <div className="grid grid-cols-12 gap-[20px]">
        <BatteryReplacement></BatteryReplacement>
        <ChipSetReplacement></ChipSetReplacement>
        <DataRecovery></DataRecovery>

        <div className="bg-red-500 h-[415px] rounded-2xl col-span-12"></div>
        <div className="bg-red-500 h-[415px] rounded-2xl col-span-12 md:col-span-6 lg:col-span-4"></div>
        <div className="bg-red-500 h-[415px] rounded-2xl col-span-12 md:col-span-6 lg:col-span-4"></div>
        <div className="bg-red-500 h-[415px] rounded-2xl col-span-12 md:col-span-12 lg:col-span-4"></div>
      </div>
    </Container>
  );
};

export default ServicesSection;
