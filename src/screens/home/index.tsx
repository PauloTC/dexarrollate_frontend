'use client';
import Banner from "@/components/banner";
import Soon from "@/components/soon";
import Resources from "@/components/resources";
import { DlTabs } from "@alicorpdigital/dali-react";
import { Home } from "@/api";
import { useAuth } from '@/hooks';
import React, { useEffect, useState } from "react";
import { UserType } from '@/utils/enums/user';

const homeCtrl = new Home();

interface Video {
  attributes: {
    url: string;
    name: string;
  };
  id: string;
}

const HomePage = () => {
  const { position } = useAuth();
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
      },
    ];

    return tabs.map((tab) => {
      const video = videos.find((item) => item.attributes.name === tab.key);
      return {
        ...tab,
        url: video?.attributes?.url,
      };
    });
  };

  return (
    <>
      <Banner />
      <Resources />
      {!loading && (
        <div className="dl-p-4 dl-container dl-mx-auto lg:dl-p-0 lg:dl-py-10">
          <DlTabs
            items={formattedVideos().map((video) => {
              return {
                key: video.key,
                title: video.title,
                children: (
                  <div className="dl-flex dl-justify-center">
                    <video width="790" height="440" controls key={video.key}>
                      <source src={video.url} type="video/mp4" />
                    </video>
                  </div>
                ),
              };
            })}
          />
        </div>
      )}
      {position === UserType.Seller && <Soon />}
    </>
  );
};

export default HomePage;
