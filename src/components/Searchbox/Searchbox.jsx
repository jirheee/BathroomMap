import { useEffect, useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { useWindowSize } from "../../util/util";

const inputGroupOption = {
  position: "fixed",
  top: "100px",
  right: "100px",
  zIndex: "10"
};

const SearchBox = props => {
  const { width, _ } = useWindowSize();
  const [maxWidth, setMaxWidth] = useState(null);

  useEffect(() => setMaxWidth(props.maxWidth), [props]);

  return (
    <>
      <InputGroup
        style={{
          ...inputGroupOption,
          width: `${width * 0.3}px`,
          maxWidth: maxWidth
        }}
      >
        <FormControl></FormControl>
        <Button>Search</Button>
      </InputGroup>
    </>
  );
};

export default SearchBox;
