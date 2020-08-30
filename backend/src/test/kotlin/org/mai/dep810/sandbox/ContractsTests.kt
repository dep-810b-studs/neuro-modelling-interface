package org.mai.dep810.sandbox

import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import com.fasterxml.jackson.module.kotlin.registerKotlinModule
import junit.framework.Assert.assertEquals
import org.junit.Test
import org.mai.dep810.sandbox.contracts.Memristor
import org.mai.dep810.sandbox.contracts.MemristorParams
import org.mai.dep810.sandbox.contracts.Neuron
import org.mai.dep810.sandbox.contracts.NeuronParams

class ContractsTests {

    @Test
    fun neuronContractShouldBeCorrectDeserialized() {
        var parsedJsonWithNeuron = deserialize<Neuron>("neuron.json")
        var expectedNeuron = Neuron("RC-neuron", listOf(
                NeuronParams("tau_s", 0.002),
                NeuronParams("tau_r", 0.01)
        ))
        assertEquals(expectedNeuron, parsedJsonWithNeuron)
    }

    @Test
    fun memristorContractShouldBeCorrectDeserialized() {
        val parsedJsonWithMemristors = deserialize<List<Memristor>>("memristors.json")
        val expectedMemristors = listOf(
                Memristor(0, listOf(
                        MemristorParams(0.8, 0.2, 0.4, "x0"),
                        MemristorParams(1.6, 0.4, 0.8, "v_th")),
                        "DOI:10.3390/electronics8040383 eq. (11)"),
                Memristor(1, listOf(
                        MemristorParams(-2.0, -0.5, -1.0, "v_n"),
                        MemristorParams(2.0E-14, 5.0E-15, 1.0E-14, "nu_v")),
                        "DOI:10.1109/MWSCAS.2013.6674799 eq. (4)")
        )
        assertEquals(expectedMemristors, parsedJsonWithMemristors)
    }

    private inline fun <reified T> deserialize(path: String): T {
        val rawData = javaClass.classLoader.getResource(path).readText()
        return ObjectMapper().registerKotlinModule().readValue(rawData)
    }

}