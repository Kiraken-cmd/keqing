import Link from "next/link";

import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const socials = [
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/keqingdaily?igsh=MW00d2x0MXk2NGEyNg==",
  },
  {
    icon: <FaFacebook />,
    path: "https://www.facebook.com/keqing.72102?mibextid=ZbWKwL",
  },
  {
    icon: <FaTwitter />,
    path: "https://x.com/keqing24?t=gQghqPwAYqmfx60vlZA5sQ&s=09",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
