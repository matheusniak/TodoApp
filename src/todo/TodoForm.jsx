import React from "react";
import Grid from "../template/Grid";
import IconButton from "../template/IconButton";

export default function TodoForm(props) {
  const keyHandler = (e) => {
    if (e.key === "Enter") {
      if (e.shiftKey) props.handleSearch();
      else props.handleAdd();
    } else if (e.key === "Escape") {
      props.handleClear();
    }
  };

  return (
    <div role="form" className="todoForm mb-3">
      <div className="row">
        <Grid cols="12 9 10">
          <input
            id="description"
            className="form-control"
            placeholder="Adicione uma tarefa"
            onChange={props.handleChange}
            onKeyUp={keyHandler}
            value={props.description}
          />
        </Grid>

        <Grid cols="12 3 2">
          <div style={{ display: "flex", gap: 8 }}>
            <IconButton
              btnStyle="primary"
              icon="plus"
              onClick={props.handleAdd}
            />
            <IconButton
              btnStyle="info"
              icon="search"
              onClick={props.handleSearch}
            />
            <IconButton
              btnStyle="secondary"
              icon="close"
              onClick={props.handleClear}
            />
          </div>
        </Grid>
      </div>
    </div>
  );
}
