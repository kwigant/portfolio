import { Anchor } from "@mantine/core";
import { IconMenu2 } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import { navMenu } from "./header";
import { useRouter } from "next/router";
import classes from "@/styles/header.module.css";

export default function NavMenu(props: navMenu) {
  const [opened, setOpened] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setOpened(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  return (
    <div>
      <IconMenu2 onClick={() => setOpened(!opened)} />
      {opened && (
        <div ref={dropdownRef} className={classes["nav-menu"]}>
          <ul style={{ display: "flex", padding: 12, flexDirection: "column" }}>
            {props.links.map((item, index) => (
              <Anchor<"a">
                href={item.link}
                key={item.label}
                className={classes.mainLink}
                data-active={index === props.active || undefined}
                onClick={(event) => {
                  event.preventDefault();
                  props.setActive(index);
                  router.push(item.link);
                  setOpened(false)
                }}
              >
                {item.label}
              </Anchor>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
