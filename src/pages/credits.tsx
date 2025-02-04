import { credits } from "@/constants/credits-data";
import { Title } from "@mantine/core";
import parse from "html-react-parser";

export default function Credits() {
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
      <ul style={{ columns: 3, marginTop: 48, marginBottom: 48, }}>
        {credits.map((c, i) => {
          return (
            <div key={i} style={{ margin: 12 }}>
              <Title className="title-thin-small">{c.title}</Title>
              <div style={{ textDecoration: "underline" }}>{parse(c.link)}</div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
