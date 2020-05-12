import { createStore } from "redux";

//////////definition//////////////
const IwantToChange = "want to alter";
const Idone = "done";

interface ActionType {
  type: typeof IwantToChange | typeof Idone;
}

////////////state//////////////
export interface InitialStateType {
  boolAlternate: { isEditing: boolean };
}
const InitialState = {
  boolAlternate: { isEditing: false },
};
////////////////////////////////

const optionFunction = (state = InitialState, action: ActionType) => {
  switch (action.type) {
    case IwantToChange:
      return { ...state, boolAlternate: { isEditing: true } };
    case Idone:
      return { ...state, boolAlternate: { isEditing: false } };
    default:
      return state;
  }
};

const optionStore = createStore(optionFunction);

export default optionStore;
