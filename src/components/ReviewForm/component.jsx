import { useReducer } from "react";
import { Button } from "../Button/component";

import styles from "./styles.module.css";

const DEFAULT_VALUE = {
  name: "",
  text: "",
  rating: 5,
};

const reducer = (state, { type, payload } = {}) => {
  switch (type) {
    case "setName":
      return { ...state, name: payload };
    case "setText":
      return { ...state, text: payload };
    case "setRating":
      return { ...state, rating: payload };
    case "clearForm":
      return { ...DEFAULT_VALUE };
    default:
      return state;
  }
};

export const ReviewForm = ({ review, onSaveForm, onCancelForm }) => {
  const [form, dispatch] = useReducer(reducer, review ? review : DEFAULT_VALUE);

  return (
    <div>
      {!review?.id && (
        <div className={styles.field}>
          <label>Name</label>
          <input
            value={form.name}
            onChange={(event) =>
              dispatch({ type: "setName", payload: event.target.value })
            }
          />
        </div>
      )}
      <div className={styles.field}>
        <label>Text</label>
        <input
          value={form.text}
          onChange={(event) =>
            dispatch({ type: "setText", payload: event.target.value })
          }
        />
      </div>
      <div className={styles.field}>
        <label>Rating</label>
        <input
          value={form.rating}
          onChange={(event) =>
            dispatch({ type: "setRating", payload: event.target.value })
          }
        />
      </div>
      <Button
        onClick={() => {
          onSaveForm({
            ...form,
            userId: "dfb982e9-b432-4b7d-aec6-7f6ff2e6af54",
          });
          dispatch({ type: "clearForm" });
        }}
      >
        Save
      </Button>
      {onCancelForm && <Button onClick={onCancelForm}>Cancel</Button>}
    </div>
  );
};
