import { useState } from "react";
import { Anchor, Group } from "@mantine/core";
import classes from "../../styles/header.module.css";
import { useRouter } from "next/router";
import { useMediaQuery } from "@mantine/hooks";

const mainLinks = [
  { link: "https://linkedin.com/in/kirsten-wigant", label: "Linkedin" },
  { link: "", label: "Resume" },
  { link: "/credits", label: "Credits" },
];

export function Footer() {
  const [active, setActive] = useState(0);
  const router = useRouter();
  const matches = useMediaQuery('(min-width: 480px)');
  const documentUrl = '/documents/Kirsten-Wigant-Resume.pdf';
  
  function handleLinkClick () {
    window.open(documentUrl, '_blank');
  };


  const mainItems = mainLinks.map((item, index) => (
    <Anchor<"a">
      href={item.link}
      key={item.label}
      className="footer-text"
      data-active={index === active || undefined}
      onClick={(event) => {
        event.preventDefault();
        if (index === 1) handleLinkClick()
        setActive(index);
        router.push(item.link);
      }}
    >
      {item.label}
    </Anchor>
  ));

  return (
    <footer className="justified-row" style={{ paddingLeft: 24, paddingRight: 24,flexDirection: matches ? 'row' : 'column'}}>
     { matches && <div style={{ fontSize: 14 }}>
        © 2025 Kirsten Wigant. All rights reserved.
      </div>}
      <Group gap={8} className={classes.mainLinks}>
        {mainItems}
      </Group>
      { !matches && <div style={{ fontSize: 14, marginTop: 12, textAlign: 'center' }}>
        © 2025 Kirsten Wigant. All rights reserved.
      </div>}
    </footer>
  );
}
