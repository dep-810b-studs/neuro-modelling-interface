package org.mai.dep810.sandbox.contracts

data class Memristor(
        var id: Int,
        var params: List<MemristorParams>,
        var description: String
)

data class MemristorParams(
        var up: Double,
        var down: Double,
        var value: Double? = null,
        var name: String? = null
)