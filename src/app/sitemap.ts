import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://bpmobilebillboards.com/",
      lastModified: new Date(),
    },
    {
      url: "https://bpmobilebillboards.com/quote",
      lastModified: new Date(),
    },
    {
      url: "https://bpmobilebillboards.com/services/mobile-led-advertising",
      lastModified: new Date(),
    },
    {
      url: "https://bpmobilebillboards.com/services/event-domination",
      lastModified: new Date(),
    },
    {
      url: "https://bpmobilebillboards.com/services/targeted-campaigns",
      lastModified: new Date(),
    },
  ];
}
