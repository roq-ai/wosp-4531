interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Organization Owner'],
  customerRoles: [],
  tenantRoles: ['Organization Owner', 'Fundraiser Manager'],
  tenantName: 'Charity',
  applicationName: 'WOSP',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage users', 'Manage charities'],
  getQuoteUrl: 'https://app.roq.ai/proposal/4b65eb47-5350-4106-886c-243041a5a013',
};
