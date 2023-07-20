/* --- STATE --- */
export interface SignUpState {
  data: null | any;
  fetch :{
  loading: boolean;
  done: boolean;
  error?: string | null;
  }
}

export interface ActionTriggerProps {
  fullName: string;
  publicName: string;
  password: string;
  email: string;
}

export type ContainerState = SignUpState;
