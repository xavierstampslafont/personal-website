import React from "react";
import { Container, List } from "semantic-ui-react";

interface ListSectionData {
  items: {
    header: string;
    institution: string;
    location: string;
    time: string;
    points: string[];
  }[];
}

interface ListSectionProps {
  header: string;
  data: ListSectionData;
}

export default function ListSection(props: ListSectionProps) {
  return (
    <Container name="components-list-section">
      <h1>{props.header}</h1>
      <List>
        {props.data.items.map(item => (
          <List.Item>
            <List.Header>{item.header}</List.Header>
            <List.Description>
              {item.institution} ◆ {item.location} ◆ {item.time}
            </List.Description>
            {item.points.map(point => (
              <List.Item>{point}</List.Item>
            ))}
          </List.Item>
        ))}
      </List>
    </Container>
  );
}
