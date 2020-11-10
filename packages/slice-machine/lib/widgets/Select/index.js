import * as yup from 'yup'
import { MdDns } from 'react-icons/md'

import {
  createInitialValues,
  createValidationSchema
} from 'lib/forms'

import { removeProp } from 'lib/utils'

import FormFields from './FormFields'

/**
 * {
      "type" : "Select",
      "config" : {
        "label" : "Image side",
        "default_value" : "left",
        "options" : [ "left", "right" ]
      }
    }
*/

const TYPE_NAME = 'Select'

const create = (apiId) => ({
  ...createInitialValues(FormFields),
  id: apiId
})

const _createMock = (config) => config.options[Math.floor(Math.random() * config.options.length)]

const createMock = (maybeMock, config) => maybeMock || _createMock(config)

const Meta = {
  icon: MdDns,
  title: 'Select',
  description: 'A rich text field with formatting options'
}

const schema = yup.object().shape({
  type: yup.string().matches(/^Select$/, { excludeEmptyString: true }).required(),
  config: createValidationSchema(removeProp(FormFields, 'id'))
})

export default {
  FormFields,
  createMock,
  create,
  schema,
  Meta,
  TYPE_NAME
}