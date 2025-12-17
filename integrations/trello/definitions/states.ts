import { type IntegrationDefinitionProps, z } from '@botpress/sdk'
import { trelloIdSchema } from './schemas/entities'

export const states = {
  webhookState: {
    type: 'integration',
    schema: z
      .object({
        trelloWebhookId: trelloIdSchema
          .or(z.null())
          .title('Trello Webhook ID')
          .describe('Unique id of the webhook that is created upon integration registration')
          .default(null),
      })
      .describe('State that stores the webhook id for the Trello integration'),
  },
} as const satisfies NonNullable<IntegrationDefinitionProps['states']>
