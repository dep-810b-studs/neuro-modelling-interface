import {Param, RunTaskInfo} from "../State/InformationContracts";
import {NeuromorphicModuleRunInput} from "../Dto/ApiContracts";

export default class NeuromorphicModuleConverter{
    convert(runTaskInfo: RunTaskInfo, memristorId: number): NeuromorphicModuleRunInput{
        let neuromorphicModuleRunInput = new NeuromorphicModuleRunInput();
        neuromorphicModuleRunInput.epoch_count = runTaskInfo.neural_network.n_epochs;
        neuromorphicModuleRunInput.memristor_id = memristorId;
        neuromorphicModuleRunInput.seed = 457;
        neuromorphicModuleRunInput.h = 8;
        neuromorphicModuleRunInput.w = 8;
        neuromorphicModuleRunInput.n_out = 100;
        neuromorphicModuleRunInput.model_memristor_params = this.convertParams(runTaskInfo.model_memristors[memristorId].params);
        neuromorphicModuleRunInput.neural_network_params = this.convertParams(runTaskInfo.neural_network.params);
        neuromorphicModuleRunInput.patterns = runTaskInfo.patterns;
        return neuromorphicModuleRunInput;
    }

    private convertParams(params: Param[]): Map<string, string>{
        let convertedParams = new Map<string, string>();
        params.forEach(param => convertedParams.set(param.name, param.value.toString()));
        return convertedParams;
    }
}