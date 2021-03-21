package org.mai.dep810.sandbox

import junit.framework.Assert.assertEquals
import org.junit.Test
import org.mai.dep810.sandbox.contracts.*
import org.mai.dep810.sandbox.utils.WorkWithFiles

class ContractsSerializationTests {
    @Test
    fun runMemristorFittingInitialsShouldBeCorrectSerialized() {
        //arrange
        var memristorFittingInitials = RunFittingMemristorInitials(0,
                Vac(listOf(2.99850074962508e-7, 1.9344277457276516e-7), listOf(-0.0560859188544154, -0.07260127150977624)),
                10000,
                1000,
                listOf(MemristorParams(0.8, 0.2), MemristorParams(1.6, 0.4)),
                Voltage(listOf(0.0, 0.01853918556642878), listOf(0.0196850393700787, 0.030681549989913962)))
        var expectedMemristorFittingInitials = WorkWithFiles.readJson("run_fitting_memristor_initials")

        //act
        var serializedMemristorFittingInitials = WorkWithFiles.serialize(memristorFittingInitials)

        //assert
        assertEquals(expectedMemristorFittingInitials, serializedMemristorFittingInitials)
    }

    @Test
    fun runNetworkInitialsShouldBeCorrectSerialized(){
        //arrange
        var neuronInitials = RunNetworkInitials(0,
                listOf(Param(0.4), Param(0.8)),
                listOf(listOf(listOf(0,1), listOf(1, 0))),
                listOf(Param(0.002), Param(0.01)),
                        30000)
        var expectedNeuronInitials = WorkWithFiles.readJson("run_network_initials")

        //act
        var serializedNeuronInitials = WorkWithFiles.serialize(neuronInitials)

        //assert
        assertEquals(expectedNeuronInitials, serializedNeuronInitials)
    }
}
