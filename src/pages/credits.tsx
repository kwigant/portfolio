import { credits } from "@/constants/credits-data";
import { Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import parse from "html-react-parser";

export default function Credits() {
  const matches = useMediaQuery('(min-width: 480px)');

  return (
    <div className="center-container" style={{ padding: 24 }}>
      <Title style={{ textAlign: "center" }} className="title">
        Credit Where it&apos;s Due
      </Title>
      <div style={{marginTop: 24}}>
        All of the visuals on this website have been composed by me using Figma
        though I did use the following free icons from FlatIcon.com in the
        construction of certain visuals. Here are their citations:
      </div>
      <ul style={{ columns: matches ? 3 : 1, marginTop: matches ? 48 : 24, marginBottom: 48, }}>
        {credits.map((c, i) => {
          return (
            <div key={i} style={{ marginTop: 12, marginBottom: 12 }}>
              <Title className="title-thin-small">{c.title}</Title>
              <div style={{ textDecoration: "underline" }}>{parse(c.link)}</div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
