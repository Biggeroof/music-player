import { Fragment, useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
  classNames: string;
}

function ListGroup(props: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div className={props.classNames}>
      <h1>{props.heading}</h1>
      {/* this returns the p header if both are true and nothing if left if false */}
      {props.items.length === 0 && <p></p>}
      <ul className="list-group">
        {props.items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item bg-dark"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              props.onSelectItem(item);
            }}
          >
            <p className="text-light">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
