package org.mai.dep810.sandbox.contracts

import java.util.*

enum class RunStatus { PENDING, STARTED, COMPLETED,  FAILED }

data class Run (
        var created_at : Date,
        var status: RunStatus,
        var uuid: UUID
)

data class RunNetworkInitials(
        var id_memristor: Int,
        var params_memristor: List<Param>,
        var patterns: List<List<List<Int>>>,
        var params: List<Param>,
        var n_epochs: Int
)

data class RunNetworkResult(
        var epoch: Int,
        var weights: List<List<List<Double>>>
)

data class RunFittingMemristorInitials(
        var id_memristor: Int,
        var exp_vac: Vac,
        var n_test: Int,
        var n_opt: Int,
        var params: List<MemristorParams>,
        var exp_voltage: Voltage
    )

data class RunFittingMemristorResult(
        var params: List<MemristorParams>,
        var id_memristor: Int,
        var exp_vac: Vac,
        var vac: Vac
)

data class RunStartResponse(
        var uuid: UUID
)

data class RunInfo (
        var created_at : Date,
        var status: RunStatus,
        var uuid: UUID,
        var startTime: Date,
        var endTime: Date
)

