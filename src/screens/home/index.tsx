import Banner from "@/components/banner";
import Soon from "@/components/soon";
import { DlButton, DlIcon, DlTabs } from "@alicorpdigital/dali-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Home } from "@/api";

const homeCtrl = new Home();

interface Video {
  attributes: {
    url: string;
    name: string;
  };
  id: string;
}

const HomePage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await homeCtrl.getHomeData();
      setVideos(data);
      setLoading(false);
    })();
  }, []);

  const formattedVideos = () => {
    const tabs = [
      {
        key: "calendario_semanal.mp4",
        title: "Calendario semanal",
      },
      {
        key: "rutina_comercial.mp4",
        title: "Rutina comercial ",
      },
      {
        key: "playbook_comercial.mp4",
        title: "Playbook",
      }
    ]

    return tabs.map((tab => {
      const video = videos.find(item => item.attributes.name === tab.key);
      return {
        ...tab,
        url: video?.attributes?.url
      }
    }))
  }

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
      {!loading &&
        <div className="dl-p-4 dl-container dl-mx-auto lg:dl-p-0 lg:dl-py-8">
          <DlTabs
            items={formattedVideos().map(video => {
              return {
                key: video.key,
                title: video.title,
                children: (
                  <div className="dl-flex dl-justify-center">
                    <video width="790" height="440" controls key={video.key}>
                      <source
                        src={video.url}
                        type="video/mp4"
                      />
                    </video>
                  </div>
                )
              }
            })}
          />
        </div>
      }
      <Soon />
    </>
  );
};

export default HomePage;
