const {
  Laptop,
  HardDrive,
  Volume2,
  Mouse,
  Headphones,
  Camera,
  Printer,
  Fingerprint,
  ShieldCheck,
  Box,
} = require("lucide-react");

const products = [
  {
    name: "Laptop & Computer",
    description:
      "Explore top laptops and desktops from Apple, Dell, HP, Lenovo, and more—built for work, gaming, and daily use.",
    icon: <Laptop className="w-12 h-12 text-blue-400" />,
  },
  {
    name: "Computer Accessories",
    description:
      "Upgrade with premium keyboards, mice, headsets, webcams, and mics from Logitech and more.",
    icon: <Mouse className="w-12 h-12 text-blue-400" />,
  },
  {
    name: "Storage Devices",
    description:
      "Find fast SSDs, reliable HDDs, and portable drives from brands like SanDisk, Samsung, and Lexar.",
    icon: <HardDrive className="w-12 h-12 text-blue-400" />,
  },
  {
    name: "Speakers & Earphones",
    description:
      "Shop wireless and wired options from Sony, Bose, JBL, and Noise for superior sound.",
    icon: <Headphones className="w-12 h-12 text-blue-400" />,
  },
  {
    name: "CCTV Cameras",
    description:
      "Secure your space with advanced CCTV systems, DVRs, and NVRs from Secure-Eye and Axis.",
    icon: <Camera className="w-12 h-12 text-blue-400" />,
  },
  {
    name: "Printers and IT Accessories",
    description:
      "Choose HP, Canon, Epson, and Brother printers plus essential IT accessories for smooth operations.",
    icon: <Printer className="w-12 h-12 text-blue-400" />,
  },
  {
    name: "Biometric Devices",
    description:
      "Enhance security with fingerprint, face, and iris scanners from Secure-Eye and Axis.",
    icon: <Fingerprint className="w-12 h-12 text-blue-400" />,
  },
  {
    name: "Anti-Virus & Security",
    description:
      "Protect your devices with antivirus and firewall solutions from Norton, Avira, and more.",
    icon: <ShieldCheck className="w-12 h-12 text-blue-400" />,
  }
];

export default products;
