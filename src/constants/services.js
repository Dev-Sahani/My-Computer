import { MdOutlineSecurity } from "react-icons/md";
import { PiSecurityCameraFill, PiFingerprintLight  } from "react-icons/pi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { GiAutoRepair } from "react-icons/gi";
import { Percent } from "lucide-react";

const services = [
    {
        name: "Laptop & Computer Repair",
        description: "We repair all brands of laptops and computers including Apple, Dell, HP, Lenovo, Asus, Acer and more.",
        icon: <GiAutoRepair className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 -translate-y-[2px]" />
    },
    {
        name: "Camera Installation",
        description: "We install all brands of CCTV cameras including Secure-Eye, Axis, etc. We also install all brands of DVRs and NVRs. We give you full guidance and support you need.",
        icon: <PiSecurityCameraFill className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 -translate-y-[2px]" />
    },
    {
        name: "Wholesale & Retail Ordering",
        description: "We offer both wholesale and retail services for a wide range of products, including laptops, desktops, printers, scanners, and cameras.",
        icon: <Percent className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 -translate-y-[2px]" />
    },
    {
        name: "Digital Attendance Devices",
        description: "We sell all brands of digital attendance devices including Secure-Eye, Axis, etc. We also sell all brands of biometric devices.",
        icon: <PiFingerprintLight className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 -translate-y-[2px]" />
    },
    {
        name: "Anti-Virus & Security",
        description: "We sell all brands of antivirus and security including Norton, Avira, etc. We also sell all brands of firewalls and routers.",
        icon: <MdOutlineSecurity className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 -translate-y-[2px]" />
    },
    {
        name: "Any Other Services",
        description: "We are a one stop solution for all your IT needs. Just give us a call or visit us in person, we will solve all of yours problems.",
        icon: <RiCustomerService2Fill className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 -translate-y-[2px]" />
    }
];

export default services;