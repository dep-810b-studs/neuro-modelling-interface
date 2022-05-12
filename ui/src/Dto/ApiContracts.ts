export type TaskStatus = {
    id: string;
    name: string;
    date: string;
    status: string;
}


export class NeuromorphicModuleRunInput {
    public epoch_count: number | undefined;
    public seed: number | undefined;
    public n_out: number | undefined;
    public w: number | undefined;
    public h: number | undefined;
    public memristor_id: number | undefined;
    public model_memristor_params: Map<string, string> | undefined;
    public neural_network_params: Map<string, string> | undefined;
    public patterns: number[][][] | undefined;
}

export class NeuromorphicEpochResult{
    public epoch_number!: number;
    public matched_patterns!: number[][][];

    constructor(epochNumber: number, matchedPatterns: number[][][]) {
        this.epoch_number = epochNumber;
        this.matched_patterns = matchedPatterns;
    }
}

export type TaskResult = {
    result: NeuromorphicEpochResult[],
    files: String[]
}