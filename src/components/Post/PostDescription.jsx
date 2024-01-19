import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";

const PostDescription = ({
    text,
    handleDescriptionChange,
  }) => {
    const handleButtonClick = () => {
      console.log("Button clicked!");
    };
  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Açıklamanızı Giriniz"
          value={text}
          onChange={handleDescriptionChange}
        />
      </InputGroup>
    </div>
  );
};

export default PostDescription;
