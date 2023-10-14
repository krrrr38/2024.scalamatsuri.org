import { ProposalSession, Speaker, Sponsor } from '~/models/model'
import proposalSessions from '~/data/proposalSessions.json'
import sponsors from '~/data/sponsors.json'
import speakers from '~/data/speakers.json'

export const getSpeakers = () => computed(() => speakers as Speaker[])
export const getSponsor = () => computed(() => sponsors as Sponsor[])
export const getSponsorById = (sponsorId: string) => computed(() => sponsors.find((sponsor) => sponsor.id === sponsorId) as Sponsor)
export const getProposalSessions = () => computed(() => proposalSessions as ProposalSession[])