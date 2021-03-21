package org.mai.dep810.sandbox.repository

import Run
import org.springframework.data.repository.CrudRepository

interface RunRepository : CrudRepository<Run,Int> {
}