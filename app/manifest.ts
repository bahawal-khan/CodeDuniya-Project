import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CodeDuniya — Coding Seekho Apne Andaz Mein",
    short_name: "CodeDuniya",
    description:
      "Pakistan ka apna coding platform — Roman Urdu aur English mein, ek dost (CodeYaar) ke sath, zero se hero tak.",
    start_url: "/",
    display: "standalone",
    background_color: "#FBF6EC",
    theme_color: "#D6336C",
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
