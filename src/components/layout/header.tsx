import { useState } from "react";
import { Anchor, Box, Group } from "@mantine/core";
import classes from "@/styles/header.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import { useMediaQuery } from '@mantine/hooks';
import NavMenu from "./nav-menu";
import EmailButton from "../email-button";

export type links = {
  link: string;
  label: string;
}

export type navMenu = {
  links: links[],
  active: number,
  setActive: (active: number)=> void
}

const mainLinks: links[] = [
  { link: "/", label: "About" },
  { link: "/develop", label: "Development" },
  { link: "/design", label: "Design & Research" },
];

export function Header() {
  // const [opened, setOpened] = useState(false);

  const [active, setActive] = useState(0);
  const router = useRouter();
  const matches = useMediaQuery('(min-width: 480px)');
  const mainItems = mainLinks.map((item, index) => (
    <Anchor<"a">
      href={item.link}
      key={item.label}
      className={classes.mainLink}
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


  const navMenu: navMenu = {
    links: mainLinks,
    active: active,
    setActive: setActive
  }
  return (
    <header
      className={classes.header}
      style={{
        justifyContent:
             "space-between"
         
      }}
    >
      <div className="row">
      {router.pathname.includes("projects") ||
      router.pathname.includes("credits") ? (
        <button onClick={() => router.back()} className="back-btn">
          <Image
            className="back-icon"
            src="/chevron.png"
            alt="chev"
            width={16}
            height={16}
          />
          {matches ? 'Back' : null}
        </button>
      ) : null}
      
       <EmailButton/>
      </div>
      <div className={classes.inner}>
       
       {matches && <Box className={classes.links}>
          <Group gap={0} justify="flex-end" className={classes.mainLinks}>
            {mainItems}
          </Group>
        </Box>}

      { !matches && <NavMenu {...navMenu}/>}
      </div>
    </header>
  );
}
