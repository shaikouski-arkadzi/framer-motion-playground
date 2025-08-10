import { useState } from "react";
import { Reorder } from "framer-motion";

import "./DragnDrop.css";

function DragnDrop() {
  const [items, setItems] = useState([0, 1, 2, 3]);

  return (
    <Reorder.Group axis="y" values={items} onReorder={setItems}>
      {items.map((item) => (
        <Reorder.Item whileDrag={{ scale: 1.1 }} key={item} value={item}>
          {item}
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}

export default DragnDrop;
