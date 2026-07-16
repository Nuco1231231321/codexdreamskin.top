import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Codex Dream Skin",
    short_name: "Dream Skin",
    description:
      "Install, customize, verify, and restore a Codex desktop theme.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#58cc02",
    icons: [
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
