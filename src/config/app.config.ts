interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Sales Manager', 'Customer Service Representative', 'Inventory Manager'],
  tenantName: 'Organization',
  applicationName: 'Karmiuszka',
  addOns: [],
};
