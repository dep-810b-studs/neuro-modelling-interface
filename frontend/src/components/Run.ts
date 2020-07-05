enum RunStatus { PENDING, STARTED, COMPLETED, CANCELLED, FAILED}

type Run =  {
    id: string,
    userId: string,
    startTime: Date,
    endTime?: Date,
    status: RunStatus
}

export default Run;