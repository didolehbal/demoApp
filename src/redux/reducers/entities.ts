import { FETCH_ALL, FETCH_ALL_SUCCESS, FETCH_ALL_FAILED } from "../actions/entities";
import { Meal, Entity } from "../../types";

type entityState = {
  meals?: {
    data: Array<Meal>;
    loading: boolean;
    error: string | null;
  };
  users?: {};
  restaurants:{}
};

type Action = {
  type: string;
  payload: {
    entity: Entity;
    data: [];
    error?:string
  };
};

const initState = {
    meals:{
        data:[],
        loading: false,
        error: null
    },
    users:{
        data:[],
        loading: false,
        error: null
    },
    restaurants:{}
}

export default function (state: entityState = initState, action: Action) {
  const entity = action?.payload?.entity;
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        [entity]: { ...state[entity], loading: true, error: null },
      };
    case FETCH_ALL_SUCCESS:
      return {
        ...state,
        [action.payload.entity]: { data: action.payload.data, loading:false, error:null },
      };
      case FETCH_ALL_FAILED:
        return {
          ...state,
          [action.payload.entity]: { loading:false, error:action.payload.error },
        };
    default:
      return state;
  }
}
