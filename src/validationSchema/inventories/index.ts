import * as yup from 'yup';

export const inventoryValidationSchema = yup.object().shape({
  quantity: yup.number().integer().required(),
  pillow_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
