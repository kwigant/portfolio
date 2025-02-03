import { useState } from 'react';
import { Anchor, Box, Container, Group } from '@mantine/core';
import classes from '../../styles/header.module.css';
import { useRouter } from 'next/router';

const mainLinks = [
  { link: '/', label: 'About' },
  { link: '/develop', label: 'Development' },
  { link: '/design', label: 'Design & Research' },
];

export function Header() {
  const [active, setActive] = useState(0);
  const router = useRouter()

  const mainItems = mainLinks.map((item, index) => (
    <Anchor<'a'>
      href={item.link}
      key={item.label}
      className={classes.mainLink}
      data-active={index === active || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(index);
        router.push(item.link)
      }}
    >
      {item.label}
    </Anchor>
  ));

  return (
    <header className={classes.header}>
      <Container className={classes.inner}>
        <Box className={classes.links} visibleFrom="sm">
          <Group gap={0} justify="flex-end" className={classes.mainLinks}>
            {mainItems}
          </Group>
        </Box>
      </Container>
    </header>
  );
}