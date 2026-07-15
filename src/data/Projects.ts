// =========================================================
// Central project list
//
// Edit project names, URLs, descriptions, tags, images,
// image cropping, and image positioning here.
//
// The sidebar and homepage project cards both use this file.
// =========================================================

export interface Project {
  title: string;
  sidebarLabel: string;
  slug: string;
  href: string;
  description: string;
  images: string[];
  tags: string[];

  /*
    cover:
    Fills the image area and may crop the edges.

    contain:
    Displays the whole image but may leave empty space.
  */
  imageFit?: "cover" | "contain";

  /*
    Controls which part of the image remains visible when
    imageFit is set to cover.

    Examples:

    "center"
    "center top"
    "center bottom"
    "center 30%"
    "left center"
    "right center"
  */
  imagePosition?: string;
}

export const projects: Project[] = [
  {
    title: "HomeLab",
    sidebarLabel: "HomeLab",
    slug: "PP_HomeLab",
    href: "/Projects/PP_HomeLab/",
    description:
      "A self-hosted homelab project covering storage, media hosting, services, and networking.",
    images: ["/Homelab/Home_Lab_Hero_Shot.jpg"],
    imageFit: "cover",
    imagePosition: "center 50%",
    tags: ["Server", "Docker", "Networking"],
  },

  {
    title: "MicroMouse",
    sidebarLabel: "MicroMouse",
    slug: "PP_MicroMouse",
    href: "/Projects/PP_MicroMouse/",
    description:
      "A robotics project focused on maze solving, embedded control, and autonomous navigation.",
    images: ["/Micro_Mouse/Micro_Mouse_Hero_Shot.jpg"],
    imageFit: "cover",
    imagePosition: "center 55%",
    tags: ["Robotics", "Embedded", "Pathfinding"],
  },

  {
    title: "Pathfinding",
    sidebarLabel: "Pathfinding",
    slug: "PP_Pathfinding",
    href: "/Projects/PP_Pathfinding/",
    description:
      "A MATLAB pathfinding project comparing search algorithms for autonomous robot navigation.",
    images: ["/Pathfinding/Pathfinding_Hero.JPG"],
    imageFit: "cover",
    imagePosition: "center 50%",
    tags: ["MATLAB", "A*", "Algorithms"],
  },

  {
    title: "Pipe Detection",
    sidebarLabel: "Pipe Detection",
    slug: "PP_PipeDetection",
    href: "/Projects/PP_PipeDetection/",
    description:
      "A practical sensing and tracking project involving pipe detection, field testing, and prototype development.",
    images: ["/Leak_Detector/Hose_Reels_In_Position.jpg"],
    imageFit: "cover",
    imagePosition: "center 51%",
    tags: ["Sensors", "Prototype", "Field Testing"],
  },

  {
    title: "Reverse Vending Machine",
    sidebarLabel: "Reverse Vending Machine",
    slug: "PP_Reverse_Vending_Machine",
    href: "/Projects/PP_Reverse_Vending_Machine/",
    description:
      "A scaled prototype using Raspberry Pi vision, YOLO object classification, Node-RED dashboarding, and automation concepts for sorting and volume reduction.",
    images: [
      "/Reverse_Vending_Machine/Full_Assembly_FYP_Simon_Render_With_Rear_Panel.png",
    ],
    imageFit: "cover",
    imagePosition: "center",
    tags: ["Raspberry Pi", "YOLO", "Node-RED", "Automation"],
  },

  {
    title: "Warman Design & Build",
    sidebarLabel: "Warman Design & Build",
    slug: "PP_Warman_Design_Build",
    href: "/Projects/PP_Warman_Design_Build/",
    description:
      "A task-based mechanical design project involving rapid prototyping, fabrication, testing, and competition-focused design refinement.",
    images: ["/Warman_Design_Build/Warman_Machine_Hero_Shot.jpg"],
    imageFit: "cover",
    imagePosition: "center 22%",
    tags: ["CAD", "Fabrication", "Testing"],
  },

  {
    title: "Weather Station",
    sidebarLabel: "Weather Station",
    slug: "PP_Weather_Station",
    href: "/Projects/PP_Weather_Station/",
    description:
      "An embedded weather and UV monitoring system with GPS, LCD interface, EEPROM logging, environmental sensing, and low-level firmware.",
    images: ["/Weather_Station/Weather_Station_Hero_Shot.jpg"],
    imageFit: "cover",
    imagePosition: "center",
    tags: ["Embedded C", "GPS", "LCD", "Sensors"],
  },

  {
    title: "Audio Mixer",
    sidebarLabel: "Audio Mixer",
    slug: "PP_Audio_Mixer",
    href: "/Projects/PP_Audio_Mixer/",
    description:
      "A project write-up for an audio mixer design and development process.",
    images: ["/Audio_Mixer/Main_Photo_Audio_Mix.jpg"],
    imageFit: "cover",
    imagePosition: "center 45%",
    tags: ["Electronics", "Audio", "PCB"],
  },
];