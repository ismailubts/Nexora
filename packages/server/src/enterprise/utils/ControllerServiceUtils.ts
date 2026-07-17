import { Equal } from 'typeorm'
import { Request } from 'express'
import { InternalNEXORAError } from '../../errors/internalNexoraError'
import { StatusCodes } from 'http-status-codes'

export const getWorkspaceSearchOptions = (workspaceId?: string) => {
    if (!workspaceId) {
        throw new InternalNEXORAError(StatusCodes.BAD_REQUEST, `Workspace ID is required`)
    }
    return { workspaceId: Equal(workspaceId) }
}

export const getWorkspaceSearchOptionsFromReq = (req: Request) => {
    const workspaceId = req.user?.activeWorkspaceId
    if (!workspaceId) {
        throw new InternalNEXORAError(StatusCodes.BAD_REQUEST, `Workspace ID is required`)
    }
    return { workspaceId: Equal(workspaceId) }
}
