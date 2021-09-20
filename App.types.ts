import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type PlayerItem = {
    label: string;
    value: number;
};

export type BlindItem = {
    label: string;
    value: string;
};

export type StackParamList = {
    HomeScreen: undefined;
    SetupScreen: undefined;
    SessionScreen: {
        PV: PlayerItem|undefined,
        BV: BlindItem|undefined
    } | undefined;
    HistoryScreen: undefined;
};

export type HomeScreenProps = NativeStackScreenProps<StackParamList, 'HomeScreen'>;
export type SetupScreenProps = NativeStackScreenProps<StackParamList, 'SetupScreen'>;
export type SessionScreenProps = NativeStackScreenProps<StackParamList, 'SessionScreen'>;
export type HistoryScreenProps = NativeStackScreenProps<StackParamList, 'HistoryScreen'>;