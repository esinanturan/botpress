import { z } from '@botpress/sdk'
import { BoardSchema, ListSchema, CardSchema, MemberSchema } from 'definitions/schemas'

// ==== Common Input Schemas ====
export const noInput = z.object({})

export const hasBoardId = z.object({
  boardId: BoardSchema.shape.id.title('Board ID').describe('Unique identifier of the board'),
})

export const hasListId = z.object({
  listId: ListSchema.shape.id.title('List ID').describe('Unique identifier of the list'),
})

export const hasCardId = z.object({
  cardId: CardSchema.shape.id.title('Card ID').describe('Unique identifier of the card'),
})

// ==== Common Output Schemas ====  hasMessage: z.object({
export const hasMessage = z.object({
  message: z.string().describe('Output message'),
})

export const outputsMember = z.object({
  member: MemberSchema.describe('The member object'),
})

export const outputsMembers = z.object({
  members: z.array(MemberSchema).describe('Array of member objects'),
})

export const outputsCard = z.object({
  card: CardSchema.describe('The card object'),
})

export const outputsCards = z.object({
  cards: z.array(CardSchema).describe('Array of card objects'),
})

export const outputsList = z.object({
  list: ListSchema.describe('The list object'),
})

export const outputsLists = z.object({
  lists: z.array(ListSchema).describe('Array of list objects'),
})

export const outputsBoard = z.object({
  board: BoardSchema.describe('The board object'),
})

export const outputsBoards = z.object({
  boards: z.array(BoardSchema).describe('Array of board objects'),
})
