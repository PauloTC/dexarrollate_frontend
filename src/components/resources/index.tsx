import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Resource } from "@/api";
import { useAuth } from "@/hooks/useAuth";
import { DlIcon } from "@alicorpdigital/dali-react";

const resourceCtrl = new Resource();

interface Document {
  attributes: {
    type: string;
    title: string;
    file: {
      data: {
        attributes: {
          ext: string;
          url: string;
        };
      };
    };
  };
}

const Resources = () => {
  const [resources, setResources] = useState<any[]>([]);

  const { position, isLoading } = useAuth();

  useEffect(() => {
    (async () => {
      let resources = await resourceCtrl.getAllResources(position);

      setResources(resources.data);
    })();
  }, [position]);

  function getFileType(ext: string) {
    let fileType = "";

    switch (ext) {
      case ".xlsx":
        fileType = "Excel";
        break;
      case ".pdf":
        fileType = "Pdf";
        break;
      default:
        fileType = ext.substring(1);
    }

    return fileType;
  }

  function getIllustration(type: string) {
    let illustration = "";

    switch (type) {
      case "manual":
        illustration = "/home/book.png";
        break;
      case "calendario":
        illustration = "/home/calendar.png";
        break;
      default:
        illustration = "/home/list.png";
    }

    return illustration;
  }

  return (
    <>
      <div
        className={`dl-transition-opacity dl-duration-500 ${
          isLoading
            ? "dl-visible dl-opacity-100"
            : "dl-invisible dl-opacity-0 dl-hidden"
        }`}
      >
        <div className="dl-py-4 dl-container dl-mx-auto lg:dl-py-8">
          <div className="dl-w-48 dl-bg-gray-200 dl-h-4 dl-animate-skeleton dl-mb-3 dl-rounded-lg"></div>
          <div className="dl-w-72 dl-bg-gray-200 dl-h-4 dl-animate-skeleton dl-rounded-lg"></div>
          <ul className="dl-mt-6 dl-grid dl-gap-2 lg:dl-grid-cols-3 lg:dl-gap-6">
            {Array.from({ length: 3 }).map((_, index) => (
              <li
                key={index}
                className="dl-flex-col dl-flex dl-justify-around dl-p-4 dl-h-40 rounded-lg dl-gap-6 dl-border dl-border-neutral-medium dl-bg-neutral-lightest"
              >
                {Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={index}
                    className="dl-w-72 dl-bg-gray-200 dl-h-4 dl-animate-skeleton dl-rounded-lg"
                  ></div>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={`dl-transition-opacity dl-duration-500 ${
          isLoading
            ? "dl-invisible dl-opacity-0 dl-hidden"
            : "dl-visible dl-opacity-100 dl-block"
        }`}
      >
        {resources.map((resource, index) => {
          const { title, subtitle, documents } = resource.attributes;

          return (
            <div
              key={index}
              className="dl-py-4 dl-container dl-mx-auto lg:dl-py-8"
            >
              <h4 className="dl-subtitle-xxs mb-1">{title}</h4>
              <p className="dl-comp-text-nano lg:dl-text-base">{subtitle}</p>

              <div className="dl-mt-6 dl-grid dl-grid-cols-resources-3 dl-gap-2">
                {documents.data.map((document: Document, index: number) => {
                  const { type, title } = document.attributes;
                  const file = document.attributes.file.data.attributes;
                  const isPdf = file.ext === ".pdf";
                  let fileType = getFileType(file.ext);
                  let illustration = getIllustration(type);

                  return (
                    <div
                      key={index}
                      className="dl-p-4 rounded-lg dl-flex dl-gap-6 dl-border dl-border-neutral-medium dl-bg-neutral-lightest"
                    >
                      <div className="dl-min-w-[88px] dl-flex dl-items-center dl-relative">
                        <Image
                          alt="file"
                          height={88}
                          width={88}
                          src={illustration}
                        />
                      </div>
                      <div className="dl-flex dl-flex-col dl-w-full">
                        <p className="dl-body-nano dl-text-gray-500 dl-capitalize">
                          Documento {fileType}
                        </p>
                        <h4 className="dl-subtitle-nano dl-mb-2">{title}</h4>

                        <a
                          className="dl-ml-auto dl-mt-auto dl-btn dl-btn-highlight dl-btn-sm"
                          href={file.url}
                          target={isPdf ? "_blank" : "_self"}
                        >
                          <DlIcon name="download" />
                          Descargar
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Resources;
