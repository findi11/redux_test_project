
export interface LoginState {
  data: null | any;
  fetch :{
  loading: boolean;
  done: boolean;
  error?: string | null;
  }
}

export interface ActionTriggerProps {
  email: string;
  password: string;
}

export type ContainerState = LoginState;
