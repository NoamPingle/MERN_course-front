import React, { useCallback, useReducer } from "react";

import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";

import "./NewPlace.css";

const formReducer = {[]}

const NewPlace = () => {
  useReducer();
  const titleInputHadnler = useCallback((id, value, isValid) => {}, []);
  const descriptionInputHadnler = useCallback((id, value, isValid) => {}, []);

  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please Enter a valid title."
        onInput={titleInputHadnler}
      />
      <Input
        id="description"
        element="texterea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please Enter a valid description. (MIN 5 characters)"
        onInput={descriptionInputHadnler}
      />
    </form>
  );
};

export default NewPlace;
