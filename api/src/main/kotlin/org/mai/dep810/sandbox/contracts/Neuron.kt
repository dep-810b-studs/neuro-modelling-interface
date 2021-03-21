package org.mai.dep810.sandbox.contracts

data class Neuron(
        var description: String,
        var params: List<NeuronParams>
)

data class NeuronParams(
        var name: String,
        var value: Double
)