import { useState } from "react";
import { Anchor, Group } from "@mantine/core";
import classes from "../../styles/header.module.css";
import { useRouter } from "next/router";
import { useMediaQuery } from "@mantine/hooks";

const mainLinks = [
  { link: "/", label: "Linkedin" },
  { link: "/", label: "Email" },
  { link: "/", label: "Resume" },
  { link: "/credits", label: "Credits" },
];

export function Footer() {
  const [active, setActive] = useState(0);
  const router = useRouter();
  const matches = useMediaQuery('(min-width: 480px)');

  const mainItems = mainLinks.map((item, index) => (
    <Anchor<"a">
      href={item.link}
      key={item.label}
      className="footer-text"
      data-active={index === active || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(index);
        router.push(item.link);
      }}
    >
      {item.label}
    </Anchor>
  ));

  return (
    <footer className="justified-row" style={{flexDirection: matches ? 'row' : 'column'}}>
      <div style={{ fontSize: 14 }}>
        © 2025 Kirsten Wigant. All rights reserved.
      </div>
      <Group gap={8} className={classes.mainLinks}>
        {mainItems}
      </Group>
    </footer>
  );
}
