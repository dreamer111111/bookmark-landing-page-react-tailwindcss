import { useState } from "react";
import TabPanel from "./TabPanel";
import Container from "../../components/ui/Container";
import { FEATURES_DATA } from "../../data/siteData";

const TabGroup = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative overflow-x-clip" id="features">
      <div className="absolute top-[50%] md:top-[80%] left-0 bg-brand-blue w-[80%] md:w-[42%] h-60 md:h-80 rounded-r-full -z-10 translate-y-0 md:translate-y-[-50%]" />

      <Container>
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium text-brand-dark mb-6">
            Features
          </h2>
          <p className="text-brand-gray max-w-lg mx-auto">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so
            you can access them on the go.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-col md:flex-row max-w-2xl mx-auto mb-16 border-t md:border-t-0 border-gray-200">
          {FEATURES_DATA.map((feature, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`relative py-6 md:flex-1 text-center border-b border-gray-200 text-lg transition-colors duration-300 hover:text-brand-red ${
                activeTab === index ? "text-brand-dark" : "text-brand-gray"
              }`}
            >
              {feature.tab}
              {activeTab === index && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full md:w-[80%] h-1 bg-brand-red" />
              )}
            </button>
          ))}
        </div>

        {/* Display Panel */}
        <TabPanel feature={FEATURES_DATA[activeTab]} />
      </Container>
    </section>
  );
};

export default TabGroup;
