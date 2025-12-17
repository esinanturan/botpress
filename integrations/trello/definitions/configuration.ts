import { IntegrationDefinitionProps, z } from '@botpress/sdk'
import { boardSchema } from './common-schemas'

export const configuration = {
  schema: z.object({
    trelloApiKey: z
      .string()
      .title('Trello API Key')
      .describe('Can be obtained by creating an application on Trello')
      .secret(),
    trelloApiToken: z
      .string()
      .title('Trello API Token')
      .describe('Can be obtained by granting access to the application on Trello')
      .secret(),
    trelloBoardId: boardSchema.shape.id
      .describe('Unique identifier of the board to watch for events on Trello')
      .optional(),
  }),
} as const satisfies NonNullable<IntegrationDefinitionProps['configuration']>
