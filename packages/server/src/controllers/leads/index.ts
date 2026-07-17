import { Request, Response, NextFunction } from 'express'
import chatflowsService from '../../services/chatflows'
import leadsService from '../../services/leads'
import { StatusCodes } from 'http-status-codes'
import { InternalNEXORAError } from '../../errors/internalNexoraError'

const getAllLeadsForChatflow = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (typeof req.params.id === 'undefined' || req.params.id === '') {
            throw new InternalNEXORAError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: leadsController.getAllLeadsForChatflow - id not provided!`
            )
        }
        const workspaceId = req.user?.activeWorkspaceId
        if (!workspaceId) {
            throw new InternalNEXORAError(
                StatusCodes.NOT_FOUND,
                `Error: leadsController.getAllLeadsForChatflow - workspace ${workspaceId} not found!`
            )
        }
        const chatflowid = req.params.id
        const chatflow = await chatflowsService.getChatflowByIdForWorkspace(chatflowid, workspaceId)
        if (!chatflow) {
            throw new InternalNEXORAError(
                StatusCodes.NOT_FOUND,
                `Error: leadsController.getAllLeadsForChatflow - chatflow ${chatflowid} not found in workspace ${workspaceId}`
            )
        }
        const apiResponse = await leadsService.getAllLeads(chatflowid)
        return res.json(apiResponse)
    } catch (error) {
        next(error)
    }
}

const createLeadInChatflow = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (typeof req.body === 'undefined' || req.body === '') {
            throw new InternalNEXORAError(
                StatusCodes.PRECONDITION_FAILED,
                `Error: leadsController.createLeadInChatflow - body not provided!`
            )
        }
        const apiResponse = await leadsService.createLead(req.body)
        return res.json(apiResponse)
    } catch (error) {
        next(error)
    }
}

export default {
    createLeadInChatflow,
    getAllLeadsForChatflow
}
