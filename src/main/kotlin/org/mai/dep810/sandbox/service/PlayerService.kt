package org.mai.dep810.sandbox.service

import org.mai.dep810.sandbox.model.Player
import org.mai.dep810.sandbox.repository.PlayerRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

interface PlayerService{
    fun leaders(): List<Player>
    fun score(handle: String, points: Int): Int
}

@Service("playerService")
class PlayerServiceImpl : PlayerService {
    @Autowired
    lateinit var playerRepository: PlayerRepository

    override fun leaders(): List<Player> =
            playerRepository.findTop3ByOrderByTotalScoreAsc()

    override fun score(handle: String, points: Int): Int {
        val player = playerRepository
                .findById(handle).orElse(Player(handle))
                + points
        playerRepository.save(player)
        return player.totalScore
    }
}