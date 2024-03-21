export type CaseType = {
    dni: string,
    stage: number,
    stageMessage: {
        title: string,
        message: string
    },
    observation?: string
}