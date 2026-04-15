
import React from 'react';
import Container from '../../components/ui/Container';
import DownloadCard from './DownloadCard';
import { DOWNLOAD_DATA } from '../../data/siteData';

const Download = () => {
  const desktopMargins = ["md:mt-0", "md:mt-10", "md:mt-20"];

  return (
    <section className="py-20" id="download">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-brand-dark mb-6">
            Download the extension
          </h2>
          <p className="text-brand-gray max-w-lg mx-auto">
            We’ve got more browsers in the pipeline. Please do let us know if 
            you’ve got a favourite you’d like us to prioritize.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {DOWNLOAD_DATA.map((item, index) => (
            <DownloadCard
              key={item.browser}
              browser={item.browser}
              version={item.minVersion}
              img={item.img}
              className={desktopMargins[index]}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Download;