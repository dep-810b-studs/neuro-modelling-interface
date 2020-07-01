package org.mai.dep810.sandbox.repository

import org.mai.dep810.sandbox.model.Player
import org.springframework.data.repository.CrudRepository

interface PlayerRepository: CrudRepository<Player, String> {
    fun findTop3ByOrderByTotalScoreAsc() : List<Player>
    fun findAllByTotalScoreNotNull() : List<Player>
}
