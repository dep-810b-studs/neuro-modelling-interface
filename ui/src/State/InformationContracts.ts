export type Param = {
    name: string;
    value: number;
}

export type MemristorInfo = {
    id: number;
    name: string;
    description: string;
    url: string;
    params: Param[];
}

export type NeuralNetworkInfo = {
    n_epochs: number;
    description: string;
    params: Param[];
}

export type RunTaskInfo = {
    model_memristors: MemristorInfo[];
    neural_network: NeuralNetworkInfo;
    patterns: number[][][]
}

export type RunTaskScenario = {
    MemristorModel: MemristorInfo;
    neural_network: NeuralNetworkInfo;
    patterns: number[][][];
}

export type TaskStatus = {
    id: string;
}