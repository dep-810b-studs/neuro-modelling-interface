package org.mai.dep810.sandbox.service

import Run
import org.mai.dep810.sandbox.repository.RunRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

interface RunService{
    fun getAllRuns(): List<Run>
    fun addRun(run: Run)
}

@Service("runService")
class RunServiceImpl : RunService {
    @Autowired
    lateinit var runRepository: RunRepository

    override fun getAllRuns(): List<Run> =
            runRepository.findAll().toList()

    override fun addRun(run: Run){
        runRepository.save(run)
    }
}