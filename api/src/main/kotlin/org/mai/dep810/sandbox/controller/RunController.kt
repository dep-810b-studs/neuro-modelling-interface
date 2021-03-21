package org.mai.dep810.sandbox.controller

import Run
import org.mai.dep810.sandbox.service.RunService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@RestController
class RunController {
    @Autowired
    lateinit var runService: RunService

    @CrossOrigin(origins = ["http://localhost:4000"])
    @GetMapping("/runs")
    fun getRuns():List<Run> =
            runService.getAllRuns()

    @PutMapping("/runs")
    fun addRun(@RequestBody run: Run) =
            runService.addRun(run)
}