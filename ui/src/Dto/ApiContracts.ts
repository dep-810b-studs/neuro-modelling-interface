export type Memristor = {
    id: number;
    x0: number;
    v_p: number;
    v_n: number;
    nu_v: number;
    r_on: number;
    r_off: number;
    d: number;
}
export type Neuron = {
    tau_s: number;
    tau_r: number;
    tau_out: number;
    v_th: number;
    vp_te: number;
    vn_te: number;
    v0_te: number;
    vp_out: number;
    c_int: number;
    r_int: number;
    alfa: number;
    p_noise: number;
}
export type RunTaskInput = {
    module: String;
    seed: number;
    n_epochs: number;
    n_out: number;
    memristor: Memristor;
    neuron: Neuron;
    n_patterns: number;
    w: number;
    h: number;
    patterns: number[]
}