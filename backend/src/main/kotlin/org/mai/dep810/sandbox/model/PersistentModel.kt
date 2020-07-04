    import org.springframework.data.annotation.Persistent
import java.time.Instant

enum class RunStatus { PENDING, STARTED, COMPLETED, CANCELLED, FAILED }

@Persistent
data class Run(
        var id: String,
        var userId: String,
        var startTime: Instant,
        var endTime: Instant?,
        var status: RunStatus
)

@Persistent
data class RunLog(
        var runId: String,
        var time: Instant,
        var seq: Long,
        var log: String
)

@Persistent
data class RunResult(
        var id: String,
        var result: Map<String, Any>
)