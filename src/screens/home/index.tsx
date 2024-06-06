import Banner from "@/components/banner";
import Soon from "@/components/soon";
import { DlButton, DlIcon, DlTabs } from "@alicorpdigital/dali-react";
import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Banner />
      <div className="dl-p-4 dl-container dl-mx-auto lg:dl-p-0 lg:dl-py-8">
        <h4 className="dl-subtitle-xxs mb-1">Manual de aprendizaje</h4>
        <p className="dl-comp-text-nano lg:dl-text-base">
          Texto breve descriptivo para dar contexto de esta sección
        </p>

        <div className="dl-mt-6 dl-grid dl-gap-2 lg:dl-grid-cols-3 lg:dl-gap-6">
          <div className="dl-p-4 rounded-lg dl-flex dl-gap-6 dl-border dl-border-neutral-medium dl-bg-neutral-lightest">
            <div className="dl-min-w-24 dl-flex dl-items-center dl-relative">
              <Image alt="file" fill sizes="100vw" src="/home/file.jpg" />
            </div>
            <div className="dl-flex dl-flex-col dl-w-full">
              <p className="dl-body-nano dl-text-gray-500">Documento PDF</p>
              <h4 className="dl-body-nano-bold dl-mb-2">Manual de inicio</h4>

              <DlButton
                className="dl-ml-auto"
                variant="highlight"
                size="sm"
                icon={<DlIcon name="download" />}
              >
                Descargar
              </DlButton>
            </div>
          </div>
          <div className="dl-p-4 rounded-lg dl-flex dl-gap-6 dl-border dl-border-neutral-medium dl-bg-neutral-lightest">
            <div className="dl-min-w-24 dl-flex dl-items-center dl-relative">
              <Image alt="file" fill sizes="100vw" src="/home/file.jpg" />
            </div>
            <div className="dl-flex dl-flex-col dl-w-full">
              <p className="dl-body-nano dl-text-gray-500">Documento PDF</p>
              <h4 className="dl-body-nano-bold dl-mb-2">Manual de inicio</h4>

              <DlButton
                className="dl-ml-auto"
                variant="highlight"
                size="sm"
                icon={<DlIcon name="download" />}
              >
                Descargar
              </DlButton>
            </div>
          </div>
          <div className="dl-p-4 rounded-lg dl-flex dl-gap-6 dl-border dl-border-neutral-medium dl-bg-neutral-lightest">
            <div className="dl-min-w-24 dl-flex dl-items-center dl-relative">
              <Image alt="file" fill sizes="100vw" src="/home/file.jpg" />
            </div>
            <div className="dl-flex dl-flex-col dl-w-full">
              <p className="dl-body-nano dl-text-gray-500">Documento PDF</p>
              <h4 className="dl-body-nano-bold dl-mb-2">Manual de inicio</h4>

              <DlButton
                className="dl-ml-auto"
                variant="highlight"
                size="sm"
                icon={<DlIcon name="download" />}
              >
                Descargar
              </DlButton>
            </div>
          </div>
        </div>
      </div>
      <div className="dl-p-4 dl-container dl-mx-auto lg:dl-p-0 lg:dl-py-8">
        <DlTabs
          items={[
            {
              children: (
                <div className="dl-flex dl-justify-center">
                  <video width="790" height="440" controls>
                    <source
                      src="http://localhost:1337/uploads/calendario_semanal_e633475c67.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              ),
              key: "calendario-semanal",
              title: "Calendario semanal",
            },
            {
              children: (
                <div className="dl-flex dl-justify-center">
                  <video width="790" height="440" controls>
                    <source
                      src="http://localhost:1337/uploads/calendario_semanal_e633475c67.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              ),
              key: "rutina-comercial",
              title: "Rutina comercial ",
            },
            {
              children: "Tab 3 content",
              key: "playbook",
              title: "Playbook",
            },
          ]}
        />
      </div>
      <Soon />
    </>
  );
};

export default HomePage;
