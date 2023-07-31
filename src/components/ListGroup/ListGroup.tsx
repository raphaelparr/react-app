import { useState } from "react";
// import styles from "./ListGroup.module.css";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProbs {
  active: boolean;
}

const ListItem = styled.li<ListItemProbs>`
  padding: 5px 0;
  background: ${(probs) => (probs.active ? "blue" : "none")};
`;

interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const message = items.length === 0 && <p>No item found</p>;

  return (
    <>
      <h1>{heading}</h1>
      {message}
      <List>
        {/* {[styles.listGroup, styles.container].join(" ")}                */}
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            // className={
            //   selectedIndex === index
            //     ? "list-group-item active"
            //     : "list-group-item"
            // }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
