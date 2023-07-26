export interface MeState {
  data: MeStateData | any;
  fetch: {
    loading: boolean;
    done: boolean;
    error?: string | null;
  };
}

export type MeStateData = {
  id: number;
  fullName: string;
  publicName: string;
  password: string;
  email: string;
};

export interface ActionTriggerProps {
  email: string;
  password: string;
}

export type ContainerState = MeState;
