package org.mai.dep810.sandbox

import junit.framework.Assert
import org.junit.Test
import org.mai.dep810.sandbox.contracts.*
import org.mai.dep810.sandbox.utils.Constants.Companion.dateTimeFormat
import org.mai.dep810.sandbox.utils.WorkWithFiles
import java.util.*

class ContractsDeserializationTests {
    @Test
    fun voltageShouldBeCorrectDeserialized(){
        var parsedJsonWithVac = WorkWithFiles.deserialize<Voltage>("voltage")
        var expectedVac = Voltage(listOf(0.01853918556642878, 0.03707837113285756),
                listOf(0.0196850393700787, 0.030681549989913962))
        Assert.assertEquals(expectedVac, parsedJsonWithVac)
    }

    @Test
    fun vacShouldBeCorrectDeserialized(){
        var parsedJsonWithVac = WorkWithFiles.deserialize<Vac>("vac")
        var expectedVac = Vac(listOf(2.99850074962508e-07, 1.9344277457276516e-07),
                listOf(-0.0560859188544154, -0.07260127150977624))
        Assert.assertEquals(expectedVac, parsedJsonWithVac)
    }

    @Test
    fun runMemristorFittingResultShouldBeCorrectDeserialized(){
        var parsedJsonWithRunFittingMemristorResult = WorkWithFiles.deserialize<RunFittingMemristorResult>("run_fitting_memristor_result")
        var expectedRunFittingMemristorResult = RunFittingMemristorResult(listOf(MemristorParams(0.0,0.0,0.37251709999998067,"x0"), MemristorParams(0.0,0.0,0.7209255999999754,"v_th")),
                0,
                Vac(listOf(2.99850074962508e-7, 1.9344277457276516e-7), listOf(-0.0560859188544154, -0.07260127150977624)),
                Vac(listOf(4.144767230178263e-7, 7.577441251263957e-7), listOf(0.0196850393700787, 0.03597336313835223))
        )
        Assert.assertEquals(expectedRunFittingMemristorResult, parsedJsonWithRunFittingMemristorResult)
    }

    @Test
    fun runNetworkResultShouldBeCorrectDeserialized() {
        var parsedJsonWithRunResults = WorkWithFiles.deserialize<List<RunNetworkResult>>(  "run_network_result")
        var expectedRunResults = listOf(RunNetworkResult(3000,
                listOf(listOf(listOf( 0.6839720882600493,
                        0.7075041040636858,
                        0.8454733688947432,
                        0.8464972348209342,
                        0.7913814662002723,
                        0.7834588228620875,
                        0.6293909056044955,
                        0.739262042463636)))))
        Assert.assertEquals(expectedRunResults, parsedJsonWithRunResults)
    }

    @Test
    fun runInfoShouldBeCorrectDeserialized() {
        var parsedJsonWithRun = WorkWithFiles.deserialize<RunInfo>("run_info")
        var expectedRun = RunInfo(dateTimeFormat.parse("2020-04-05 12:53:43.774792"),
                RunStatus.COMPLETED,
                UUID.fromString("55f2a3c4-7723-11ea-8363-94de80a420f6"),
                dateTimeFormat.parse("2020-04-05 12:53:45.175466"),
                dateTimeFormat.parse("2020-04-05 12:56:32.224499"))
        Assert.assertEquals(expectedRun, parsedJsonWithRun)
    }

    @Test
    fun runShouldBeCorrectDeserialized() {
        var parsedJsonWithRun = WorkWithFiles.deserialize<List<Run>>("run")
        var expectedRun = listOf(Run(dateTimeFormat.parse("2020-04-05 12:24:08.551807Z"),
                RunStatus.COMPLETED,
                UUID.fromString("33d51d52-771f-11ea-8363-94de80a420f6")))
        Assert.assertEquals(expectedRun, parsedJsonWithRun)
    }

    @Test
    fun neuronShouldBeCorrectDeserialized() {
        var parsedJsonWithNeuron = WorkWithFiles.deserialize<Neuron>("neuron")
        var expectedNeuron = Neuron("RC-neuron", listOf(
                NeuronParams("tau_s", 0.002),
                NeuronParams("tau_r", 0.01)
        ))
        Assert.assertEquals(expectedNeuron, parsedJsonWithNeuron)
    }

    @Test
    fun memristorShouldBeCorrectDeserialized() {
        val parsedJsonWithMemristors = WorkWithFiles.deserialize<List<Memristor>>("memristors")
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
        Assert.assertEquals(expectedMemristors, parsedJsonWithMemristors)
    }
}