import React from "react";
import {
  Container,
  List,
  Table,
  TableRow,
  TableCell,
  TableBody
} from "semantic-ui-react";

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
    <Container name="components-list-section" textAlign="left">
      <h1>{props.header}</h1>
      <List>
        {props.data.items.map(item => (
          <List.Item>
            <List.Header>
              <Table basic="very" compact="very">
                <TableBody>
                  <TableRow>
                    <TableCell>{item.header}</TableCell>
                    <TableCell textAlign="right">{item.time}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </List.Header>
            <List.Description>
              <Table basic="very" compact="very">
                <TableBody>
                  <TableRow>
                    <TableCell>{item.institution}</TableCell>
                    <TableCell textAlign="right">{item.location}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </List.Description>
            <List bulleted>
              {item.points.map(point => (
                <List.Item>{point}</List.Item>
              ))}
            </List>
          </List.Item>
        ))}
      </List>
    </Container>
  );
}
